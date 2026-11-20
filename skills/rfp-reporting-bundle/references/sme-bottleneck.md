# SME bottleneck tax

Tile: **SME bottleneck tax**. Value: deal value × days waiting for an SME, summed this period (in dollar-days). Change: % against last period. Note: average days waiting per bid and the team with the most days.

## What it tells a CRO

Every day a deal waits for an expert is a day it can slip or be lost. Waiting days on their own sound like a scheduling complaint. Waiting days multiplied by deal value are revenue at risk, and that is a number a CRO acts on.

## Fields you need

| Field | Usually in | Spreadsheet column |
| --- | --- | --- |
| Bid, linked deal and value | RFP platform and CRM | Bids: Bid ID, Deal ID, Value |
| Days waiting on product | RFP platform task dates (assigned to answered) | Bids: SME days: product |
| Days waiting on legal | RFP platform tasks, or the legal queue | Bids: SME days: legal |
| Days waiting on security | RFP platform tasks, or the security team's queue | Bids: SME days: security |
| Due date | RFP platform | Bids: Due |

Days waiting = days from an SME task being assigned to it being answered. Count business days if the task dates allow, and say which in the footer.

## Formula

- **Tax for a bid** = deal value × days waiting for an SME on that bid.
- **Tax by team** = sum over bids of deal value × that team's days waiting (product, legal, security, or the team's own list).
- **SME bottleneck tax** = sum of the team taxes on bids due in the period. This is the tile value.
- **Average days waiting** = total SME days ÷ bids with any SME wait, for the note.

Example of the unit: a deal worth 400,000 that waits 6 days on product carries a tax of 2,400,000 dollar-days.

Change against last period: (this period − last period) ÷ last period.

## Cuts

- Team (product, legal, security, others the team names). This is the main cut.
- Commit-stage deals against the rest, since a wait on a commit deal moves the forecast.
- Segment and size band.

## What good looks like

The bid team reports SME delays as dollars at risk, by team, every period. The SME leaders agree the measure before it goes on the page.

## The trap

The tax lands on named teams. Shown without warning, it reads as blame and the SMEs stop helping. Get the SME leaders on board before the first report, and thank SMEs when their days come down.

## Not tracked

- **No SME task dates:** show Not tracked. Start assigning SME questions as tasks in the RFP platform (or wherever SME tasks live) so assigned and answered dates are kept.
- **Tasks kept but not by team:** tag each SME with a team once, in the setup, and reuse the tags.
- **No linked deal value:** show days waiting only, and Not tracked for the tax until bids carry the CRM deal ID.
