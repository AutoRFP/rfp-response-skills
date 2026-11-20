# Go/no-go accuracy

Tile: **Go/no-go accuracy**. Value: share of calls that proved right this period. Change: points against last period. Note: win rate on bids the team backed against win rate on bids it advised against that were overridden.

## What it tells a CRO

Qualification calls are a forecast. Every no-go that was overridden is a bet, and this number shows whether those bets paid. It also shows the bids the team said no to, and the time and money that saved.

## Fields you need

| Field | Usually in | Spreadsheet column |
| --- | --- | --- |
| The go/no-go call on each bid | RFP platform, a CRM field, or a spreadsheet | Bids: Go/no-go call |
| Who overrode a no-go | Same place as the call | Bids: Overridden by |
| Outcome (won, lost, pending, not submitted) | RFP platform or CRM | Bids: Outcome |
| Outcome date | RFP platform or CRM close date | Bids: Outcome date |
| Deal value, segment | CRM | Deals: Amount, Segment |
| Reason for the call | RFP platform or the go/no-go form | Optional |

## Formula

Count only decided bids (won or lost) with an outcome date in the period.

- **Win rate on backed bids** = bids called go and won ÷ bids called go and decided.
- **Win rate on overridden no-gos** = bids called no-go, overridden and won ÷ bids called no-go, overridden and decided.
- **Calls right** = (go calls that won + overridden no-go calls that lost) ÷ (decided go calls + decided overridden no-go calls). This is the tile value.
- **No-go ledger:** bids called no-go and not pursued, with their value and the reasons. Report the count and value beside the tile, never as part of the accuracy rate.

Record the call before the outcome is known. A call recorded after the result cannot be scored, so leave it out and say how many were left out.

Change against last period: this period's rate − last period's rate, in points.

## Cuts

- All bids, then segment (for example enterprise and public sector).
- Bid type.
- Who overrode the call (sales leader, account executive), for the bid team's own review.
- Reason for the call (fit, capacity, incumbent, price).

## What good looks like

No-gos are seen as strategic focus. The team tracks why it qualifies out and the opportunity cost of each decision, so a no-go reads as capacity saved for the bids it can take.

## The trap

A no-go you cannot quantify looks like lost revenue. So does a team that only ever says no. Show the value and reasons of every no-go, and show the overridden ones that won as well as the ones that lost.

## Not tracked

- **Calls not recorded:** show Not tracked. Start recording the call, its reason and the date on every opportunity before work starts.
- **Overrides not recorded:** show the win rate on backed bids only, and Not tracked for the comparison. Add an "overridden by" field next to the call.
- **Fewer than 10 decided bids in a cut:** show the counts beside the rates, or use the trailing four quarters and say so.
