---
name: pr-triage
description: Triage pull request comments, review feedback, linked issues, and observed validations; propose precise follow-up while requiring user authorization before code changes or publication.
---

# PR Triage

Create an evidence-based triage report for the requested pull request. Follow the repository's instructions and reporting conventions. The default activity is read-only; triage does not authorize code changes or GitHub writes.

## Gather context and evidence

1. Identify the repository and PR, and record its title, goal, base/head, changed files, and current state when available. Read applicable repository guidance and use its approved report format if one exists.
2. Use the GitHub CLI (`gh`) for GitHub access as required by the repository instructions; do not use a browser to authenticate. If the first `gh` attempt fails, retry with access outside the sandbox when available and allowed by the environment. Report any remaining access limitation accurately.
3. Collect relevant top-level PR comments, inline review comments and their thread history, requested changes, linked issues and their discussion, and current check results. Do not treat a flat comment list as complete thread context. If a source cannot be accessed, say so rather than inferring its contents.
4. For each comment or issue, inspect the referenced code and enough surrounding implementation, tests, diffs, or logs to understand the point. Check whether later changes or replies have already addressed it. Cite the exact evidence and relevant location; do not assert a root cause or resolution without support.

## Classify each point

Classify every relevant comment or issue using the repository's terminology where defined. Otherwise use a clear label such as **code change needed**, **response or clarification only**, **already addressed**, **not applicable**, **duplicate**, **informational**, or **blocked/ambiguous**. Preserve the source identifier or link and explain the classification.

For each point, include:

- context and concise summary of the concern;
- classification and priority/severity when supported by project convention or evidence;
- relevant code, thread, issue, contract, or validation evidence;
- concrete proposed correction or precise response, including why it does not apply when appropriate;
- validation needed or already observed, with source and status.

Do not collapse distinct concerns into a vague summary. Related duplicates may be grouped if each source is still identified. Keep proposed fixes scoped to the evidence and avoid speculative code changes.

## Report context, checks, and next steps

Use the repository's report template when available. Otherwise report these sections:

1. **Context** — PR identity and goal, base/head, relevant plan or acceptance criteria, and scope reviewed.
2. **Comments and issues** — each item with source, classification, context, evidence, and proposed correction or response.
3. **Validations observed** — checks or logs actually inspected, with source and status (passed, failed, pending, skipped, or unavailable when evidenced). Do not infer a result from configured workflows or from an earlier revision.
4. **Next steps** — proposed actions, required user decisions, blocked items, and validation still needed.

If the repository's report convention is unknown, do not invent that it is approved; use the requested sections above as a clearly labeled triage report. If no issues or comments are accessible, state the scope and access limitation instead of implying that none exist.

## Get authorization before changes or publication

Before changing code, present the proposed correction to the user with the affected files or locations, intended behavior, evidence, and validation plan. Stop and wait for explicit authorization. Do not treat a general triage request or a request to draft a reply as authorization to modify code. Apply only the changes covered by the user's authorization; if the work reveals a material scope change, present the new proposal and wait again.

After an authorized code change, run only the appropriate validations supported by repository instructions and the authorized scope, then record the observed results. Prepare a separate draft response for each affected comment or issue explaining what changed (with relevant location and observed validation) or why the point does not apply. Do not publish replies, comments, or issue updates unless the user explicitly asks for that publication. Do not approve or merge the PR, and do not perform other GitHub mutations outside the specific publication the user requested.

At all times, report only evidence actually observed and leave approval, merge, and publication decisions with the user.
