# Munch CR — Codex Project Context

## Project purpose

Munch CR plans weekly meals using a budget, number of people, selected days and meal types, and preferences, with estimated Costa Rican supermarket prices. The current frontend direction is 1–7 days and any subset of breakfast, lunch and dinner (up to 21 occasions); compare the budget against whole-package checkout cost and disclose leftovers.

The product definition is documented in [docs/product-context.md](docs/product-context.md), [docs/scope.md](docs/scope.md), and [docs/architecture.md](docs/architecture.md). Those files reflect the user-provided definition; unresolved conflicts are recorded rather than decided here.

## Repository map

- README.md — project documentation index and current setup status.
- AGENTS.md — Codex context and repository guidance.
- docs/product-context.md — discovery and research.
- docs/scope.md — requirements and planning.
- docs/architecture.md — architecture and design.
- apps/web/ — dependency-free frontend prototype; no production API is implemented.
- data/mock/ — synthetic recipe/product fixtures and v1 JSON Schemas; see its README before changing data shapes.
- docs/plans/ — a plan location named by the supplied structure; the directory and an approved plan are not present yet.
- docs/decisions/ — a decision-record location named by the supplied structure; the directory and an ADR are not present yet.
- .agents/skills/: team skills for Codex.

The supplied monorepo example also names package.json, bun.lock, apps/api, and packages/contracts. These are not present in the repository and have not been initialized. The frontend prototype uses no package manager.

## Development and validation commands

No package manifest, lockfile, API source, or automated validation scripts are present yet. The frontend is served as static files from the repository root; see README.md. Do not assume a production framework or API runtime until the team decides.

## Conventions and source of truth

- Keep project statements within the user-approved definition in the project documents. Distinguish explicit requirements from assumptions and unresolved questions.
- Treat supermarket prices as estimates. The definition identifies web scraping as the price source but does not name supermarkets, URLs, or collection details.
- Do not silently resolve the conflicting frontend and API stack descriptions recorded in docs/architecture.md.
- The supplied structure names docs/plans/ for approved or current plans. No approved plan exists in the repository yet; once one is approved, consult that plan and record its actual path here.
- No additional formatting, branch, commit, or test conventions are established in the repository at this time.

## Decisions requiring human review

- Select the frontend stack: the architecture diagram says React/Vite, while the monorepo notes say Vike + React + TypeScript.
- Select the API stack: the architecture diagram says Node/Express, while the monorepo notes say Bun/Hono, if applicable.
- Confirm the current weekly schedule semantics with the team: 1–7 days, selected breakfast/lunch/dinner occasions repeated across each selected day, up to 21 occasions; determine weekday selection and acceptable recipe repetition.
- Clarify whether appliance availability is an input or requirement; it appears in the described current process but not in the objective or functional requirements.
- The prototype compares weekly budget to whole-package checkout cost and displays leftovers; confirm whether the team wants pantry stock input later. Production ranking/substitution logic still needs a team decision.
- Confirm how the budget objective is evaluated when estimated prices make the total exceed budget; the definition calls for suggestions/substitutions but does not define an optimization method.
- Use the corresponding skills in .agents/skills/: set-up-and-validate-monorepo, create-feature-plan, record-adr, pr-code-review, pr-triage y create-pr.

Do not add technical components, data sources, or product requirements while these questions are unresolved. Update this context when the team explicitly approves decisions or when setup commands become verifiable.
