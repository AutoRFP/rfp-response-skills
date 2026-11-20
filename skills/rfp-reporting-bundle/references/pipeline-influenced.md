# Pipeline influenced

Tile: **Pipeline influenced**. Value: new pipeline on bid-touched deals this period. Change: % against last period. Note: closed-won on bid-touched deals, and velocity with a bid against without.

## What it tells a CRO

Sales leaders run on pipeline and closed-won. Bids already sit inside both, so this number puts the bid team's work in the units the CRO is measured on. It answers one question: how much of the number did a bid touch, and did those deals close faster?

## Fields you need

| Field | Usually in | Spreadsheet column |
| --- | --- | --- |
| Deal ID, account, amount | CRM opportunity | Deals: Deal ID, Account, Amount |
| Status (open, won, lost) | CRM stage | Deals: Status |
| Created date, close date | CRM | Deals: Created, Close date |
| Size band and segment | CRM (or derived from amount) | Deals: Size band, Segment |
| Link from bid to deal | RFP platform project field, or a CRM checkbox | Bids: Deal ID |
| Bid submitted date | RFP platform | Bids: Submitted |

## Formula

- **Bid-touched deal:** a deal with at least one bid linked to it, by the definition agreed in step 3.
- **Pipeline influenced** = sum of amount on bid-touched deals created in the period, whatever their status now.
- **Closed-won influenced** = sum of amount on bid-touched deals won with a close date in the period.
- **Velocity with a bid** = average days from bid submitted to close, on won bid-touched deals closed in the period.
- **Cycle with and without a bid** = average days from created to close on won deals closed in the period, for bid-touched deals against deals with no bid, by size band. Compare like with like: the same size band, the same period.
- **Share of the number** = pipeline influenced ÷ all pipeline created in the period. Show it only when the CRM total is in the pull.

Change against last period: (this period − last period) ÷ last period.

## Cuts

- Size band (small, mid-market, enterprise): the velocity comparison only means something within a band.
- Segment or region.
- Bid type (RFP, RFI, security questionnaire, DDQ).
- New business against renewal and expansion.

## What good looks like

The bid team uses the same pipeline definition as RevOps or Sales Ops and counts the bookings it works on in dollars. When leaders know the team influences pipeline, the team is part of the strategic conversations, and the forecast call asks for its view.

## The trap

The CRO already has a velocity formula: opportunities × win rate × average deal value ÷ sales cycle length. A bid team velocity number built another way gets challenged on the call. Show the cycle days the CRO's formula uses, and agree the definition with RevOps before the number goes on the page.

## Not tracked

- **No link from bid to deal:** show Not tracked. Start capturing the CRM deal ID on every RFP platform project, or a "bid team involved" checkbox on the opportunity. Until then, a match on account name within a date window works as a stopgap; report its match rate.
- **No bid submitted date:** show pipeline and closed-won, and Not tracked for velocity. Start capturing the submitted date on every bid.
- **No deals without a bid in a band:** show the bid-touched cycle only, and say there is nothing to compare against.
