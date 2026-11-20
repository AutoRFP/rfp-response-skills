# Connections

Find where each number's data lives before pulling anything. Every number on the page needs a source the user has confirmed.

## 1. Check what is connected

Check silently first (in Claude: the listed MCP tools, ListConnectors or ToolSearch). Look for:

| Source | What it gives the dashboard |
| --- | --- |
| CRM | Deals: amount, status, stage, created and close dates, segment, forecast category, owner, last activity, buyer contacts, loss reasons, close-date history |
| RFP platform (AutoRFP.ai or the one the team uses) | Bids: deal link, type, received, due and submitted dates, go/no-go call and override, outcome, status, owner, SME tasks |
| Content library | Which library items went into which submitted bid |
| Customer success or renewals tool | Renewal-cycle RFPs: account, ARR, type, due date, outcome |
| Wherever SME tasks live | Assigned and answered dates for product, legal and security questions, when the RFP platform does not hold them |

Read field names from the connected systems. Do not assume a field exists because it usually does.

## 2. Map every data point to a source

Fill this map with the user. One row per data point, with the system, the object and field, and how the data arrives.

| Number | Data point | System | Object and field | Arrives by |
| --- | --- | --- | --- | --- |
| Pipeline influenced | Deal amount, status, created and close dates, size band | CRM | | connector / export / missing |
| Pipeline influenced | Link from bid to deal | RFP platform or CRM | | |
| Pipeline influenced | Bid submitted date | RFP platform | | |
| Revenue leakage | Lost or delayed, days delayed | CRM | | |
| Revenue leakage | Hand-off reason | CRM or a leak log | | |
| Go/no-go accuracy | Call, overridden by, outcome, outcome date | RFP platform, CRM or a spreadsheet | | |
| SME bottleneck tax | Days waiting by team (product, legal, security) | RFP platform or task tool | | |
| Content use | Library items used per bid | Content library or RFP platform | | |
| Requirement gaps | Gap or objection on lost and open bids | CRM loss reasons, win/loss reviews, RFP requirements | | |
| Churn from RFPs | ARR, RFP type, due date, outcome, ARR after | Renewals tool or CRM | | |
| War room | Stage, forecast category, owner, last activity, buyer contacts, needs an RFP | CRM | | |
| War room | Readiness, main risk, the ask on open bid deals | The bid team's weekly review | | |
| War room | Due date of the live bid | RFP platform | | |

A data point with no source is a number that will show **Not tracked**. List those numbers for the user now, with the field each one needs.

## 3. When a source is missing

1. Search the connector registry for the system by name (in Claude: SearchMcpRegistry), and offer the match with SuggestConnectors.
2. Connect nothing without the user's approval.
3. If no connector exists, or the user prefers files, ask for an export (section 4).

## 4. Export fallback

Ask for one file per tab of `assets/bid-reporting-dashboard.xlsx`, as CSV or XLSX: one row per record, dates as YYYY-MM-DD, amounts in one currency with no symbols. Columns in this order:

**Deals** (CRM, plus the weekly review): Deal ID, Account, Deal name, Segment, Size band, Amount, Status (Open, Won, Lost), Created, Close date, Forecast category (Commit, Most likely, Best case, Pipeline, Closed), Needs an RFP (Y or N), Owner, Stage, Last activity, Buyer contacts, Readiness (On track, Watch, At risk), Main risk, The ask.

**Bids** (RFP platform): Bid ID, Deal ID, Account, Bid type, Received, Due, Submitted, Go/no-go call (Go or No-go), Overridden by, Outcome (Won, Lost, Pending, Not submitted), Outcome date, SME days: product, SME days: legal, SME days: security, Library items used (separated by semicolons), Gap or objection, Status, Notes, Owner.

**Leaks** (CRM or the bid team's log): Deal ID, Account, Value, Leak type (Lost or Delayed), Days delayed, Hand-off reason, Date recorded, What happened.

**Renewals** (renewals tool or CRM): Account, ARR, RFP type (Security questionnaire, DDQ review, Re-tender), Due, Status, Outcome (Retained, Contracted, Churned, Pending), ARR after, Closed, Owner.

The spreadsheet adds the joined and computed columns (bid value, bid touched, cycle days, next bid due, ARR lost) itself. A missing column is fine: the numbers that need it show Not tracked.

## 5. Join bids to deals

- Use the method agreed in step 3 of SKILL.md: the CRM deal ID on the bid, a CRM checkbox, or a match on account name with the bid received between the deal's created and close dates.
- **Match rate** = bids matched to a deal ÷ all bids in the pull. Show it in the footer.
- Keep unmatched bids in a working file (`unmatched-bids.csv`) and offer to review them with the user. Never guess a match.

## 6. Confirm the map

Show the filled map, the numbers that will show Not tracked and the join method. Pull data only after the user confirms. Save the map with the setup, so the weekly refresh uses the same sources.
