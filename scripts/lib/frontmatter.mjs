// Minimal SKILL.md frontmatter reader. No dependencies, so the repo needs no
// package.json or lockfile (Anthropic's directory holds plugins that ship one).
// It reads top-level scalar keys: plain, quoted, folded (>) and literal (|)
// values, including plain values that continue on indented lines.

export function splitFrontmatter(text) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!match) return null;
  return { raw: match[1], body: text.slice(match[0].length) };
}

export function parseFrontmatter(raw) {
  const lines = raw.split(/\r?\n/);
  const out = {};
  for (let i = 0; i < lines.length; i++) {
    const m = /^([A-Za-z_][\w-]*):(?:\s(.*))?$/.exec(lines[i]);
    if (!m) continue;
    const key = m[1];
    let value = (m[2] ?? '').trim();
    const cont = [];
    while (i + 1 < lines.length && (/^\s+\S/.test(lines[i + 1]) || lines[i + 1] === '')) {
      cont.push(lines[++i]);
    }
    while (cont.length && cont[cont.length - 1].trim() === '') cont.pop();
    if (/^[>|][-+]?$/.test(value)) {
      const folded = value.startsWith('>');
      const parts = cont.map((l) => l.trim());
      value = folded ? parts.join(' ').replace(/\s+/g, ' ').trim() : parts.join('\n');
    } else if (value === '' && cont.length) {
      value = null; // a nested map or list: not a scalar
    } else {
      if (cont.length) value = [value, ...cont.map((l) => l.trim())].join(' ').trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
    }
    out[key] = value;
  }
  return out;
}

export function readSkillFrontmatter(text) {
  const parts = splitFrontmatter(text);
  if (!parts) return null;
  return { ...parseFrontmatter(parts.raw), _body: parts.body, _raw: parts.raw };
}

export const SKILL_NAME = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const RESERVED_WORDS = /(^|-)(claude|anthropic|anthropics)(-|$)/;
