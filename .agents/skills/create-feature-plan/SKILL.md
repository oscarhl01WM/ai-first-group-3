---
name: create-feature-plan
description: Analyze a feature request and repository to produce a reviewable implementation plan that follows approved team plans and templates. Use for feature planning; do not implement the feature or invent repository decisions.
---

# Create a Feature Plan

Produce an implementation plan as a **draft for human review**. Analyze the requested behavior and the target repository; do not write or modify product code, tests, configuration, or implementation scaffolding. Do not present the plan as approved or begin implementation.

## Discover the team's planning convention

1. Read applicable repository instructions and the user-provided request. Identify the authoritative plan index, approved templates, and existing approved plans from those sources or explicit user direction.
2. Inspect the relevant approved plans and templates to learn the team's format, terminology, level of detail, naming, and expected storage location. Follow the established convention rather than imposing a generic format.
3. Treat examples, drafts, generated artifacts, and unapproved proposals as evidence only; they do not establish requirements or conventions by themselves. Do not require documents that appear only as examples.
4. If no approved template or storage convention can be established, do not invent one. Prepare a clearly labeled draft in the conversation using the requested planning topics, and ask where it should be saved if a repository file is expected. Do not create a new planning directory or template without direction.

## Analyze the request and repository

Inspect the relevant code, tests, configuration, documentation, and dependency manifests. Keep the investigation bounded to the feature and its integration points. Support repository claims with paths and, when useful, symbols or line references. Separate the plan's content into:

- **Facts** supported by the request or repository evidence;
- **Assumptions** that are needed to reason but have not been confirmed;
- **Open questions** whose answers could change scope, behavior, design, or validation.

Do not turn assumptions or open questions into decisions. Do not infer product behavior, compatibility policy, ownership, deployment details, or approvals without evidence. If a key unknown blocks a credible plan, state the dependency and request clarification while continuing independent analysis.

Address the following topics in the team's format, combining or omitting headings only when the template requires it:

- objective and user or system outcome;
- scope, including meaningful exclusions;
- verifiable acceptance criteria;
- relevant existing patterns and evidence for using or deviating from them;
- affected applications, packages, modules, data, and interfaces;
- contracts and compatibility implications (such as APIs, schemas, events, CLI, configuration, or package boundaries, where relevant);
- dependencies, sequencing, and integration points;
- risks, mitigations, and unresolved decisions;
- viable alternatives and their trade-offs when evidence supports comparing them;
- validation mapped to acceptance criteria, including appropriate unit, integration, end-to-end, or operational checks;
- rollback or recovery approach when the change can create persistent, externally visible, or hard-to-reverse effects.

Do not pad the plan with irrelevant sections. If a topic does not apply, say why when that matters. If the repository lacks a needed test, command, rollback mechanism, or known pattern, record the gap instead of claiming it exists. Do not invent test results or assert that validation has run.

## Leave a reviewable draft

When the repository has an approved plan location and convention, create or update only the requested plan document in that location, using the approved template. Do not overwrite an existing plan unless the user explicitly authorized updating it. Mark the document clearly as a draft for human review and surface open questions and decisions needing reviewer input. If approval is received later, that does not itself authorize implementation; wait for a separate implementation request.

Return a concise summary of the draft, its location (if saved), key assumptions and open questions, and any review decisions. If the user asked only to create or edit this skill, do not create a feature plan.
