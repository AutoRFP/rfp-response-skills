# Outputs

Two outputs from the same numbers: a one-page Artifact in Claude, or the filled spreadsheet anywhere. Then the weekly refresh.

## One-page Artifact (in Claude)

Publish one page with the Artifact tool, laid out like the deck's dashboard slide ("One page, all eight numbers").

**Header:** "[Company] bid dashboard", the period against last period, the refresh date and who it is for.

**Tiles,** two rows of four, in this order:

| Tile | Value | Unit line | Change |
| --- | --- | --- | --- |
| Pipeline influenced | $ | this period | % against last period |
| Revenue leakage | $ | slipped away | % |
| Go/no-go accuracy | % | of calls right | points |
| SME bottleneck tax | dollar-days | waiting on SMEs | % |
| Content use | multiple, such as 1.5× | win rate with library content | against last period |
| Requirement gaps | $ | lost to named gaps | % |
| Churn from RFPs | % | of renewal ARR | points |
| War room | $ | ACV on the must-win list | % against the last saved run |

Each tile shows its value, the change against last period and one line of note from its reference (for example "Backed [x]% won, overridden no-gos [y]%"). Color the change by whether it is good news: leakage, the SME tax, requirement gaps and churn are better when they fall. A tile that cannot be computed shows **Not tracked** in gray with "Start capturing: [field]".

**War-room table** under the tiles: the must-win deals from [War room](war-room.md), largest ACV first, each with stage, ACV, due date, readiness, main risk, the ask and owner. Flag deals with no activity in 14+ days or a single buyer contact. Under it, the share of forecast pipeline expected to need an RFP. The CRO one-pager's must-win table uses the same list.

**Footer:** the definitions agreed in step 3, the source of each number, the join match rate, small-sample notes, and the line "Computed from [sources] on [date]".

Build notes:

- Keep the data as a JSON block inside the page and render the tiles from it, so the refresh only swaps the data.
- Values are text, never images. The page reads on a phone and in light and dark themes.
- Add a trend line to a tile only when earlier runs give real data points for it. Never draw a trend from a guess.
- Save the Artifact URL in the setup. Every refresh republishes to the same URL.
- Keep the page private. Share it only when the user asks.

## Spreadsheet (any client, or on request)

1. Copy `assets/bid-reporting-dashboard.xlsx` and name the copy `[company]-bid-dashboard-[period].xlsx`.
2. On Deals, Bids, Leaks and Renewals, delete the example rows (every row with its Example column filled).
3. Paste the pulled data under the navy headers, in the column order from [Connections](connections.md). Gray headers are formulas: leave them, and fill them down to the last row of data. On Bids, Value (column E) is a formula, so the export goes into A:D and from F onwards.
4. On Dashboard, set the period start and end, how many must-win deals to list (five by default), the look-ahead days and the as-at date for activity flags. Last period fills itself.
5. Recalculate, check that no cell shows an error, and replace the note of any tile whose data is missing with Not tracked and the field to capture.
6. Hand the file back and say which numbers are Not tracked.

The War room tab lists the must-win deals from the Deals tab.

## Weekly refresh

Ask: "Refresh this every week before the forecast call?" The default is weekly, early on the working day before the call, in the user's time zone.

**In Claude:** create a scheduled task (the scheduled-tasks tool) named "Bid dashboard refresh" with a prompt that carries everything a fresh run needs:

- where the setup and the connection map are saved, and the Artifact URL;
- re-pull the same sources, recompute every number with the saved definitions, and republish the same Artifact;
- save this run's must-win list and its ACV with the setup, so the next run can show the War room change;
- if a source fails, publish with Not tracked on the numbers it feeds and say which source failed, instead of reusing last week's figures;
- send, post, email and write back nothing.

Tell the user when the first run is due and how to pause or change the schedule.

**Elsewhere:** give the user the steps: run the same exports, paste them into the spreadsheet, set the new period, and check for errors.

Sending the page or the file to anyone (email, Slack, Teams, a CRM note) is a separate action. Ask for approval each time.
