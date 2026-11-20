---
name: executive-summary-generator
description: Generates persuasive executive summaries for RFP, bid, and DDQ responses in one pass, structured as six blocks that lead with the buyer's priorities and win themes rather than vendor history. Use this skill whenever a user has a completed or near-complete RFP response and needs an executive summary, proposal overview, management summary, or opening section. Trigger on "write the exec summary", "executive summary for this bid", "proposal overview", "management summary", "opening section for my RFP", or when the user has win themes and a completed response and wants them tied together. Also use when the user wants the summary derived directly from project or RFP content without a question-and-answer session. The executive summary is the most-read section of any proposal and this skill treats it accordingly.
---

# Executive Summary Generator for RFP

Writes the executive summary as a decision brief in six blocks, grounded in the completed response, delivered in one pass with a short validation list for SMEs.

## Why this section decides more than any other

The executive summary is the only section every evaluator reads. Technical evaluators skim the architecture section, legal reads the terms, but everyone reads page one, and it sets the lens through which every later answer is scored.

The data says the same thing. In the 2026 Proposal Win Rate Report (AutoRFP.ai x Stargazy, 97 bid professionals surveyed), high-win teams shortlist at a median of 63% versus 38% for low-win teams, 71% of high-win teams use defined win themes versus 42%, and 88% run a defined customer-insight process versus 67%. The executive summary is where win themes and customer insight become visible to an evaluator, so it is the page where those gaps open.

Most executive summaries fail because they are about the vendor. They open with "Founded in 2005, we are a leading provider of..." and the evaluator learns nothing about whether you understand their problem. Write a persuasive argument for why you should win, structured around their priorities, and let the rest of the proposal deliver the proof.

## Works Well With

- **rfp-contradiction-checker**: run after generating to confirm the summary does not contradict the body

## Inputs: use what exists, derive what's missing

Work from whatever is available and derive what you can from it. Do not stall the user with questions when the material to answer them already exists in the project. Deriving means inferring the buyer's priorities or choosing themes from the material. It never means adding a fact, commitment, named role or next step that the material does not contain: those go in the flags instead.

| Input | If provided | If missing, derive it |
|---|---|---|
| Completed or near-complete response | This is the claim inventory: the summary may only assert what the body substantiates | Ask for it, or for win themes plus key proposal points. This is the one genuinely required input |
| Original RFP | Mirror its terminology; extract evaluation criteria and weightings | Infer the buyer's priorities from the response content, and say so in the flags |
| Evaluation criteria and weightings | Weight the summary proportionally toward the highest-weighted criteria | Infer from mandatory requirements, section depth, and repeated phrases in the RFP; note the inference in the flags |
| Win themes | Structure block 4 around them | Choose the 2-3 strongest differentiators the completed response actually supports |
| Why-now trigger and verbatim buyer lines | Use them in blocks 1 and 2 | Use the RFP's own front-matter and requirement language |
| Length limit | Obey it exactly, never exceed it, because evaluators disqualify for format violations before reading content | Default to one page: at most 450 words. Cut to fit; never run over |

Ask a question only when there is genuinely nothing to derive from: no response, no RFP, no themes. One clarifying exchange at most, then write. A complete draft the user can react to is worth more than a perfect draft they had to be interviewed for.

## The six blocks

Structure the summary as six blocks. They are functions, not visible headings: the finished summary reads as continuous prose with no block numbers showing. Open with block 1 or block 2, never with company history. Make the buyer, or the outcome they are pursuing, the subject of the first sentence: "The Department gets..." or "Your investigators need...", not "[Our company] delivers...". One narrow exception: an origin-story opening works only when the vendor's history genuinely mirrors the buyer's pain, and even then it must arrive at the buyer's problem within a sentence.

1. **Decision statement.** One or two sentences: the outcome the buyer gets and why you are the credible choice.
2. **Their situation and stakes, in their language.** Prove you understand their world before saying anything about yourself. A verbatim buyer line, quoted, is the strongest possible opening evidence.
3. **Your approach at a high level, mapped to their criteria.** Pattern: "[Their priority] requires [approach]. [Capability] delivers this because [mechanism], as shown by [proof]."
4. **Differentiators.** The win themes stated directly, each tied to proof. Two to four themes only; if a competitor could claim the same sentence, sharpen it or cut it.
5. **Delivery and risk control.** How you execute and de-risk. Compress this to two or three sentences when a POC or demo follows the proposal, because the evaluation continues elsewhere. Give it full weight in formal or regulated tenders, where this block is directly scored.
6. **Commercial framing and a specific next step.** Use a next step the material already supports. That means a stage the RFP describes (an oral presentation, a demonstration, a clarification meeting) or a commitment the response already makes. Name roles, meetings or artifacts only if the response names them. If nothing in the material supports a specific next step, close on the buyer's own next stage. Then put a suggested next step in the flags for the bid team to confirm, rather than promising one in the summary. Never "we look forward to working with you", because a generic close wastes the last impression, which matters as much as the first.

## Workflow

### Step 1: Mirror the scorecard

Read the RFP for evaluation criteria, weightings, pass/fail requirements, and the buyer's exact terminology. If criteria are not stated, infer the weighting from what the RFP emphasizes and record the inference for the flags. Every paragraph you write should map to a criterion; the highest-weighted criterion gets the most convincing paragraph.

### Step 2: Inventory the claims

Read the completed response and any approved content. List what the body substantiates: capabilities, commitments, proof points, integrations, certifications. Record each commitment with its conditions, for example "subject to the Department confirming the vendor relationship". A summary that drops a condition has changed the commitment. If two sources conflict on a fact (certification status is a common one), use the most recent project-level answer and record the conflict in the flags. Never drop a topic silently, and never stop to ask about it mid-draft.

### Step 3: Draft in one pass

Write the finished summary, all six blocks, at or under the length limit. Do not produce a skeleton, a partial draft, or a list of questions in place of the draft. When a claim comes from approved content, keep its meaning and its limits exactly. If the organization requires approved wording to be used verbatim, quote it.

### Step 4: Trace every claim

Build a claim trace table: each factual claim or commitment in the summary, including the next step and any named role, beside the section of the response (or the approved content) that supports it. Remove or rewrite any claim that has no source before you deliver, and keep any condition the source attaches.

### Step 5: Attach flags for SME validation

End with a short section titled "Flags for SME validation": at most five bullets covering claims excluded as unsupported, conflicts resolved and how, criteria you inferred, and any suggested next step for the team to confirm. If the RFP gives no section for an executive summary, or says unrequested material will not be evaluated, make that the first flag and suggest where the content belongs (for example the cover letter, or the opening of the first scored section). The flags exist because SME-led drafting is one of the strongest predictors of low performance, and 94% of high-win teams in the same report have the proposal team write while SMEs review. The flag list hands experts a checking job instead of a writing job.

### Step 6: Refine on feedback

Ask whether the opening would make the buyer feel understood and whether the win themes are stated strongly enough. Expect two or three iterations; this section earns them.

## Writing rules

- Mirror the buyer's terminology. If they say "platform", do not say "solution"; if they say "colleagues", do not say "employees".
- Prefer "you get" over "we offer", and connect claims to outcomes with "because" or "so that".
- Vary paragraph openings. Never start two consecutive paragraphs with the same words: a repeated stem ("You get... You get...") reads machine-written and evaluators notice.
- Pass the skim test. Reading only the first sentence of each paragraph must still tell the whole story, because that is how busy evaluators actually read.
- No invented numbers. Where no proof point exists, state the mechanism instead; a fabricated statistic is worse than no statistic.
- Every claim must trace to the response body or approved content, including the next step and any named role, meeting or artifact. Anything you cannot support, leave out and flag. The summary makes promises; the body delivers proof.
- Active voice, short paragraphs, specific over general. "Reducing your reporting cycle from 15 days to 3" beats "improving efficiency" every time the number is real.

## Output format

Deliver exactly three things, in this order:

1. The executive summary as final prose.
2. The claim trace table.
3. The flags list.

Provide the file in the format matching the rest of the response (.md, .docx, or copy-paste ready) when asked.
