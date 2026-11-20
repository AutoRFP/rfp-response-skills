---
name: rfp-reporting-bundle
description: Build and refresh a one-page bid reporting dashboard for sales leadership with the 7 numbers a CRO asks for (pipeline influenced, revenue leakage, go/no-go accuracy, SME bottleneck tax, content use, requirement gaps, churn and contraction from RFPs) plus a war room of the largest bids in flight. Use when asked to build a bid reporting dashboard, measure the 7 numbers, report bid team metrics to sales leadership or a CRO, set up a weekly bid dashboard, or turn CRM and RFP platform data into revenue reporting. Also writes the one-page CRO pre-read for the forecast call.
compatibility: Works with file access alone (a spreadsheet export in, a filled spreadsheet out). Connectors for a CRM, an RFP platform, a content library and a renewals tool let it pull data directly. In Claude, Artifacts give the one-page dashboard and scheduled tasks give the weekly refresh.
metadata:
  display_name: RFP Reporting Bundle
  author: AutoRFP.ai
  version: "1.0"
---

# RFP Reporting Bundle

Builds one page that reports the bid team's work in sales leadership's units: seven numbers, each for this period against the last, and a war room of the largest bids in flight. It sits beside the volume, turnaround and cost numbers the team already reports.

## Pick the workflow

- **Bid reporting dashboard** (default): follow the steps below.
- **CRO one-pager**, a written pre-read for the CRO before the forecast call: read [CRO one-pager](references/rfp-sales-report.md). It can reuse the setup, the connection map and the numbers from a dashboard run.

## 1. Setup

Look for a saved **bid reporting setup** first: a Notion page, a Doc artifact, or `bid-reporting-setup.md` in a connected folder or project files. If there is none, look for an `rfp-sales-report` profile (see the CRO one-pager) and reuse what it already answers.

Ask only for what is still missing: company name, currency, who reads the page (CRO, VP Sales, revenue leadership), the forecast call day, the fiscal calendar, the deal-size bands to cut by, and the forecast categories that make a deal must-win (default: commit and most likely).

Show the setup, ask where to save it (Notion page, Doc artifact, Word document, SharePoint, or a markdown file in a connected folder), and save it only after the user approves. Date it.

## 2. Connections

Read [Connections](references/connections.md) and follow it:

1. Check what is connected: CRM, RFP platform, content library, customer success or renewals tool, and wherever SME tasks live.
2. Map every data point each number needs to a source, using the field-to-source map in that file.
3. For a missing source, search the connector registry and suggest a connector.
4. If there is still no connector, ask for an export in the tab layout of `assets/bid-reporting-dashboard.xlsx`.
5. Show the map and confirm it with the user before pulling anything. Save it with the setup.

## 3. Definitions

Ask one round of questions, up to four (AskUserQuestion in Claude, one short message elsewhere). Skip any the setup already answers:

1. **Bid-touched deal:** what links a deal to a bid? A CRM field or checkbox, a link from the RFP platform project to the opportunity, or a match on account name within a date window. Recommend the CRM field when one exists.
2. **Period:** this quarter against last quarter, this month against last month, or another span the forecast call uses.
3. **Go/no-go calls and overrides:** where are the call and the person who overrode it recorded? RFP platform, a CRM field, a spreadsheet, or nowhere yet.
4. **Leak reasons:** tag leaks by the four hand-offs (sales to bid, bid to legal, negotiation, delivery), or by the team's own list?

If nobody is there to answer, use the recommended option, state the assumption in the footer, and continue. Save the answers into the setup. Ask the user to confirm the definitions with RevOps, so the bid team's pipeline number matches theirs.

## 4. Compute

Pull records into files and compute in code (Python, or the spreadsheet's formulas). Never work a number out in prose. Take one number at a time and read its reference before computing it:

| Tile | Reference |
| --- | --- |
| Pipeline influenced | [pipeline-influenced.md](references/pipeline-influenced.md) |
| Revenue leakage | [revenue-leakage.md](references/revenue-leakage.md) |
| Go/no-go accuracy | [go-no-go-accuracy.md](references/go-no-go-accuracy.md) |
| SME bottleneck tax | [sme-bottleneck.md](references/sme-bottleneck.md) |
| Content use | [content-use.md](references/content-use.md) |
| Requirement gaps | [requirement-gaps.md](references/requirement-gaps.md) |
| Churn and contraction from RFPs | [churn-contraction.md](references/churn-contraction.md) |
| War room | [war-room.md](references/war-room.md) |

For every number:

- Compute this period and last period with the same definition, then the change.
- Join bids to CRM deals by the agreed method. Report the match rate and keep the unmatched records in a working file.
- When a number cannot be computed, show **Not tracked** and the field to start capturing, as its reference says. Never show zero for missing data.
- Say beside the number when the sample is small (fewer than 10 decided bids).

## 5. Output

Read [Outputs](references/outputs.md).

- **In Claude with Artifacts:** publish one page laid out like the deck's dashboard slide. Eight tiles (the seven numbers and the war room), each with its value, the change against last period and a one-line note. Below them, the war-room table of must-win deals. A footer with the definitions, sources, join match rate, period and refresh date.
- **In any other client, or when the user asks for a spreadsheet:** fill `assets/bid-reporting-dashboard.xlsx` with the pulled data (delete the example rows first) and hand the file back.

## 6. Weekly refresh

Ask whether to refresh the page on a schedule. Default: weekly, the working day before the forecast call.

- **In Claude:** create a scheduled task that re-pulls the same sources with the saved setup and map, recomputes every number, and republishes the same Artifact so the link does not change.
- **Elsewhere:** give the user the steps to rerun the export and refill the spreadsheet.

Never post, email, share or write back to a CRM or any other system without the user's approval for that action.

## 7. The written pre-read

When the user wants a written page for the CRO before the forecast call, run the [CRO one-pager](references/rfp-sales-report.md) with the numbers from this run.

## Evidence rules

- Compute every figure in code from data pulled or supplied in this run. Never estimate, extrapolate or invent a value, a benchmark or a target.
- When a figure cannot be computed, show `Not tracked` and say what to start capturing. Never fill the gap with zero or an industry figure.
- Name the period, the definitions and the source of every figure, and say how many records could not be matched.
- Keep example rows, such as the fictional rows in a reference spreadsheet, out of every real report.
- Keep account names as the source has them. Anonymize them only when the user asks.
- Send, post, email or write back nothing without the user's approval.

## Included resources

- `assets/bid-reporting-dashboard.xlsx`: the reference spreadsheet. Its tabs are the export layout (Deals, Bids, Leaks, Renewals), and its Dashboard and War room tabs compute every tile with formulas. The example rows are fictional.
- `references/`: one file per number, plus connections, outputs and the CRO one-pager.
