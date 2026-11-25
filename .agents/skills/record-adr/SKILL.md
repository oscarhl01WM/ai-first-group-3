---
name: record-adr
description: Draft or record a durable architecture or product decision in an ADR, following repository-approved location, numbering, format, and status conventions. Use when an ADR is explicitly requested or a decision needs a durable rationale.
---

# Record an ADR

Create an accurate, reviewable decision record without turning a proposal into accepted team policy. An approved implementation plan is a source of context, not automatic approval of every decision described in it.

## Discover repository conventions

1. Read `AGENTS.md` or other governing instructions and the approved plan. Search decision-record directories, templates, and existing ADRs.
2. Treat a location or convention as approved only when an authoritative repository instruction or explicit team decision establishes it. A proposed path in a draft or example is not approval.
3. Inspect existing ADR filenames and contents to follow their numbering, title/date format, headings, status vocabulary, references, and supersession links. Do not invent continuity when there are no examples. If no numbering or status convention exists, propose one and get agreement before using a new numbering scheme; use `Proposed` for an unaccepted draft.
4. If no approved location is established, propose a candidate path and ask the team to approve the location before creating any ADR. If a location exists but no template does, propose the fallback sections below in the conversation; do not create a separate template file unless asked.

## Confirm the decision belongs in an ADR

- Record a discrete choice with durable rationale, meaningful alternatives, and consequences. If the topic is an implementation task, acceptance criterion, operational procedure, or unresolved question already owned by another section of the approved plan, identify that section and recommend updating it instead of duplicating it as an ADR.
- Check whether the decision has enough evidence to support a conclusion. If evidence is missing, name the gap and keep the record proposed or direct the team to the needed investigation. Do not fill gaps with assumptions presented as facts.
- Separate repository evidence, user/team input, assumptions, and unresolved questions. Cite existing files, issues, research, or other sources directly; do not invent references, consensus, owners, or approval dates.

## Draft and record

- Follow the repository's template and status vocabulary when they exist. Preserve existing numbering; inspect all records before assigning the next identifier. Never renumber or overwrite an existing ADR to make room for a new one.
- If no template exists, propose this fallback structure:

  ```markdown
  # ADR NNNN: Decision title

  - Status: Proposed
  - Date: YYYY-MM-DD

  ## Context
  ## Decision criteria
  ## Options
  ## Decision
  ## Consequences
  ## Validation
  ## References
  ```

- Label an unapproved record `Proposed` (or the repository's equivalent). State the candidate decision as a proposal. Change status to `Accepted` only after explicit user or team approval; do not infer acceptance from implementation, silence, a plan's approval, or a claimed consensus without evidence.
- Record approval only to the extent it was explicitly provided. If approval is required to create the ADR at the proposed location, stop after presenting the draft and asking for approval. Never create a real ADR as a side effect of creating or using this skill unless the user explicitly requests the ADR.
- If an accepted decision changes, preserve the old record and follow the repository's supersession convention. Do not silently rewrite history; identify the replacement and its approval state.

## Current repository evidence

At skill creation, `AGENTS.md` designates `docs/decisions/` for team-approved decision records, but that directory, ADRs, and an ADR template are absent. Recheck these facts on each use. No numbering or ADR status vocabulary is established yet. Until examples or a team decision establish them, propose a filename/numbering convention and use `Proposed` only for unaccepted drafts; ask for location approval if the governing instructions no longer explicitly designate `docs/decisions/`.
