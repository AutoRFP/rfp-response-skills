# Content use

Tile: **Content use**. Value: win rate on bids that used library content ÷ win rate on bids that did not (shown as a multiple, such as 1.5×). Change: against last period. Note: the two win rates and the library item behind the most won dollars.

## What it tells a CRO

A content library is a cost line until it shows which answers help close deals. Joining library use to bid outcomes turns the library into a list of the answers that carry revenue, and the ones nobody uses.

## Fields you need

| Field | Usually in | Spreadsheet column |
| --- | --- | --- |
| Library items used in each submitted bid | Content library usage report, or the RFP platform's answer history | Bids: Library items used |
| Bid outcome and outcome date | RFP platform or CRM | Bids: Outcome, Outcome date |
| Deal value | CRM | Bids: Value (joined from Deals) |
| Item owner and last review date | Content library | Optional, for the action list |

List library items in one cell per bid, separated by semicolons, with the same item names every time.

## Formula

Count decided bids (won or lost) with an outcome date in the period.

1. **Tag** each library item used in a submitted bid.
2. **Join** it to the bid outcome.
3. **Win rate with an item** = won bids that used the item ÷ decided bids that used it.
4. **Win rate without it** = won bids that did not use the item ÷ decided bids that did not use it.
5. **Rank** items by won dollars: the sum of deal value on won bids that used the item.

- **Tile value** = win rate on bids with any library content ÷ win rate on bids with none.
- Show the per-item table (item, uses, won dollars, win rate with, win rate without) beside the tile or in the footer.

This is a correlation. A strong item may sit in bids that were going to close anyway. Say so in the footer, and say beside any item used in fewer than 10 decided bids that the sample is small.

## Cuts

- Item, ranked by won dollars (the main cut).
- Library section or content type (security, case studies, implementation, pricing, legal terms).
- Segment and bid type.
- Items with no uses in the period, as a list to review or retire.

## What good looks like

The team ties content to the bids it won and the ones it lost. Product and marketing help keep the items that move revenue current, and the library is shared across teams instead of kept in silos.

## The trap

Content volume is a cost. Every item in the library needs an owner and a review, so each one added makes the library more expensive to keep current. Use the ranking to cut items nobody uses as well as to promote the ones that work.

## Not tracked

- **No record of which items went into which bid:** show Not tracked. Start exporting the library usage report per bid, or tag answers with their library item when they are inserted.
- **No outcomes on bids:** show usage counts only, and Not tracked for win rates until outcomes are recorded.
- **Every bid used library content (or none did):** there is nothing to compare against. Show the per-item table and say the tile comparison is not possible this period.
