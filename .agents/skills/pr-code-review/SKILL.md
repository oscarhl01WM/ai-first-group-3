---
name: pr-code-review
description: Review a pull request diff against its goal, approved plan, acceptance criteria, and repository rules. Produce evidence-based findings and check status without changing code or PR state.
---

# PR Code Review

Review the proposed changes and return actionable findings and observed check evidence. This is a read-only review: do not edit files, publish PR comments, submit or dismiss reviews, approve, merge, or otherwise change repository or PR state.

## Establish review context

1. Read applicable repository instructions and identify the PR base and head revisions. Use the team's approved review format and terminology when documented.
2. Find the feature goal, approved plan, and acceptance criteria from authoritative repository sources or explicit user direction. Treat drafts and examples as context, not approval. If an expected source is absent, record that limitation rather than inventing intent.
3. Inspect the complete diff, then read enough surrounding code, callers, tests, interfaces, and configuration to understand affected behavior and integration boundaries. Trace relevant data and control flow beyond the changed lines when needed. Focus on defects introduced or exposed by this change.
4. Inspect available CI and automated check results before reporting findings. Do not repeat an issue that an observed automated check already reports; report the check and its observed status instead. If CI evidence is unavailable, say so.

## Review in separate passes

Keep the passes distinct so that one perspective does not substitute for another:

1. **Behavior, edge cases, and regressions:** compare implemented behavior with the goal and acceptance criteria; examine boundary conditions, error paths, state transitions, compatibility, and affected call sites.
2. **Security and privacy:** inspect trust boundaries, authorization, input handling, secrets, sensitive data exposure, logging, retention, and privacy-relevant flows as applicable to the changed code.
3. **Plan, contracts, and project policy:** compare the implementation with the approved plan; inspect public and internal contracts, schemas, APIs, events, configuration, package boundaries, migration expectations, and applicable repository or product policies.

Read surrounding implementation and tests until each reported issue is grounded in evidence. Do not assume a test passed because it exists, a check passed because it is configured, or a CI result from an earlier revision applies to the reviewed head.

## Report actionable findings

Report a finding only when the diff creates a concrete defect, risk, or material violation. Each finding must include:

- **Area** — behavior, security/privacy, contract/policy, or another specific affected area;
- **Priority** — follow the repository's review convention; if none exists, use P0 (critical), P1 (high), P2 (medium), or P3 (low) and explain the user or system consequence;
- **Location** — the narrowest relevant file and changed line or range;
- **Evidence** — the observed code path, input, state, contract, or policy that demonstrates the issue;
- **Impact** — what can fail, be exposed, or violate an expectation and under what conditions;
- **Suggested correction or validation** — a concrete next step that addresses the evidence.

Keep findings concise and independently actionable. Avoid duplicates, speculative risks, vague requests, and style preferences without practical impact. Do not report issues already covered by observed CI or automated checks. Do not expand scope to unrelated pre-existing problems unless the change exposes them.

If there are no actionable defects, state that explicitly and summarize the diff areas, surrounding context, and review passes examined. Do not imply comprehensive assurance beyond the reviewed scope.

## Record checks and limits

List only checks whose results you actually observed, with their source or command and status. Distinguish passed, failed, skipped, pending, and unavailable where evidence supports those states. If no checks were observed, say so; do not invent results or infer success from configuration. Separate check failures from code findings and avoid duplicating the same issue in both sections.

End with the scope reviewed, relevant evidence sources (goal, plan, criteria, and CI as available), and any limitations or unanswered questions. Return findings and recommendations only; leave all files and PR state unchanged.
