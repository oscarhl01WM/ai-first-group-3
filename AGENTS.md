# Munch CR — Codex Project Context

## Project purpose

Munch CR helps people plan meals for a weekly budget, household size, selected days and meal types, and preferences, using estimated Costa Rican supermarket prices. The approved plan's working product direction covers 1–7 days and any subset of breakfast, lunch, and dinner (up to 21 occasions), with whole-package checkout estimates and disclosed leftovers. Items the plan marks proposed or pending still need team confirmation.

The product definition is documented in [docs/product-context.md](docs/product-context.md), [docs/scope.md](docs/scope.md), and [docs/architecture.md](docs/architecture.md). The approved implementation plan is [docs/plans/mvp-planning.md](docs/plans/mvp-planning.md).

## Approved plan and persistence baseline

- The team approved `docs/plans/mvp-planning.md` on 2026-11-25 as the implementation plan. Approval covers its phased work, roles, dependencies, and decisions explicitly marked approved. It does not settle entries marked proposed, pending confirmation, optional, or unresolved.
- PostgreSQL is the approved database engine and durable source of truth for reviewed recipes and versions, ingredients and restriction tags, stores/branches/products, mappings, source/review metadata, substitutions, and append-only price observations.
- Generated meal plans and user inputs remain session-scoped and are not durably stored. The MVP has no accounts, cross-device retrieval, or durable plan history.
- Local, test, pilot, and production environments use the same versioned migration sequence and supported PostgreSQL major version. Local/test data is synthetic; pilot/production use managed PostgreSQL. Provider, API runtime, migration tooling, connection settings, backup retention, recovery objectives, and data deletion rules remain M0 decisions.
- The plan defines four workstreams: A — Frontend / Interface; B — Backend / Prices and Supermarkets; C — Backend / Meal Planning; D — Backend / Budget, Integration, and Persistence. These are role placeholders until named owners are assigned in M0.

## Repository map

- README.md — project documentation index and current setup status.
- AGENTS.md — Codex context and repository guidance.
- docs/product-context.md — discovery and research.
- docs/scope.md — requirements and planning.
- docs/architecture.md — architecture and design.
- docs/plans/mvp-planning.md — approved implementation plan and decision gates.
- docs/decisions/ — not created yet; do not record an ADR here until the team approves the location.
- apps/web/ — dependency-free frontend prototype; no production API is implemented.
- data/mock/ — synthetic recipe/product fixtures and v1 JSON Schemas; see its README before changing data shapes.
- .agents/skills/ — repository workflows and their `SKILL.md` instructions.

The supplied monorepo example also names package.json, bun.lock, apps/api, and packages/contracts. These are not present. The approved plan treats API and shared contracts as target or conditional structure; do not choose the unresolved stack or initialize a package manager without the M0 decision. The frontend prototype uses no package manager.

## Development and validation commands

From the repository root, the README documents `python3 -m http.server 8000` (or Ruby WEBrick as a fallback) to serve the static frontend at `http://localhost:8000/apps/web/`. No automated validation scripts, package manifest, lockfile, or API source are present. Do not assume a production framework or API runtime until the team decides.

## Conventions and source of truth

- Keep project statements within the user-approved definition in the project documents and approved plan. Distinguish approved decisions from proposals, assumptions, and unresolved questions.
- Treat supermarket prices as estimates. The plan requires source review and permission before collection; no supermarket source or automated scraping method is approved yet.
- Do not silently resolve the conflicting frontend and API stack descriptions recorded in docs/architecture.md.
- Follow the approved plan's persistence boundary: persist reviewed catalog and permitted price observations in PostgreSQL; do not add durable storage for generated plans or user inputs without a separate decision.
- Do not persist raw retailer pages unless source rights allow it. Never infer permission to scrape from robots.txt.
- Use synthetic fixtures in local/test environments. Tests and validation must not contact live retailer sites.
- The plan's proposed defaults, pilot measures, optional components, and unresolved choices remain subject to its review gates.
- No additional formatting, branch, commit, or test conventions are established in the repository at this time.

## Decisions requiring human review

Resolve and record the following through the M0 decision process in the approved plan:

- **Product behavior:** confirm weekday selection and acceptable recipe repetition; the supported restriction labels and ingredient-tag review process; whether appliance availability is an input; and the budget basis, ranking, substitution rules, and expected behavior for no-match or incomplete-price cases. The current plan proposes one supermarket branch and whole-package checkout cost, with no pantry-stock credit for the week.
- **Catalog and prices:** select candidate supermarkets/branches and verify source terms, access, rights, coverage, collection method, and update cadence before automation. Set the reviewed seed-data coverage and freshness policy. The plan's proposed fresh (≤7 days), stale (>7–30 days), and unavailable (>30 days) thresholds are illustrative and unvalidated; promotions may expire earlier.
- **Architecture and operations:** choose the frontend and API stacks, decide whether shared contracts are needed, and select the API host and managed PostgreSQL provider. Choose migration and connection tooling, operational owner, backup retention, recovery objectives, hosting budget, latency/uptime targets, access controls, and data residency.
- **Privacy and success criteria:** agree data deletion/retention rules for durable catalog and source records, privacy-minimized handling of restriction inputs and pilot analytics, and whether to adopt or revise the proposed pilot targets. Durable plan history remains outside the MVP unless separately approved.
- **Decision tracking:** select the source-of-truth location for M0 decisions and assign named owners to the four plan roles.

Do not add technical components, data sources, or product requirements while their decision gates are unresolved. Update this context when the team records decisions or setup commands become verifiable.
