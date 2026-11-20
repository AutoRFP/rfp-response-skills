# RFP sales report for the CRO

Builds the weekly report a proposal leader hands a CRO or VP Sales before the forecast call. It reports proposal work in the sales leader's units (bookings, forecast accuracy, conversion, velocity, efficiency).

Trigger on: "RFP sales report", "CRO report", "proposal team revenue report", "report to sales leadership", "build the proposal scorecard", "what should I show my CRO", "proposal team QBR numbers", or any request to turn CRM plus proposal-tool data into a revenue report for sales leaders.

Do NOT use for bid/no-bid on a single RFP, writing proposal content, or extracting RFP requirements.

## Why the report is shaped this way

- CROs are judged on hitting the number and on calling it early. Forecast credibility protects their tenure, so predictability leads.
- The layout mirrors how revenue leaders run their org: a forecast view (target attainment, coverage, commit, most likely, best case), roughly five must-win deals that represent the quarter, and metrics grouped as predictability, productivity and growth.
- The proposal-specific metrics are revenue generated, no-go rate with capacity saved, shortlist rate, go/no-go accuracy, content use against win rate, and SME bottleneck days, framed around the shift from completion to conversion.

## Step 0: First-run setup (skip if a profile exists)

Look first for a saved "RFP sales report profile" for this organization: a Notion page, a Doc artifact, or `rfp-sales-report-profile.md` in a connected folder. If one exists, read it, use it throughout, and ask only about anything marked unknown or older than two quarters. If none exists, run this setup before building the first report.

### 0a. Ask for documents first

These show what sales leaders push on, which often differs from what they say matters:

- Two or three recent forecast or pipeline call recordings or transcripts.
- The last QBR or board deck, plus its transcript if one exists.
- Any report the proposal team already sends to sales, and how it was received (read, ignored, challenged).
- Win/loss debriefs or evaluator feedback from the last two quarters.

From transcripts, extract into the profile: the questions the sales leader asks repeatedly; which numbers get challenged and which get skipped; the leader's own vocabulary (for example commit, upside, slipped, coverage, Pwin); and every moment proposals or RFPs come up, tagged as risk, blocker or win. Quote short phrases only, attributed by role. If no transcripts are available, say so in the profile and lean harder on the interview.

### 0b. Interview (AskUserQuestion, up to 4 questions per round; plain text if unavailable)

Skip anything the documents already answered. Group the rounds:

1. **The sales leader:** who is the primary reader (CRO, VP Sales, CSO, regional VPs, CEO); what they are paid on this year (bookings, NRR, margin, new logos); what they asked in the last forecast call that nobody could answer; whether they want the number, the risk or the story first; and whether they read a page, skim on a phone, or want it walked through live.
2. **Rhythm and timing:** when the forecast call happens and the quarter calendar; whether this is a weekly pre-read, a monthly review or a QBR section; and whether RevOps already sends a pack this should slot into.
3. **Definitions:** how a deal is marked RFP or proposal-supported in the CRM today; stage names and forecast categories; what counts as a win (signed, shortlisted, awarded); where go/no-go decisions are recorded and whether reasons are captured; whether SME wait time is tracked or only replies; and a rough loaded cost per hour for proposal, SE and legal time.
4. **Systems and data:** which CRM and proposal tool, and whether both are connected; who owns RevOps definitions and will sign off; which fields are reliable and which are filled in carelessly; and any account names or figures that cannot appear in the report.
5. **Politics and goals:** the one thing the team wants leadership to believe about it in six months; where the team gets blamed today (turnaround, losses, cost); which metric would embarrass them if shown honestly; who on the sales side already champions the team and who is skeptical; and a past win or no-go that saved real money, usable as a reference story.
6. **Context checks:** commercial or GovCon (GovCon switches vocabulary to Pwin, recompetes, B&P cost); new logo or renewal heavy; and rough RFP volume and average deal size per quarter, to judge whether segment-level win rates are statistically meaningful.
7. **Product and marketing hand-offs:** who in product receives gap notes and in what format (Jira, Productboard, email, Slack); who in marketing owns messaging and AEO/GEO keywords; the trend window to count over (default trailing four quarters); and whether the company website and content library can be checked for coverage of new requirements.

### 0c. Save the profile

Ask where to save it (Notion page, Doc artifact, Word Doc, SharePoint, or a markdown file in a connected folder), show the content, and save only after the user approves. Sections: readers and what they are paid on; cadence and delivery format; agreed definitions and RevOps sign-off status; systems, reliable fields and exclusions; leader vocabulary and recurring questions from transcripts; team goals, sensitivities and reference stories; context checks; open unknowns. Date the profile.

### 0d. Let the profile shape the report

- Use the leader's own words in headings, tile labels and the headline.
- Order sections by what the leader challenges most; if transcripts show the CRO opens with risk, put must-win deals above the KPI tiles.
- Answer the recurring unanswered question somewhere on the page, or show it as Not tracked with how to start capturing it.
- Drop or move to an appendix any metric the leader never engages with.
- If RFP volume is too low for segment win rates, show trailing four-quarter figures and say why.

## Step 1: Find the data sources

Silently check what is connected (ToolSearch, ListConnectors, listed MCP tools):

- **CRM:** HubSpot, Salesforce, Microsoft Dynamics, Pipedrive, Zoho, or similar. Needed: opportunities/deals with amount, stage, close date, owner, account, forecast category, closed won/lost, loss reason, and any RFP or proposal flag.
- **Proposal tool:** Loopio, Responsive, AutoRFP.ai, Arphie, Inventive, Tribble, 1up, QorusDocs, Ombud, Upland Qvidian, or similar. Needed: projects/RFPs with account, created and submitted dates, status, go/no-go decision and reason, outcome, shortlist/advance status, content used, SME assignments and response times. For trend tracking, also pull requirement-level data: each RFP question or requirement, the answer status (yes, partial, no, roadmap, workaround, custom), the answer text, and any compliance-matrix or gap notes. If the tool doesn't expose questions, ask for the RFP documents or compliance matrices for the period.
- If either is missing, run SearchMcpRegistry for it and offer SuggestConnectors. If none exists, ask for a CSV export of the same fields and carry on.

## Step 2: Settle definitions before pulling data (one AskUserQuestion, up to 4 questions)

Skip any question the profile already answers. Ask only what the systems and profile cannot answer:

1. **Reporting period and cadence:** this quarter to date (weekly view) or last full quarter (QBR view)?
2. **How a deal counts as proposal-supported:** a CRM field or checkbox, a link between proposal project and opportunity, or matching by account name within a date window. Recommend the CRM field if one exists.
3. **Target and commit:** pull from the CRM forecast, or the user supplies the RFP-influenced target?
4. **Where go/no-go decisions live:** proposal tool, CRM stage or field, or a spreadsheet.

If nobody is there to answer, use the recommended option, state the assumption at the top of the report, and continue. Ask the user to confirm the definitions with RevOps; put them in the report footer.

## Step 3: Pull, join and compute in code

Pull records into files in the working directory and compute in Python. Never estimate figures in prose.

Join proposal projects to CRM opportunities using the agreed method. Report the match rate and list unmatched records in a working file.

Compute, for the period and for the prior period (trend):

**The five headline numbers**
1. **Bookings contribution:** sum of closed-won amount on proposal-supported deals; also as % of total bookings in period. (CRO lens: bookings vs plan)
2. **Go/no-go accuracy:** win rate on pursuits marked go, against the share of declined pursuits later won by anyone (if tracked) or the historical win rate of comparable declined deals. (CRO lens: forecast accuracy)
3. **Shortlist rate:** submitted RFPs that advanced to demo, orals or shortlist, divided by submitted RFPs with a known result; plus close rate of shortlisted deals. (CRO lens: stage conversion)
4. **SME bottleneck days:** average business days commit-stage deals waited on SME input (product, legal, security), from proposal-tool assignment timestamps. (CRO lens: deal velocity)
5. **Cost per win and selling hours returned:** pursuit cost (team hours x loaded rate the user gives, or a stated default) divided by wins; hours returned from reuse, automation or self-serve if the tool reports them. (CRO lens: sales efficiency)

**Forecast view:** closed won, commit, most likely, best case for proposal-supported deals against target; pipeline coverage (open pipeline / remaining target); forecast accuracy last period (day-one call vs actual).

**Must-win deals:** the five largest open proposal-supported deals in commit or most likely, each with stage, ACV, due date, readiness (on track / watch / at risk), main risk, and the specific ask. Flag deals with no activity in 14+ days or a single buyer contact.

**Predictability, productivity, growth** (three rows each):
- Predictability: forecast accuracy on proposal deals, win rate on submitted RFPs, deals slipped from commit.
- Productivity: RFP-sourced pipeline created, median proposal cycle time, selling hours returned.
- Growth: win rate new logo vs renewal/expansion, expansion proposals sent, competitive win rate against the most frequent competitor.

**No-go ledger:** count of declined RFPs, team hours not spent, pursuit cost avoided, top no-go reasons, and how many declined deals were later won by anyone.

**Win/loss and market signals (up to four):** most frequent competitor and record against them; content correlated with wins (win rate with vs without a content item, only if sample is 10+); top loss reason; a segment sending unexpected RFPs.

**Decisions needed:** up to three asks for the CRO, each tied to a dollar amount or a must-win deal.

### Trend tracking: product gaps and new requirements

Keep a running trend log next to the profile (`rfp-sales-report-trends`, same location), so counts build across runs. Each entry records the theme, every RFP and opportunity it appeared in, dates, and buyer wording. Never count the same RFP twice for one theme.

Group requirements into themes by meaning, not exact wording ("SOC 2 Type II", "SOC2 report" and "independent security audit" are one theme). Show the grouping in the working files so a person can split or merge themes.

**Product gaps.** A gap is a requirement answered no, partial, roadmap, workaround or custom, or a loss reason or debrief that names a missing capability. A theme becomes a **product trend once it appears in more than two RFPs (3+)** inside the trend window. For each trend, build a product note:
- The gap in one line, plus up to three short buyer phrasings, quoted from the RFPs.
- Count of RFPs, first and last seen dates, and segments or industries affected.
- Logos: every account name tied to the gap (anonymize only if the profile says so).
- Revenue: ACV of affected deals split into lost, open and won-despite-the-gap, from the CRM. Lost and open together are "revenue at stake."
- Competitors in those deals who met the requirement, if known.
- What the proposal team answered (the workaround or roadmap line), so product sees the current story.
Rank trends by revenue at stake.

**New requirements for marketing.** A new requirement is a theme that did not appear in RFPs before the trend window, or that has no approved answer in the content library. It becomes a **marketing trend once more than two RFPs ask for it (3+)**. For each trend, build a marketing note:
- The requirement in one line, the count, first and last seen, and segments.
- The buyers' exact phrasings, written as the questions buyers ask, because those are the queries to target for AEO and GEO.
- Suggested keywords and question-led phrases drawn only from buyer wording, not invented.
- Coverage check: whether the company website and content library already answer it (check the public site with WebFetch when the profile allows). Mark covered, partly covered or missing.
- Win rate on deals that asked for it, if the sample is 10+.
Rank trends by how many RFPs asked and how recently.

A theme below three RFPs stays on a watch list in the trend log and isn't reported as a trend.

Win rate: count submitted proposals only and cut by segment (new logo vs expansion, deal size band). Never show a blended figure alone.

## Step 4: Build the report

Have Artifact list types. Use the Design type (or Data type if the user wants a live dashboard). One fluid page, sections in this order:

1. Header: period, week of quarter, a one-sentence headline stating the forecast position and the biggest risk in dollars.
2. Five headline KPI tiles: value, trend vs prior period, one-line note, and "CRO lens" label.
3. Forecast bar view with coverage and our call.
4. Must-win deals table.
5. Predictability, productivity, growth panels.
6. No-go ledger and win/loss signals side by side.
7. Product gaps and new requirements: two compact panels listing each 3+ trend with its count, revenue at stake (product) or coverage status (marketing), and a pointer to the full note.
8. Decisions needed this week.
9. Footer: definitions agreed with RevOps, data sources, match rate, and framework credit.

Rules:
- Every number comes from computed data. Where a metric cannot be computed, show "Not tracked" with one line on what to start capturing. Never invent a figure.
- Lead with dollars, points of win rate, days and percent of forecast. Volume counts (RFPs submitted, questions answered) go in the appendix if at all.
- Anonymize account names only if the user asks.
- If the user has a brand or design system, use it.

## Step 5: Deliver

Share the artifact with one line on the headline finding, list any metrics shown as Not tracked, the join match rate, and the assumptions made. Deliver the product note and the marketing note as separate, ready-to-send pieces (Docs, or in the format the profile names), one section per trend. Show them to the user and do not send them to product or marketing, or post them to Jira, Slack or email, without explicit approval. Offer a Slides version for a QBR as the next step. Do not post, email or write back to the CRM or proposal tool without explicit approval.
