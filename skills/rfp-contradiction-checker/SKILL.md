---
name: rfp-contradiction-checker
description: Scans a completed RFP response for internal contradictions, inconsistencies between answers, and conflicts with your source content library or technical documentation. Use this skill when a user has a draft or completed RFP response and wants to check it for contradictions before submission. Also trigger when users say "check my RFP for contradictions", "find inconsistencies in my response", "QA my bid", "does my proposal contradict itself", "review my RFP answers against our content library", "consistency check", or upload an RFP response asking for a quality review. This is a pre-submission quality gate.
---

# RFP Contradiction Checker

Performs a systematic review of a completed RFP response to find internal contradictions between answers, inconsistencies with source documentation, and factual conflicts that could undermine credibility with evaluators.

## Works Well With

- **Compliance Matrix Builder** - Build the matrix first so you know every requirement; then use this skill as the final quality gate before submission
- **Executive Summary Generator** - Run contradiction checking before writing the exec summary so it does not inherit inconsistencies from the body

## Why This Matters

Nothing kills an RFP score faster than contradicting yourself. When one answer says "we support on-premise deployment" and another says "our solution is cloud-only," evaluators lose confidence in every answer. This is especially common when multiple SMEs contribute sections independently, when content is pulled from a library without checking context, or when responses are reused from previous bids without full adaptation.

Evaluators are trained to cross-reference answers. This skill does the same thing before they do.

## Input Requirements

### Required: The RFP Response
The completed or near-complete RFP response to check. Accepted formats:
- `.docx` - Word document with questions and answers
- `.xlsx` / `.csv` - Spreadsheet with question-answer pairs (common for compliance questionnaires)
- `.pdf` - PDF export of the response
- Copy-pasted text of specific sections

### Optional but Recommended: Source Content
One or more sources of truth to check the RFP response against:
- **Content library** - A document or folder of approved response content
- **Technical documentation** - Product docs, architecture docs, API docs
- **Company website** - URL to check claims against published information
- **Previous RFP responses** - To check for inconsistencies across bids
- **Capabilities document** - A reference file describing what you can and cannot do

The more source material provided, the more thorough the contradiction check.

## Workflow

### Step 1: Ingest the RFP Response

Read the full RFP response. Build an index of every question-answer pair, noting:
- Question number or identifier
- The section or category it belongs to
- The core claim(s) made in each answer
- Any specific numbers, dates, timelines, or commitments stated

If the response is very large, work through it section by section, but always cross-reference across sections at the end.

### Step 2: Internal Contradiction Scan

Compare every answer against every other answer looking for:

**Direct contradictions:**
- Answer A says X, Answer B says not-X
- Example: Q12 says "implementation takes 6-8 weeks" but Q45 says "typical deployment is 4-6 months"

**Numerical inconsistencies:**
- Different numbers for the same metric in different answers
- Example: Q8 says "99.99% uptime SLA" but Q33 says "99.9% availability guarantee"

**Capability conflicts:**
- One answer claims a capability, another answer limits or denies it
- Example: Q15 says "full API access for all modules" but Q28 says "API access available for core modules only"

**Timeline mismatches:**
- Different answers give different timelines for the same activity
- Example: Q20 says "data migration typically takes 2 weeks" but Q35 says "migration is a 6-week workstream"

**Scope inconsistencies:**
- Answers that imply different scope of what is included vs. excluded
- Example: Q10 says "training is included" but Q50 says "training packages are available as an add-on"

**Terminology drift:**
- The same thing described with different (potentially confusing) names
- Example: Sometimes called "Dashboard," sometimes "Analytics Console," sometimes "Reporting Hub" -- evaluators may think these are different things

**Tone/confidence inconsistencies:**
- One answer is definitive ("we do X") while another hedges on the same topic ("we can potentially support X")

### Step 3: Source Content Comparison (if provided)

If the user provided source documentation, compare every claim in the RFP response against the source material:

**Factual accuracy:**
- Do stated capabilities match the technical documentation?
- Do quoted statistics match published data?
- Do described processes match documented workflows?

**Overpromises:**
- Does the RFP response claim more than the source documentation supports?
- Are there commitments that go beyond standard offerings?

**Outdated information:**
- Does the response reference features, certifications, or capabilities that are no longer current?
- Are version numbers, dates, or statistics outdated?

**Missing caveats:**
- Does the source documentation include limitations or conditions that the RFP response omits?
- Example: Technical docs say "supports up to 10,000 concurrent users" but the RFP answer just says "highly scalable"

### Step 4: Generate the Contradiction Report

Present findings organized by severity:

## RFP Contradiction Report

### Summary
- Total answers reviewed: [X]
- Contradictions found: [X]
- Critical (must fix): [X]
- Moderate (should fix): [X]
- Minor (consider fixing): [X]

### Critical Contradictions
Issues that an evaluator would likely catch and that could result in disqualification or significant score reduction.

For each:
| # | Type | Answer A | Answer B | The Contradiction | Suggested Resolution |
With full quotes from both answers showing the conflict.

### Moderate Contradictions
Inconsistencies that undermine confidence but are unlikely to disqualify.

### Minor Inconsistencies
Terminology drift, tone mismatches, or minor numerical rounding differences.

### Source Content Conflicts (if applicable)
Claims in the RFP response that conflict with provided documentation.

For each:
| # | RFP Answer | Source Document | The Conflict | Suggested Resolution |

### Consistency Recommendations
General observations about patterns -- e.g., "Implementation timelines are described differently in 4 separate answers; standardize on a single range and reference it consistently."

### Step 5: Resolution Assistance

After presenting the report, offer to help resolve contradictions:
- For each critical contradiction, suggest which answer is likely correct (based on source docs if available) and provide corrected language
- For terminology drift, suggest a standardized glossary
- If patterns emerge (e.g., all security answers have inconsistencies), flag that a specific SME should review their entire section

## Output Format

- Quick check (fewer than 30 questions): results directly in conversation
- Full review: create as `.md` file and present to user
- If user requests DOCX or PDF: use the appropriate creation skill

## Important Principles

- Every contradiction flagged must include the exact text from both conflicting answers so the user can see the problem immediately. Do not summarize -- quote.
- Severity classification matters. Not every inconsistency is critical. An evaluator will not disqualify you for calling the same feature two different names, but they will disqualify you for contradicting a mandatory requirement.
- Suggested resolutions should favor accuracy over optimism. If two answers conflict and one is more conservative, the conservative answer is usually the correct one to keep.
- This is a quality gate, not a rewrite tool. Flag the problems clearly and help resolve them, but the SMEs who wrote the answers should confirm which version is correct.
- Be thorough. Check every answer against every other answer. The contradictions that evaluators find are often between answers that are 50 pages apart.
