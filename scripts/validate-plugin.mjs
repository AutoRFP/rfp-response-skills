#!/usr/bin/env node
// Checks this plugin against the rules Anthropic's directory and the Agent
// Skills spec apply, so problems show up in CI before the portal's Validate
// step. Errors exit 1; warnings flag what the directory holds for a reviewer.
//
// Usage: node scripts/validate-plugin.mjs

import { execFileSync } from 'node:child_process';
import { existsSync, lstatSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { RESERVED_WORDS, SKILL_NAME, readSkillFrontmatter } from './lib/frontmatter.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

function readJson(rel) {
  try {
    return JSON.parse(readFileSync(join(root, rel), 'utf8'));
  } catch (e) {
    err(`${rel}: ${e.code === 'ENOENT' ? 'missing' : `invalid JSON (${e.message})`}`);
    return null;
  }
}

const isHttpsUrl = (v) => {
  try {
    return new URL(v).protocol === 'https:';
  } catch {
    return false;
  }
};

// Plugin manifest
const plugin = readJson('.claude-plugin/plugin.json');
const LISTING_FIELDS = ['documentationUrl', 'supportUrl', 'privacyPolicyUrl', 'termsOfServiceUrl'];
if (plugin) {
  const n = plugin.name ?? '';
  if (!SKILL_NAME.test(n) || n.length > 64) err(`plugin.json name "${n}" must be lowercase kebab-case, max 64 chars`);
  if (/^(claude|anthropics?|cc-plugin)-/.test(n) || /^(claude|anthropics?|claude-code|claude-mods)$/.test(n)) {
    err(`plugin.json name "${n}" is reserved by Anthropic`);
  } else if (RESERVED_WORDS.test(n)) warn(`plugin.json name "${n}" contains claude/anthropic`);
  if (/claude|anthropic/i.test(plugin.displayName ?? '')) warn('plugin.json displayName mentions Claude/Anthropic; the portal may hold it as a brand match');
  for (const f of ['version', 'description', 'author', 'license', 'homepage', 'repository']) if (!plugin[f]) err(`plugin.json is missing ${f}`);
  if (plugin.version && !/^\d+\.\d+\.\d+$/.test(plugin.version)) err(`plugin.json version "${plugin.version}" is not semver`);
  if (!plugin.author?.name) err('plugin.json author.name is missing');
  for (const f of ['homepage', ...LISTING_FIELDS]) {
    if (plugin[f] !== undefined && !isHttpsUrl(plugin[f])) err(`plugin.json ${f} must be an https URL`);
  }
  for (const f of LISTING_FIELDS) if (!plugin[f]) warn(`plugin.json has no ${f} (the directory listing reads it)`);
  if (plugin.icon && !existsSync(join(root, plugin.icon))) err(`plugin.json icon ${plugin.icon} does not exist`);
}

// Marketplace manifest (lets users add this repo as a marketplace)
const market = readJson('.claude-plugin/marketplace.json');
if (market && plugin) {
  if (!market.owner?.name) err('marketplace.json owner.name is missing');
  if (!market.metadata?.description && !market.description) warn('marketplace.json has no description');
  const entries = market.plugins ?? [];
  if (entries.length !== 1) err(`marketplace.json must list exactly one plugin, found ${entries.length}`);
  const entry = entries[0] ?? {};
  if (entry.name !== plugin.name) err(`marketplace.json plugin name "${entry.name}" must equal plugin.json name "${plugin.name}"`);
  if (entry.source !== './') err('marketplace.json plugin source must be "./"');
  if (entry.version && entry.version !== plugin.version) err(`marketplace.json version ${entry.version} must equal plugin.json version ${plugin.version}`);
  for (const f of ['icon', ...LISTING_FIELDS]) if (entry[f] !== undefined) err(`marketplace.json entry sets ${f}; set it only in plugin.json`);
}

// Skills
const skillsDir = join(root, 'skills');
const skillNames = [];
if (!existsSync(skillsDir)) err('skills/ is missing');
else {
  for (const dir of readdirSync(skillsDir).sort()) {
    if (dir.startsWith('.')) continue;
    const base = join(skillsDir, dir);
    if (!lstatSync(base).isDirectory()) {
      err(`skills/${dir} is not a folder`);
      continue;
    }
    const md = join(base, 'SKILL.md');
    if (!existsSync(md)) {
      err(`skills/${dir}/SKILL.md is missing`);
      continue;
    }
    skillNames.push(dir);
    const text = readFileSync(md, 'utf8');
    const fm = readSkillFrontmatter(text);
    if (!fm) {
      err(`skills/${dir}/SKILL.md has no frontmatter`);
      continue;
    }
    const name = fm.name ?? '';
    if (name !== dir) err(`skills/${dir}: frontmatter name "${name}" must equal the folder name`);
    if (!SKILL_NAME.test(name) || name.length > 64) err(`skills/${dir}: name must be lowercase kebab-case, max 64 chars`);
    if (RESERVED_WORDS.test(name)) err(`skills/${dir}: name may not contain claude or anthropic`);
    const desc = fm.description ?? '';
    if (!desc) err(`skills/${dir}: description is empty`);
    if (desc.length > 1024) err(`skills/${dir}: description is ${desc.length} chars (max 1024)`);
    if (/<\/?[a-zA-Z][^>]*>/.test(desc)) err(`skills/${dir}: description contains XML/HTML tags`);
    if (desc && desc.length < 80) warn(`skills/${dir}: description is ${desc.length} chars; say what it does and when to use it`);
    if (!fm._body.trim()) err(`skills/${dir}: SKILL.md body is empty`);
    const lines = text.split('\n').length;
    if (lines > 500) err(`skills/${dir}: SKILL.md is ${lines} lines (max 500)`);
    if (!existsSync(join(base, 'SOURCE.md'))) warn(`skills/${dir}: no SOURCE.md; was it synced with scripts/sync-site-skills.mjs?`);
  }
  if (!skillNames.length) err('skills/ has no skills');
}

// README and licence
const readmePath = join(root, 'README.md');
if (!existsSync(readmePath)) err('README.md is missing');
else {
  const readme = readFileSync(readmePath, 'utf8');
  const prose = readme.replace(/```[\s\S]*?```/g, ' ');
  const words = prose.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
  if (words < 40) err(`README.md has ${words} words outside code blocks (min 40)`);
  if (plugin) {
    for (const s of skillNames) if (!readme.includes(`/${plugin.name}:${s}`)) err(`README.md does not list /${plugin.name}:${s}`);
  }
  if (!/example prompts/i.test(readme)) err('README.md needs an "Example prompts" section (the directory asks for at least three)');
}
if (!existsSync(join(root, 'LICENSE'))) err('LICENSE is missing');

// Repo hygiene: the files that would be committed
let files = [];
try {
  files = execFileSync('git', ['-C', root, 'ls-files', '--cached', '--others', '--exclude-standard'], { encoding: 'utf8' })
    .split('\n')
    .filter(Boolean)
    .filter((f) => existsSync(join(root, f)));
} catch {
  warn('git is unavailable; skipped the file hygiene checks');
}
const IMAGE_OR_FONT = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.woff', '.woff2', '.ttf', '.otf']);
const BINARY = new Set(['.xlsx', '.xls', '.docx', '.doc', '.pdf', '.zip', '.skill', '.pptx', '.exe', '.dll', '.so', '.dylib', '.bin']);
const JUNK = /(^|\/)(\.DS_Store|Thumbs\.db|desktop\.ini|__MACOSX)(\/|$)/;
const LOCKFILES = /(^|\/)(package-lock\.json|yarn\.lock|pnpm-lock\.yaml|bun\.lockb?)$/;
if (files.length > 512) warn(`${files.length} files (the directory holds plugins with more than 512)`);
for (const f of files) {
  const abs = join(root, f);
  const st = lstatSync(abs);
  if (JUNK.test(f)) err(`${f}: OS junk file (blocks submission)`);
  if (st.isSymbolicLink()) err(`${f}: symlink (blocks submission)`);
  if (LOCKFILES.test(f)) warn(`${f}: lockfile (held for review)`);
  if (/(^|\/)package\.json$/.test(f)) warn(`${f}: package.json (held for review when paired with a lockfile)`);
  const ext = extname(f).toLowerCase();
  if (BINARY.has(ext)) warn(`${f}: binary file (held for review)`);
  if (!IMAGE_OR_FONT.has(ext) && st.size > 256 * 1024) warn(`${f}: ${(st.size / 1024).toFixed(0)} KiB (non-image files over 256 KiB are held for review)`);
  if (/(^|\/)\.env(\.|$)/.test(f)) err(`${f}: environment file (may hold secrets)`);
}

for (const w of warnings) console.log(`warn   ${w}`);
for (const e of errors) console.log(`error  ${e}`);
console.log(`\n${skillNames.length} skills, ${files.length} files: ${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
