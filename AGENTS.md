# Munch CR — Codex Project Context

## Project purpose

Munch CR is an application concept that takes a budget, number of people, number of meals, and preferences and generates a meal plan using estimated prices from supermarkets in Costa Rica, with a shopping recommendation intended to stay within budget.

The product definition is documented in [docs/product-context.md](docs/product-context.md), [docs/scope.md](docs/scope.md), and [docs/architecture.md](docs/architecture.md). Those files reflect the user-provided definition; unresolved conflicts are recorded rather than decided here.

## Repository map

- README.md — project documentation index and current setup status.
- AGENTS.md — Codex context and repository guidance.
- docs/product-context.md — discovery and research.
- docs/scope.md — requirements and planning.
- docs/architecture.md — architecture and design.
- docs/plans/ — a plan location named by the supplied structure; the directory and an approved plan are not present yet.
- docs/decisions/ — a decision-record location named by the supplied structure; the directory and an ADR are not present yet.

The supplied monorepo example also names package.json, bun.lock, apps/web, apps/api, and packages/contracts. These are not present in the repository and have not been initialized by this documentation task.

## Development and validation commands

No package manifest, lockfile, application source, or validation scripts are present yet. Therefore, development and validation commands are not established. Do not guess commands; document them after the team approves the runtime setup and the corresponding scripts exist.

## Conventions and source of truth

- Keep project statements within the user-approved definition in the project documents. Distinguish explicit requirements from assumptions and unresolved questions.
- Treat supermarket prices as estimates. The definition identifies web scraping as the price source but does not name supermarkets, URLs, or collection details.
- Do not silently resolve the conflicting frontend and API stack descriptions recorded in docs/architecture.md.
- The supplied structure names docs/plans/ for approved or current plans. No approved plan exists in the repository yet; once one is approved, consult that plan and record its actual path here.
- No additional formatting, branch, commit, or test conventions are established in the repository at this time.

## Decisions requiring human review

- Select the frontend stack: the architecture diagram says React/Vite, while the monorepo notes say Vike + React + TypeScript.
- Select the API stack: the architecture diagram says Node/Express, while the monorepo notes say Bun/Hono, if applicable.
- Clarify how the requested meal count relates to lunch and dinner and to the requirement to return 3–5 recipes, including when a user requests five meals.
- Clarify whether appliance availability is an input or requirement; it appears in the described current process but not in the objective or functional requirements.
- Confirm how the budget objective is evaluated when estimated prices make the total exceed budget; the definition calls for suggestions/substitutions but does not define an optimization method.

Do not add technical components, data sources, or product requirements while these questions are unresolved. Update this context when the team explicitly approves decisions or when setup commands become verifiable.
