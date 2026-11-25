---
name: create-pr
description: Prepare or create a pull request according to repository conventions, with plan alignment, Git state, linked references, and evidence-based validation status. Create or publish only when explicitly requested; never merge.
---

# Create a PR

Prepare a clear, accurate pull request description and verify its readiness against the repository's conventions. Creating or publishing a PR requires an explicit user request. Never merge a PR.

## Discover repository conventions and intent

1. Read applicable repository instructions, including `AGENTS.md` or `CLAUDE.md`, and identify the project's PR template, branch naming rules, base-branch expectations, and required checks. Inspect authoritative documentation, CI configuration, and GitHub branch-protection/ruleset data when accessible.
2. Follow repository-specific requirements. Use the GitHub CLI (`gh`) for GitHub access when repository instructions require it; do not use a browser for GitHub authentication. If the first `gh` attempt fails, retry with access outside the sandbox when available and allowed by the environment. Report any remaining access limitation.
3. Locate the approved plan and the relevant issue and ADR when they exist or are applicable. Verify their identities and links; do not fabricate references, create missing issues or ADRs, or treat a draft plan as approved.
4. If there is no agreed PR template, propose this structure for human review and use it as a clearly identified fallback only when preparing a PR description:

   - **Purpose** — intended outcome and user or system value.
   - **Changes** — concise summary of the implementation.
   - **References** — approved plan, relevant issue, and ADR when applicable. Use issue-closing keywords only when the user confirms the issue should close on merge.
   - **Validation** — checks and results with explicit status.
   - **Risks** — known risks, mitigations, and unresolved questions.
   - **Checklist** — only applicable repository review or release items.

   Proposing a template does not authorize creating a template file in the repository.

## Inspect Git state and plan alignment

1. Record the current branch, base, upstream, working-tree status, staged and unstaged diff, untracked files, and committed changes that would be included. Make clear which changes will and will not enter the PR.
2. Compare the proposed PR diff with the approved plan and acceptance criteria. Read enough context in affected files to understand the changes. Identify scope changes, omissions, or deviations and say whether they need explanation in the PR description or a plan update. Do not silently change the plan or characterize an unapproved deviation as approved.
3. If a material unapproved deviation, missing base/plan decision, or unresolved scope question could change the intended outcome, report it and wait for user direction before creating or publishing the PR.
4. Do not stage, commit, amend, rename branches, rewrite history, or discard working-tree changes unless the user explicitly authorizes that action. If the requested PR cannot be formed from the existing committed branch state without an additional action, explain the blocker and ask for direction.
5. Check whether a PR already exists for the branch. Do not create a duplicate or update an existing PR unless the user explicitly requested that specific action.

## Report validation evidence accurately

Inspect available local results, CI runs, and required-check policy without inferring more than the evidence supports. Distinguish:

- **Passed** — a result is observed for the relevant commit or current head.
- **Failed** — an observed result failed.
- **Pending** — an authoritative status reports the check is still running or awaiting a result.
- **Not executed** — no run was observed for the check.

Record the check name, source or command, revision when available, and observed result. A configured workflow is not proof that a check is required or passed. Do not claim a test or check passed without a successful result for the relevant revision. Do not run tests or validations unless the user asks for them or applicable instructions authorize them; report unexecuted checks plainly.

## Draft or create the PR

Prepare a description that summarizes purpose, changes, linked plan/issue/ADR when applicable, real validation results, and risks. Include the scope deviations identified above. Keep references verified and use the repository's template if one exists.

When the user asks only to prepare or review a PR, return the draft and readiness report without creating, publishing, pushing, or otherwise changing GitHub state. Create or publish a PR only when the user explicitly asks for that action. For an explicit create request, push already committed branch changes only when required to create that PR; do not force-push. The request does not authorize unrelated code edits, staging, commits, branch rewrites, or changes to repository policy; stop for direction when those are needed. Do not approve or merge the PR under any circumstances.

Report the PR URL only after observing successful creation/publication. Otherwise state that no PR was created or that creation remains blocked, summarize the actual Git state, validations by status, plan alignment, risks, and the next action needed.
