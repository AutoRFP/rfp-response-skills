# Churn and contraction from RFPs

Tile: **Churn from RFPs**. Value: ARR lost or contracted after renewal-cycle RFPs that closed this period, as a share of the ARR those RFPs covered. Change: points against last period. Note: ARR at risk on renewal-cycle RFPs due in the next six months.

## What it tells a CRO

Winning is half the job. Existing customers send RFPs too: security questionnaires, DDQ reviews and re-tenders. The next questionnaire can decide whether a customer stays, so this number shows the revenue the bid team protects after the first sale.

## Fields you need

| Field | Usually in | Spreadsheet column |
| --- | --- | --- |
| Account and ARR | CRM or the renewals tool | Renewals: Account, ARR |
| Renewal-cycle RFP type | Customer success tool, RFP platform | Renewals: RFP type |
| Due date | RFP platform or the customer's calendar | Renewals: Due |
| Status | RFP platform | Renewals: Status |
| Outcome (retained, contracted, churned) and ARR after | CRM renewal opportunity or the renewals tool | Renewals: Outcome, ARR after |
| Closed date | CRM | Renewals: Closed |

## Formula

Map each customer's renewal cycle first: the quarterly security questionnaire, the yearly DDQ review, the re-tender in year three. Then:

- **ARR lost** on a renewal-cycle RFP = full ARR if the customer churned, or ARR − ARR after if it contracted.
- **Churn from RFPs** = ARR lost on renewal-cycle RFPs closed in the period ÷ ARR on all renewal-cycle RFPs closed in the period. This is the tile value.
- **ARR at risk** = ARR on renewal-cycle RFPs due in the six months after the period ends that have not closed. Six months is the default look-ahead; change it in the setup.
- Show each customer's cycle on the war room page when its ARR is above the war-room threshold.

Change against last period: this period's rate − last period's rate, in points.

## Cuts

- RFP type: security questionnaire, DDQ review, re-tender.
- Outcome: churned against contracted.
- Segment and customer size.
- Due date, by month, for the look-ahead.

## What good looks like

The bid team works with customer success to track data, quotes and results through the life of the account. There is a check-in in the first six months and a renewal playbook that starts before the questionnaire arrives. The team knows six months ahead what is coming up for renewal.

## The trap

Incumbency is not a win theme. A re-tender answered as if the renewal were safe gets scored like any other bid. Treat every renewal-cycle RFP as a new bid, with the proof gathered since the first award.

## Not tracked

- **Renewal RFPs not recorded:** show Not tracked. Start logging every security questionnaire, DDQ review and re-tender from existing customers with its account, ARR and due date.
- **Outcomes recorded without ARR after:** show churned ARR only, and Not tracked for contraction.
- **No due dates for upcoming RFPs:** show the rate for the period, and Not tracked for ARR at risk until due dates are logged.
