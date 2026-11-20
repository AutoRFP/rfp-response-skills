# War room

Tile: **War room**. Value: combined ACV of the must-win deals. Change: % against the last saved run. Note: how many are at risk, on watch and flagged, and the share of forecast pipeline expected to need an RFP.

The war-room table sits under the tiles: the must-win deals, one row each. The CRO one-pager's must-win table uses the same list.

## What it tells a CRO

The must-win deals are the CRO's forecast for the quarter. Knowing them by name, each with an owner, a readiness call, its main risk and a specific ask, every week, lets sales leadership step in while there is still time. The share of forecast pipeline that will need an RFP tells the bid team how much capacity to plan for.

## Fields you need

| Field | Usually in | Spreadsheet column |
| --- | --- | --- |
| Account, ACV (amount), status | CRM | Deals: Account, Amount, Status |
| Stage | CRM | Deals: Stage |
| Forecast category (commit, most likely, best case) | CRM | Deals: Forecast category |
| Owner | CRM | Deals: Owner |
| Last activity date | CRM activity history | Deals: Last activity |
| Buyer contacts on the deal | CRM contact roles | Deals: Buyer contacts |
| Readiness (on track, watch, at risk), main risk, the ask | The bid team's weekly review | Deals: Readiness, Main risk, The ask |
| Due date of the live bid | RFP platform | Bids: Due (Deals: Next bid due is computed) |
| Expected to need an RFP | CRM field, or the account executive's view | Deals: Needs an RFP |

## Formula

- **Must-win deals** = the five largest open bid-touched deals in commit or most likely, by ACV. Use the forecast categories the CRO uses if they are named differently, and keep the count at five unless the setup says otherwise.
- **War-room table**, one row per must-win deal: deal, stage, ACV, due date, readiness (on track, watch, at risk), main risk, the specific ask, and owner.
- **Flags:** flag a deal with no activity in 14 or more days, or with a single buyer contact.
- **Tile value** = sum of ACV on the must-win deals. The note counts the deals at risk, on watch and flagged.
- **Share of forecast pipeline expected to need an RFP** = value of open deals in commit, most likely or best case marked as needing an RFP ÷ value of all open deals in those categories.

The list is a snapshot, so the change compares with the last saved run. On the first run, leave the change out and save the list with the setup.

## Cuts

- Readiness: at-risk deals first in the note, the table stays sorted by ACV.
- Forecast category: commit before most likely.
- Owner, to spot a person carrying several must-win deals.

## What good looks like

Every must-win deal has an executive sponsor. The bid team brings a readiness call on every commit-stage bid to the forecast call, and the C-level gets a short update on the state of play each week.

## The trap

A war room can turn into a status meeting. Keep it to the ask each deal needs from sales leadership, and make sure sales leadership is in the room to make the call.

## Not tracked

- **No readiness, main risk or ask:** show the deals with stage, ACV and due date, and Not tracked in the empty columns. Start recording all three in the weekly review.
- **No last activity date or contact roles in the CRM:** leave the flags out and say they are Not tracked.
- **No "needs an RFP" field:** show Not tracked for the share. Add a checkbox on the opportunity, or ask account executives to mark commit, most likely and best-case deals each week.
