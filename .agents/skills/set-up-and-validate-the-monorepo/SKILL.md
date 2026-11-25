---
name: set-up-and-validate-the-monorepo
description: Set up or audit a monorepo against its explicitly approved inventory, including the required Codex or Claude Code agent context file. Use when initializing repository guidance or checking approved setup artifacts; do not treat examples as requirements.
---

# Set Up and Validate the Monorepo

Set up or audit the repository using its current governing instructions and an explicit, approved inventory. Keep the agent context file central: use `AGENTS.md` for a team using Codex, `CLAUDE.md` for a team using Claude Code, and both only when the team has agreed to use both tools.

## Establish the sources of truth

1. Read applicable repository guidance first, including existing `AGENTS.md`, `CLAUDE.md`, and any parent-level instructions that govern the checkout. Respect instruction precedence and scope.
2. Locate the approved inventory and the approved implementation plan using repository guidance or an explicitly supplied source. Accept an inventory only when its authority is clear (for example, the repository names it as approved or the user identifies it as approved). Do not infer approval from filenames, examples, generated templates, or a draft plan.
3. If no approved inventory is available, report that limitation and finish only the source discovery that can be done safely. Do not declare a guessed checklist complete, create setup files, or treat examples as requirements. Ask for the approved inventory when it is needed to proceed.
4. Determine the team's agreed coding assistant from repository guidance or the user. Do not create both context files merely because both tools are mentioned in examples. If the tool choice is unresolved, report the gap and request a decision before creating an agent context file.

## Build or validate the agent context file

Treat the applicable agent context file as essential setup. Review its existing content and ensure it gives an agent enough accurate, repository-specific direction to work safely. It should cover:

- the project's purpose and boundaries;
- a useful map of the monorepo and the role of important packages or folders;
- the verified commands for development and validation, including where each command applies;
- coding, testing, and contribution conventions supported by current repository sources;
- where to read the approved plan, with a usable repository-relative path or link;
- which decisions or changes require human review, grounded in current repository rules or explicit user direction.

Use existing authoritative files and working configuration to verify details. Preserve useful existing guidance, distinguish facts from unresolved gaps, and do not fabricate commands, conventions, project purpose, plan locations, or approval rules. If a required topic cannot be established from available sources, identify it as a gap for the owner rather than inventing policy.

Keep this context concise and navigational. Link to existing authoritative documents where appropriate. Do not create a separate Markdown file for each topic or add documents merely because they appear in examples.

## Audit the approved inventory

After reviewing the context file, inspect every explicitly approved path or artifact in the inventory, including required directories and files. For each entry, report exactly one status:

- **Present** — exists and satisfies the approved requirement.
- **Absent** — does not exist.
- **Incomplete** — exists but is empty, stale, malformed, missing required content, or otherwise fails the stated acceptance criteria.
- **Not applicable** — the inventory makes the item conditional and its stated condition does not apply here. Give the reason.

Use the inventory's acceptance criteria and current repository evidence. An item mentioned only as an example, suggestion, or optional possibility is not a required inventory entry. Do not mark something not applicable merely because it is inconvenient or absent. Avoid duplicate entries when one existing artifact adequately covers multiple approved topics.

Present results in a compact table with the inventory item/path, status, evidence or gap, and (when useful) the smallest next action. Keep proposed additions distinct from approved requirements.

## Initialize only when requested

When the user explicitly asks to initialize or create missing setup artifacts:

1. Create only approved items classified as absent. For approved items classified as incomplete, describe the specific gap and edit only when the user has authorized that repair or the request clearly includes fixing incomplete setup.
2. Never overwrite or replace an existing file without explicit authorization. When authorization is absent, preserve the file and report the proposed change for review.
3. Keep changes limited to the approved inventory and the applicable agent context file. Do not add example-only artifacts, speculative scaffolding, or per-topic Markdown files.
4. Recheck each changed item against its acceptance criteria and report what changed, what remains incomplete, and any decisions that still need human review.

An audit or validation request alone authorizes inspection and reporting, not initialization. A request to create this skill also does not authorize changing or initializing the target monorepo.
