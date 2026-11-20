---
name: evaluation-panel-review
description: Scores a tender, RFP, RFT, ITT, RFQ or DDQ response against the buyer's published evaluation criteria the way an evaluation panel would, once as a strict criteria-only reader and once through each evaluator persona built from the tender documents and buyer research. Works on a finished response, a part-drafted one, or before writing starts using organisation context and likely answers as a go/no-go input. Asks for missing inputs first. Reviews and ranks fixes, never rewrites. Use whenever someone wants a bid graded, scored, marked or stress-tested against evaluation criteria, a criteria matrix, weightings or a rating scale, or asks "how would the panel score this", "what would the evaluators think", "will this pass evaluation", "mock evaluation panel", "build evaluator personas", or "score this before we decide to bid".
---

# Evaluation Panel Review

Marks a bid the way the buyer will mark it: against the criteria they published, using only what is on the page, by the people (and, at some buyers, the tools) who will actually read it.

It runs two kinds of review over the same criteria:

- **A neutral run.** A strict, criteria-only reader with no context and no goodwill. It sees the response text, the criteria wording and the rating scale, nothing else. This is the floor: what a fixed-prompt first-pass review, or a tired panel member late in the day, will credit.
- **Persona runs.** One pass per evaluator on the panel, each built from evidence about who that person is, what they own and what convinces them. Same criteria, same scale, different lens.

The gap between the two is the most useful thing this skill produces. A response that passes the neutral run but fails the people is compliant and unconvincing. A response that convinces the people but fails the neutral run has the right content in the wrong place, which is usually the cheapest fix in the whole bid.

## Why it never rewrites

Most internal reviews quietly turn into rewrites, and a rewrite hides the two things the bid team needs to see. It hides which claims have no proof behind them, because the reviewer smoothed the sentence instead of flagging the missing exhibit. And it hides who owes what, because the fix arrived already applied and nobody was asked to confirm it was true. An unsupported claim that a reviewer polished on the way past is how a bluff reaches an evaluator.

So this produces a graded review with owners attached and leaves the pen with the bid team.

## Pick the mode first

The mode decides what gets graded and what can honestly be said about the result. Infer it from what the user supplied. If it is unclear, ask (see Intake).

| Mode | The user has | You produce |
|---|---|---|
| **A. Full review** | A completed response plus the tender documents | A graded review of every criterion |
| **B. Partial review** | A part-drafted response plus the tender documents | Graded rows for drafted sections, projected rows for undrafted ones, kept visibly separate |
| **C. Pre-bid readiness** | Tender documents plus organisation context (answer library, past bids, case studies, capability statement, certifications) and the answers the team expects to give | A projected evidence check per criterion and an evaluation readiness view that feeds a bid/no-bid decision |

## Step 1: Intake. Ask only for what is missing

Grading without the right inputs produces confident nonsense, so check before you start. First, look at what is already available: attachments, anything earlier in the conversation, and any connected tools (document storage, CRM, response library, call recordings, notes). Do not ask for anything you can find yourself.

Then ask for the gaps in **one round**, at most five questions, using a structured question tool if the environment has one and a short numbered list if not. Choose from these, in this order of importance:

1. **The evaluation section of the tender.** "Can you share the tender documents, or at least the evaluation section: the criteria, weightings, rating scale and any mandatory or pass/fail requirements?" This is the exam. Without it there is nothing to grade against, and inferred criteria turn a grade into an opinion. If the user has the documents but has not shared them, wait for them. If the buyer genuinely published no criteria (common in commercial RFPs), grade each question against what it literally asks, Pass or Fail, say so at the top of the output, and invent no criteria or weightings beyond the questions themselves.
2. **The stage of the response.** "Is the response finished, part-drafted, or not started yet (in which case, what can you share about your organisation and the answers you expect to give)?" Only ask if the inputs do not make the mode obvious.
3. **Who evaluates.** "Do you know who sits on the evaluation panel, or have any research on the buyer: an insight brief, CRM notes, call notes, an org chart, public research?" This is what the personas are built from. If there is none, say the panel will be built from the tender documents and functional roles, and labelled as inferred.
4. **Scope.** "Should I review the whole response or specific sections?" Ask only for large responses.
5. **The organisation's proof base** (Modes B and C, or Mode A if no library is visible). "Is there an answer library, case study set or capability document I should check claims against?" Without one, the source check can still flag unsupported claims, but cannot spot proof the response failed to use. Say so in the output.

Wait for answers before grading. If the user says "just run it", proceed with what is there and list every assumption in the Inputs line of the output.

## Step 2: Read the tender like an evaluator

Pull these out of the tender documents before reading a word of the response. Copy them as published: do not rename, merge, split or invent anything. A tidier criteria table is a different exam from the one the panel is sitting.

- **Gates.** Mandatory requirements, conditions for participation, minimum content and format requirements, required forms and attachments, page or word limits. These are usually checked before any scoring, and failing one can remove a response regardless of quality. If the tender says content beyond a limit will not be read, grade only what sits within the limit.
- **Criteria.** Number, wording, weighting, sub-criteria, and anything the buyer says it will consider under each.
- **Rating scale.** The scale and its descriptors, word for word. If none is published, grade Pass or Fail.
- **Evaluation process.** Stages, panel composition, individual scoring and moderation, presentations or demonstrations, and any clause saying AI or automated tools may assist evaluation. If such a clause exists, quote it in the output. The neutral run is the nearest proxy for that kind of reader, but it is only a proxy: you do not know the buyer's prompts.
- **The buyer's own words.** Terms they repeat, outcomes they name, strategies and policies they reference. Evaluators credit their own wording, and a panel scanning for a phrase from their own document does not credit a synonym.
- **Price.** If price is evaluated separately or by formula, list it as "Not scored here". A narrative review cannot score a price.

## Step 3: Build the panel

**Research the reader, never the answer.** Building personas means finding out who scores and what convinces them. It never means looking for proof that would support the response. The moment you start gathering supporting evidence you begin arguing for the draft instead of marking it.

Build personas from these sources, in order of trust, and tag every line with where it came from:

1. **Tender documents** `[Tender]`: stated panel composition, named roles or contacts, the business unit that owns the outcome, which criteria clearly belong to which function.
2. **Research the user supplied** `[Research: source]`: insight briefs, CRM notes, call notes or transcripts, public research.
3. **Public information on the buyer organisation** `[Public: source, date]`: only if the user agrees and you have the tools. Keep it bounded, around five sources: org structure, the program or unit running the procurement, published strategy, procurement policy.
4. **Functional inference** `[Inferred]`: when nothing names the panel, build personas from the functions the criteria imply, such as technical lead, commercial or finance, operational or end user, risk, security or compliance, procurement or probity.

**How many.** Three to five. One per distinct lens. If two personas would score everything the same way, merge them.

**Persona card.** Keep it to this shape:

```markdown
### P1: [Role or function] | Confidence: High / Medium / Low
- Owns in this decision: ... [source]
- Criteria they will press hardest: ... [source]
- Convinced by: ... [source]
- Marks down for: ... [source]
- Their words: "..." [source]
```

Confidence is High when the tender documents name the role, Medium when research supports it, Low when it is inferred. A Low confidence persona is honest and useful. A confident persona built from nothing is fiction, and fiction in the panel becomes false comfort in the score.

**Rules for personas**

- **Personas change the lens, never the exam.** Every persona scores the same published criteria on the same scale. Concerns a persona would have that sit outside the criteria go in a separate "Outside the criteria" list. They are unscored, because the panel cannot score them, but they shape moderation, clarification questions and presentations.
- **Use roles, not invented names.** If research names a real evaluator, use their role and only public, professional context (published role, stated priorities in public documents or talks). Never profile anyone's personal life.
- **Never invent quotes, priorities or numbers.** If a field has no source, write "Unknown" and leave it.

If the user is present, show the panel in brief and ask once whether anything is wrong before scoring. Sales teams often know who really sits on the panel. If they asked for a single pass, skip the check and proceed.

## Step 4: Check the gates

Pass or Fail each gate, quoting the response or noting what is missing. A failed gate goes to the top of the output as a submission risk, ahead of any scoring, because no score matters if the response is excluded.

## Step 5: The neutral run

Read the response once, against the criteria only. One pass. Rereading to look for merit is how a review drifts into advocacy.

For each criterion:

- **Quote** the sentence being judged, or the nearest paragraph if the answer is spread out. Quote, never paraphrase: a paraphrase is already an edit, and usually a flattering one. If several criteria land on one paragraph, quote it under each and grade each separately, because the panel scores each line.
- **Grade** using the published scale, naming the descriptor the response meets and quoting what the next descriptor up requires. When torn between two descriptors, award the lower and say what would earn the higher. With no published scale, grade Pass or Fail with nothing in between: a middle grade reads as covered and gets no action. A close call is a Fail with a cheap fix.
- **Gap type**: evidence gap, explanation gap, or unanswered (see vocabulary).
- **Source check**: Used, Unused or Unsupported.

The neutral reader gives no credit for intent, for proof promised later, for a claim made in a different section, or for content that answers the criterion without making that obvious. If the evaluator has to work out that a paragraph addresses criterion 3, the neutral run assumes they did not.

## Step 6: The persona runs

Each persona grades every criterion on the same scale, with a one-line reason in their own terms. Comment most on the criteria they own, but score them all, so the spread across the panel is visible.

What changes between personas is how they read, not what they are allowed to credit. A persona brings their expertise: they will recognise relevant content that is not signposted, and they will demand the kind of proof their role cares about. They still score only what is on the page.

Score each persona independently and do not let one persona's grades inform another's. Real panels usually score individually before they moderate, and that independence is what exposes a response written for one reader. If you can run parallel sub-agents, give each persona its own, with only its persona card, the criteria table and scale, and the response.

## Step 7: Read the pattern, do not average it

Never average persona grades into a headline. A panel moderates by discussion, and an average hides the one evaluator who failed the answer. Read the pattern per criterion instead:

| Neutral run | Personas | Pattern | Usual cause | Usual owner |
|---|---|---|---|---|
| Pass | All pass | **Holds** | Leave it alone and spend the effort elsewhere | None |
| Fail | All fail | **Missing** | Proof does not exist, or the criterion is unanswered | SME or seller |
| Pass | Any fail | **Compliant, not convincing** | Answers the words of the criterion but not what this reader needs to believe it, or uses seller language instead of the buyer's | Bid manager, or SME if proof is missing |
| Fail | Any pass | **Convincing, not mapped** | The substance is there but not tied to the criterion's wording or structure | Bid manager, usually the cheapest fix in the bid |
| Any | Personas disagree with each other | **Split panel** (add to the above) | Written for one reader. Name who it lost and why | Bid manager |

With a published scale, "Pass" means reaching the descriptor the buyer defines as acceptable or satisfactory. If the scale does not define one, use the midpoint and say so.

**Example of one row read this way** (fictional tender):

> Criterion 2, "Demonstrated experience delivering services of similar scale and complexity" (30%).
> Neutral: 2 of 5, "Partially meets". The experience sits in the company overview, not under criterion 2, and no engagement is sized.
> P1 Program Director (Medium confidence): 4 of 5. Recognises the two named state agency rollouts in the overview as directly comparable.
> P2 Commercial lead (Low confidence, inferred): 2 of 5. No contract values or durations, so scale is unproven.
> Pattern: **Convincing, not mapped**, plus **Split panel**. Correction: move the two rollouts under criterion 2 and state contract value, user numbers and duration for each, if the seller can confirm them. Owner: bid manager for the move, seller for the figures. Moves: neutral and P2.

**Indicative score.** Only when the tender publishes both weightings and a numeric scale: give the neutral run's weighted score and the range across personas, labelled "indicative, not a prediction". With weightings and Pass/Fail, give the weighted share of criteria passed. With no weightings, give no score.

## Step 8: Rank the corrections

Three to seven items, ranked by weighting first, then by how many readers the fix moves (neutral plus personas), then by how cheap it is. Smallest is the operative word: the goal is the least intervention that moves a grade, not the best possible answer.

Each item:

- the quoted sentence (or "no sentence addresses this")
- evidence gap or explanation gap
- the smallest change that would move the grade, described and not written out
- the owner: seller (account lead), bid manager, or SME
- which readers it moves

If a correction could be pasted straight into the response, it has gone too far. Describe it and name who owns it.

## Mode B: Partial review

Give every criterion a status: **Drafted**, **Placeholder** (for example "[insert case study]"), or **Not yet drafted**.

- Grade Drafted rows normally.
- Treat Placeholders as not drafted, and flag an evidence gap if the placeholder points to proof that may not exist.
- For Placeholder and Not yet drafted rows, project a grade using Mode C logic if organisation context is available, and label each one **Projected**.

Never blend graded and projected rows into one score. Report the indicative score over graded rows only, state what share of the total weighting it covers, and report the projected range separately. A partial draft that scores well on its easy sections is not a partial win.

## Mode C: Pre-bid readiness

There is no response yet, so grade what the organisation can prove against what the criteria will demand.

For each criterion:

- **What the top descriptor demands**, quoted from the scale.
- **Expected answer**: what the team says it would claim, quoted from what they supplied.
- **Evidence status**: Proven (named, approved proof exists), Partial, Claim only (asserted, no proof found), or Nothing.
- **Projected grade.** Grade the expected answer as if it were written well. This is deliberately generous: if a criterion fails even with good writing assumed, writing will not fix it before the deadline, and that is the signal the bid decision needs.
- **To close the gap**: what would have to exist, and who owns getting it. Ask the user for effort or lead times; do not invent them.

Run the personas too, and list which persona concerns the organisation cannot currently answer.

Finish with **Evaluation readiness**:

- gates the organisation cannot meet (likely no-bid on their own)
- the weighted share of criteria where a top-band answer is provable today
- criteria capped below the middle of the scale with current evidence
- Unused proof worth building the response around

State plainly that this informs a bid/no-bid decision and is not one: it says nothing about price, capacity, incumbency, relationship or competition.

## Grading vocabulary

**Evidence gap.** The claim needs proof that does not exist yet, or exists but is not available to the bid team: a reference customer, a certificate, a benchmark, a diagram, a named service level. Nobody can write their way out of this. The owner is an SME or the seller, and the correction is a request, not an edit.

**Explanation gap.** The proof exists and is approved, and the response has stated it badly: buried, hedged, generic, unmapped to the criterion, or in internal language instead of the buyer's. The owner is the bid manager, and the correction is a change the bid team can make today.

The test between them: if the fix requires someone to go and get something, it is an evidence gap. If everything needed is already in hand, it is an explanation gap.

**Unanswered.** No sentence addresses the criterion. Grade it Fail and keep it visible, because it is a more urgent problem than a weak answer.

**Source check.**
- **Used**: the claim is on the page and traceable to the library, organisation context, research or an attachment.
- **Unused**: the proof base holds relevant evidence the response never reached for. Often the highest value finding in the review, because the material is approved and available.
- **Unsupported**: the claim is on the page with nothing behind it. A submission risk however well it reads.

If no proof base was supplied, say that Unused could not be assessed.

**Buyer language.** Where the tender or research captured the buyer's own words and the response uses internal vocabulary instead, that is a Fail on language, not a style note. Quote both: the buyer's phrase and the response's substitute.

## Rules that keep the grade honest

- Score only what is on the page. Intent, planned proof and claims elsewhere in the response count for nothing.
- Quote, do not paraphrase.
- Copy the criteria, weightings and scale as published. Never score a criterion the buyer did not publish.
- Separate evidence gaps from explanation gaps. They have different owners and different costs, and collapsing them is the most common way a review becomes unactionable.
- Leave open items open. Do not resolve contradictions or choose between conflicting facts. Report the conflict and hand it back.
- Do not edit the response. Not a word, not a heading.
- Never fill an evidence gap with a plausible number, logo, certification or customer name. A fabricated proof point in a review becomes a fabricated proof point in a submission.
- Do not research proof during the review. Research the reader only.
- Simulated scores are not predictions. Say so wherever a score appears.

## Output

Use this structure. Mode C replaces sections 5 to 7 with the Mode C sections above.

```markdown
# Evaluation Panel Review: [tender name, section if scoped]
**Mode:** A / B / C | **Inputs used:** ... | **Missing or assumed:** ...

## 1. Submission risks
Failed gates and Unanswered criteria. "None" if none.

## 2. Gates
| Gate (as published) | Pass/Fail | Quote or what is missing |

## 3. Criteria and scale (as published)
Criteria with weightings and sub-criteria, the rating scale with descriptors,
and any evaluation process or AI-use clause, quoted.

## 4. The panel
One card per persona, with confidence and source tags.

## 5. Score matrix
| # | Criterion | Weight | Neutral | P1 | P2 | P3 | Pattern |
(Mode B adds a Status column and marks projected cells.)

## 6. Findings
Only for criteria that are not "Holds". Per criterion: the quote, each
reader's grade with a one-line reason, gap type and source check.

## 7. Indicative score
Only when weightings and a scale are published. Labelled indicative.

## 8. Prioritised corrections
Three to seven items, each with quote, gap type, smallest change,
owner and the readers it moves.

## 9. Outside the criteria
Unscored persona concerns worth handling in clarifications,
presentations or the executive summary.
```

## Works well with

- **Before:** buyer research from internal records and public sources, which builds better personas than functional inference; a compliance or requirements matrix, which extracts the criteria table; win themes, which supply the language the response should be carrying.
- **After:** a consistency check across the whole response, as the final gate before submission.

## Failure modes

Watch for these, in yourself as much as in the response.

- Writing the improved answer in the corrections column.
- Grading generously because the response is nearly there. Nearly there is a Fail with a cheap fix.
- Presenting an inferred persona with high confidence, or giving a persona a quote nobody said.
- Letting a persona invent a criterion, such as scoring "innovation" when the buyer did not publish it.
- Averaging persona grades into one number.
- Letting persona runs see each other's grades.
- Searching for proof during the review.
- Blending graded and projected rows in Mode B.
- Presenting Mode C as the bid decision.
- Skipping the gates because scoring is more interesting.
- Scoring the whole response when the user asked about one section.
- Producing corrections nobody owns.
