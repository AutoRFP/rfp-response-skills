# Requirement gaps

Tile: **Requirement gaps**. Value: deal value lost on bids that named a gap or objection this period. Change: % against last period. Note: lost bids naming a gap, the top gap, and the open pipeline asking for it.

## What it tells a CRO

Bid teams see what the market asks for before product or sales do. Counting the gaps and objections on lost bids, then pricing them against open pipeline that asks for the same thing, turns a loss review into forecast risk and a roadmap input.

## Fields you need

| Field | Usually in | Spreadsheet column |
| --- | --- | --- |
| Gap or objection on each lost bid | Loss reason field, win/loss review, buyer debrief | Bids: Gap or objection |
| Gap or requirement on each open bid | RFP requirements, compliance matrix, the bid team's notes | Bids: Gap or objection |
| Outcome and outcome date | RFP platform or CRM | Bids: Outcome, Outcome date |
| Deal value | CRM | Bids: Value (joined from Deals) |

Use one short, consistent name per gap ("No on-premise hosting", "Pricing too complex"), so counts add up across bids and periods.

## Formula

Tag each gap or objection on lost bids, then count it.

- **Lost bids** per gap = lost bids with an outcome date in the period that named the gap.
- **Lost value** per gap = sum of deal value on those bids.
- **Open pipeline asking** per gap = sum of deal value on open (pending) bids whose requirements ask for the same gap.
- **Tile value** = lost value across all gaps in the period.
- Rank gaps by lost value, and show lost bids and open pipeline beside each.

Change against last period: (this period − last period) ÷ last period.

## Cuts

- Gap (the main cut), ranked by lost value.
- Kind of gap: product, legal, pricing, security, or a sales issue.
- Segment and region.
- New gaps this period against gaps that repeat.

## What good looks like

The team flags gaps as forecast risk on open deals, then rolls them up for product. It sends the gaps out as a short market report each quarter, with the lost value and the open pipeline beside each one.

## The trap

Gaps are more than product. A gap can be legal terms, pricing, a missing certificate, or a sales issue. Tag the kind as well as the gap, or every loss lands on the product team. Staying silent on a gap is how a team loses several bids for the same reason.

## Not tracked

- **No loss reasons on bids:** show Not tracked. Add a gap or objection field to every lost bid and fill it at the win/loss review.
- **Gaps recorded as free text:** group them into named gaps with the user once, save the list in the setup, and reuse it.
- **No requirements data on open bids:** show lost bids and lost value, and Not tracked for open pipeline asking.
