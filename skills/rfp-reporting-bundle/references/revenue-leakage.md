# Revenue leakage

Tile: **Revenue leakage**. Value: deal value lost or delayed at a hand-off this period. Change: % against last period. Note: the hand-off that leaked the most, and the split between lost and delayed.

## What it tells a CRO

It shows where deal money slips away between sales, bid, legal and delivery. No sales leader turns down a way to make a deal close sooner, and a leak priced in dollars gets fixed faster than one described as a process problem.

## Fields you need

| Field | Usually in | Spreadsheet column |
| --- | --- | --- |
| Deal ID, account, deal value | CRM | Leaks: Deal ID, Account, Value |
| Lost or delayed | CRM stage history, close-date changes | Leaks: Leak type |
| Days delayed | CRM close-date history, or the bid team's log | Leaks: Days delayed |
| Hand-off reason | Loss reason field, or a tag the bid team adds | Leaks: Hand-off reason |
| Date recorded | CRM or the log | Leaks: Date recorded |
| What happened | Notes, win/loss review | Leaks: What happened |

## Formula

Tag every leak with one hand-off reason, then price it:

1. **Sales to bid:** bad data or a late brief.
2. **Bid to legal:** rework or a slow review.
3. **Negotiation:** days added to the close.
4. **To delivery:** gaps in the hand-over to the delivery or customer success team.

- **Leakage** = sum of deal value on deals lost or delayed at a hand-off, with a date recorded in the period.
- Report **lost** and **delayed** separately as well as together.
- For delayed deals, also report **days added × deal value**, the same unit as the SME bottleneck tax.
- Use the team's own reason list if it agreed one in step 3, and keep it the same every period so the trend holds.

## Cuts

- Hand-off reason (the main cut).
- Segment and size band.
- Lost against delayed.
- Owner, for the bid team's own review only. Leave names off the CRO page.

## What good looks like

The team tracks what it promised in the proposal all the way to renewal. Won deals get a hand-over, and the buyer's requirements reach the customer success team in writing. What a proposal promises shows up later in net revenue retention.

## The trap

A deal won on overpromising becomes future churn. Every overcommitment gets paid back in service credits or a lost renewal, so a leak tagged "to delivery" often surfaces a year later in the churn and contraction tile. Check the two together.

## Not tracked

- **No loss reasons or close-date history:** show Not tracked. Start a leak log with the columns above and fill it in at every win/loss review.
- **Reasons recorded but not by hand-off:** map the existing reasons to the four hand-offs once, with the user, and save the mapping in the setup.
- **Delays not recorded:** show lost value only, and say delays are Not tracked until close-date changes are kept.
