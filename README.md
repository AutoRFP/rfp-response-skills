# RFP Response Skills

Sixteen agent skills for teams that answer RFPs, tenders, ITTs and DDQs. They cover the whole response: deciding whether to bid, pulling every requirement into a compliance matrix, researching the buyer and the competition, preparing SME interviews, writing the executive summary, checking the draft for contradictions, scoring it the way an evaluation panel would, and reporting bid results to sales leadership.

The skills work in Claude (claude.ai, the desktop and mobile apps, and Cowork) and in Claude Code. They are skills only: no MCP server, no hooks, and no external services. Built by [AutoRFP.ai](https://autorfp.ai). The same skills are listed, with one-skill downloads, at [autorfp.ai/skills/claude-rfp-skills-bundle](https://autorfp.ai/skills/claude-rfp-skills-bundle).

## Install

**From Anthropic's plugin directory.** Search for "RFP Response Skills" in the directory in Claude or Claude Code and install it.

**From this repository in Claude Code:**

```bash
claude plugin marketplace add AutoRFP/rfp-response-skills
claude plugin install rfp-response-skills@rfp-response-skills
```

**In claude.ai:** open Customize, then Plugins, add `AutoRFP/rfp-response-skills` as a marketplace and install the plugin. To install one skill on its own, download it from [the bundle page](https://autorfp.ai/skills/claude-rfp-skills-bundle) and upload it under Customize, then Skills.

Claude picks the right skill from what you ask. In Claude Code you can also call one directly, for example `/rfp-response-skills:ai-go-no-go`.

## Example prompts

- "Here is the tender pack and our website. Should we bid on this?"
- "Build a compliance matrix from these RFP files: every mandatory requirement, evaluation criterion and submission instruction."
- "Research what this buyer has said publicly about this programme before we write."
- "Who are we likely to be up against on this bid, and where are they weak?"
- "Write the executive summary for this response using our win themes."
- "Check our draft response for contradictions before we submit."
- "Score this response against the published evaluation criteria the way the panel would."
- "Set up a weekly dashboard of the seven bid numbers our CRO asks for."

## The skills

### Qualify

| Skill | What it does |
|---|---|
| `/rfp-response-skills:ai-go-no-go` | Scores a tender against a weighted seven-category framework and your company profile, flags red lines, and returns a go/no-go recommendation with the arithmetic shown. |

### Requirements

| Skill | What it does |
|---|---|
| `/rfp-response-skills:compliance-matrix-builder` | Parses single or multi-file RFP, ITT and tender packs into a compliance matrix of every requirement, evaluation criterion and submission instruction. |

### Research

| Skill | What it does |
|---|---|
| `/rfp-response-skills:competitor-intelligence` | Builds a competitor profile or battlecard for a bid, or identifies the likely field when you don't know who else is bidding. |
| `/rfp-response-skills:internal-research` | Fills the internal half of a customer-insight brief from your own CRM, email, meetings, notes and call recordings, or from exports you upload. |
| `/rfp-response-skills:external-research` | Finds the right public sources for the buyer and writes a trust-classified research report. |
| `/rfp-response-skills:customer-brief-setup` | Starts a shared customer brief from facts your team is authorised to use. |
| `/rfp-response-skills:customer-brief-research` | Researches and sources the customer brief from public or authorised material. |
| `/rfp-response-skills:build-google-dork` | Writes precise Google search queries for public filings, announcements and other open-web evidence. |
| `/rfp-response-skills:pdf-insight-finder` | Finds evidence in PDFs you supply and highlights it so writers can cite the right passage. |
| `/rfp-response-skills:completed-insight-brief` | Merges the internal and external research into one completed customer-insight brief for the bid team. |

### Write

| Skill | What it does |
|---|---|
| `/rfp-response-skills:sme-interview-prep` | Checks what your organisation already knows, then lists only the unanswered questions for each subject matter expert, grouped by subject. |
| `/rfp-response-skills:executive-summary-generator` | Writes a six-block executive summary that leads with the buyer's priorities and your win themes. |
| `/rfp-response-skills:response-insight-enricher` | Rewrites a draft answer with verified customer insight, without inventing facts. |

### Review

| Skill | What it does |
|---|---|
| `/rfp-response-skills:rfp-contradiction-checker` | Scans a draft or finished response for contradictions between answers and against your source content, and returns a punch list. |
| `/rfp-response-skills:evaluation-panel-review` | Scores a response against the buyer's published criteria as a strict reader and through each evaluator persona, then ranks the fixes. It reviews; it never rewrites. |

### Report

| Skill | What it does |
|---|---|
| `/rfp-response-skills:rfp-reporting-bundle` | Builds a weekly bid reporting dashboard with the seven numbers sales leadership asks for, plus a war room of the largest bids and a one-page CRO pre-read (the CRO report workflow is by Christina Carter). |

## What the skills run, send and fetch

- Nothing is sent to AutoRFP.ai or to any other service by this plugin. There is no MCP server, hook, agent or background process.
- The research skills use the web search and browsing tools your Claude already has, and any connectors you have chosen to enable (for example a CRM or email connector for Internal Research). Each skill falls back to files you upload when a connector isn't there.
- `pdf-insight-finder` includes a local Python script, `scripts/annotate_pdf.py`, that highlights passages in a PDF. It runs only on your machine, needs `PyMuPDF` (`scripts/requirements.txt`), and makes no network calls. The skill works without it.
- `rfp-reporting-bundle` includes a spreadsheet template (`assets/bid-reporting-dashboard.xlsx`) and `customer-brief-research` includes a Word worksheet (`assets/Customer-Brief-Research-Worksheet.docx`).
- No skill pulls instructions from the internet. Everything Claude follows is in this repository.

## Where the skills come from

The skills are written and maintained on the AutoRFP.ai website, which is the source of truth. `scripts/sync-site-skills.mjs` copies them into `skills/`, and each skill's `SOURCE.md` records the commit it came from. Please don't edit `skills/` by hand. Open an issue instead and we will fix the skill at the source.

Run the checks with `node scripts/validate-plugin.mjs`, and test locally with `claude --plugin-dir .`.

## Licence

The plugin is released under the [MIT License](LICENSE). The six customer-research skills (`external-research`, `customer-brief-setup`, `customer-brief-research`, `build-google-dork`, `pdf-insight-finder`, `response-insight-enricher`) carry their own `LICENSE.txt`. It allows internal and commercial use, but not use in a product that competes with AutoRFP.ai's RFP and proposal automation offerings. That file takes precedence for those folders.

## Support

Open an issue on this repository, email support@autorfp.ai, or use [autorfp.ai/contact](https://autorfp.ai/contact). For a walkthrough of using Claude across an RFP response, see [How to respond to an RFP with Claude](https://autorfp.ai/blog/how-to-respond-to-an-rfp-with-claude).
