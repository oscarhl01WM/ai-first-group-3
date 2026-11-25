# Munch CR MVP: product and engineering plan

**Status:** Proposed for team review; not an approved implementation plan.

**Planning date:** 2026-11-17.
**Purpose:** Give a three-person team a practical route from the current documentation to a small Costa Rica MVP. Decisions and targets below are recommendations until the team confirms them.

## 1. Repository assessment

The inspected repository contains [README](../../README.md), [project instructions](../../AGENTS.md), and the [product context](../product-context.md), [scope](../scope.md), and [architecture](../architecture.md). The file inventory revealed no application source, package manifest, lockfile, tests, CI configuration, deployment setup, or existing plan directory. No development or validation commands are established. Git status could not be inspected because the machine lacks the selected Apple developer command-line tools; untracked or changed status is therefore unknown.

The product definition, user journey, scope, and conceptual frontend/API/recipe/pricing/shopping-list boundaries can be reused. Everything executable, the recipe and price datasets, source permissions, deployment, and test infrastructure remain to be established. The diagram names React/Vite and Node/Express; the monorepo notes name Vike/React/TypeScript and possibly Bun/Hono and shared Zod contracts. Neither is an installed stack. Do not represent either as an existing decision.

## 2. Product scope, assumptions, and decisions

**Documented MVP scope:** Costa Rica; CRC budgets; 2–3 supermarkets; meal planning; people count; simple preferences and restrictions; a consolidated list, estimated store comparison, and suggestions if over budget. Exclude delivery, purchasing, complex authentication, advanced personalization, coverage of all stores, guaranteed real-time prices or inventory, detailed nutrition/calories, and social features. The weekly schedule semantics below are current frontend direction based on team-member input; record team confirmation during M0.

| Topic | Proposed default, pending confirmation | Tradeoff / open question |
|---|---|---|
| Weekly schedule (current frontend direction, based on team-member input; confirm in M0) | User selects 1–7 planning days and one or more meal types (breakfast, lunch, dinner). Each selected meal type is planned on each selected day, up to 21 occasions/week. People are servings per occasion. Repeats are allowed when the catalog does not have a distinct compatible recipe for every occasion and must be visible. The current demo assigns days from Monday in order; production weekday selection remains open. | Supersedes the earlier 3–5 total meal assumption. Clarify whether users need arbitrary weekday selection and what repetition level is acceptable. |
| Budget | Compare the weekly budget against the estimated checkout cost at **one** supermarket, including whole packages, not only the amount consumed; do not mix stores. Show purchased quantity and leftover for each line. V1 assumes no existing pantry stock; leftovers may be carried to a future week but do not discount this week's checkout estimate. | Honest checkout estimate can exceed ingredient-consumption value. Pantry inventory would need explicit user input and a separate stock-adjusted estimate. |
| Restrictions | A small controlled set of exclusions; explicitly tagged recipe ingredients must satisfy all selected restrictions. Unknown compatibility is ineligible for a hard restriction. | Team must define supported labels and review ingredient tags; no medical safety guarantee. |
| Appliances | Recommend an optional simple multi-select, such as stove and oven, plus “not specified.” Curate recipe requirements and filter only when the user specifies availability. | Adds modest catalog work; prevents impractical suggestions. Unknown does not mean all appliances are present; flag requirements on recipes and ask the user to verify. Confirm exact list and inclusion. |
| Seed coverage | Begin with a reviewed set of realistic recipes and matched products; choose actual stores and coverage based on evidence. | Candidate sources are not approved sources; enough variety is needed for common 1–21 weekly occasion combinations. Repeats should be visible when the reviewed compatible catalog is too small. |
| Price age | Proposed configurable freshness thresholds: fresh ≤7 days; stale >7–30 days; unavailable >30 days. Use capture time in Costa Rica time for display. | Illustrative targets, not validated supermarket behavior; promotions may expire sooner. |
| Retention | Session-scoped plan held by client; reload or expiration may lose it. No accounts. | Simpler and minimizes data, but no cross-device retrieval. Revisit only if team needs sharing or recovery. |

**Data states:** A complete estimate requires a usable mapped price for every required shopping item at a store and a compatible recipe assigned to every selected weekly occasion. Show the observed date, chosen branch/region if known, stale status, package purchase quantity and leftover. Stale usable prices may produce a clearly qualified estimate but never a fresh claim. For missing or expired prices, show the missing items and a partial subtotal explicitly marked incomplete; do not rank that store against complete totals or claim that the plan fits the budget. If every store is incomplete, allow recipe/list review, show that budget fit is unknown, and offer a manual adjustment or regeneration. If complete estimates exist but none fit, show the lowest complete checkout total, difference from budget, and valid substitutions or an actionable suggestion to change budget, restrictions, people, days, or meal types. If too few eligible recipes exist, explain the constraint and suggest relaxing it; never silently violate a restriction.

## 3. Experience and proposed measures

1. **Inputs:** weekly CRC budget, people, 1–7 days, one or more breakfast/lunch/dinner types (at most 21 occasions), controlled restrictions/preferences, optional appliances. Explain estimate and whole-package grocery basis. Validate before submission.
2. **Generating:** brief progress and retryable failure; keep entered values.
3. **Plan:** recipe names, occasion, servings, ingredient amounts, instructions, equipment, restrictions and data caveats. Display no-match or insufficient-catalog state with suggestions.
4. **Shopping list:** consolidate ingredients, show required quantities and per-store package choices, missing items and observation ages.
5. **Compare and adjust:** complete store totals and difference vs budget; stale indicators and incomplete stores separately. For over-budget plans show compatible substitutions and their recalculated effects; user may apply one or change inputs and regenerate. Clearly distinguish an applied change from a suggestion.

**Proposed, unvalidated pilot targets:** At least 80% of 10 representative participants complete the flow without help; median completion under 5 minutes; at least 90% of reviewed pilot plans have all recipe ingredients matched at two stores with prices within the agreed freshness window; 100% of incomplete comparisons explicitly show “budget fit unknown”; and 100% of sampled hard-restriction cases respect supported tags. Measure using consented usability sessions and aggregate, privacy-minimized events. Targets are hypotheses, not claims of current performance or guarantees.

## 4. Architecture and flow

Recommend one small web application and one API process, with recipe, planning, shopping, and pricing as internal modules. A curated catalog and price observations live in a small relational store; a controlled manual import/command maintains source data. An adapter interface accepts normalized observations from manual imports and, only after review, individual authorized sources. Store and branch identity travel through the entire price path. The UI sends inputs → API validates → planner filters and scales catalog → shopping module aggregates → pricing selects eligible package observations per store → planner evaluates candidates and substitutions → UI displays results and provenance. No live retailer requests occur during plan generation.

**Proposed stack for team decision:** React/Vite with TypeScript on the frontend and Node/Express with TypeScript for the API, following the architecture diagram and minimizing new framework concepts; a small relational database (SQLite for local and a managed relational database for production if hosting requires durable storage). Vike/React and Bun/Hono remain viable alternatives in the supplied notes; choose them instead if the team has stronger experience or hosting constraints. Confirm runtime, persistence, migration tooling, and shared validation/contracts together before setup. Avoid microservices, queues, LLM dependence, and a separate admin product. Start with versioned data files plus reviewed imports; a relational database gives traceability and safe updates, while files alone may suffice for an offline prototype but complicate concurrent updates and history. Exact deployment and adapter cadence depend on source rights and hosting.

## 5. Data model

The following logical entities describe proposed relationships, not an approved database implementation. Stable opaque IDs identify records; snapshots preserve historical meaning.

| Entity | Key fields and relationships |
|---|---|
| `Ingredient` | `id`, Spanish name, canonical dimension (`mass`, `volume`, `count`), canonical unit (`g`, `ml`, `count`), restriction tags, optional verified ingredient-specific conversions. |
| `Recipe` / `RecipeVersion` | Recipe ID; immutable version ID, recipe ID, title, instructions, base servings, breakfast/lunch/dinner suitability, appliance requirements, supported restriction tags, status. Plans reference a version. |
| `RecipeIngredient` | Version ID, ingredient ID, exact decimal quantity, unit, preparation note, optional flag. Required lines feed cost. Optional ingredients must be clearly excluded or explicitly included. |
| `Plan` / `PlannedMeal` | Ephemeral plan ID, inputs snapshot, creation time; each occasion references a recipe version, occasion label, scaled servings, and selected substitution snapshot. Recompute after edits. |
| `Inputs` | Integer CRC weekly budget, people, 1–7 `daysPerWeek`, one or more `mealTypes` (`breakfast`, `lunch`, `dinner`), controlled restrictions/preferences, optional appliances; no name, account, or free-text health information. Lives in session by default. |
| `Supermarket` / `Branch` / `Product` / `IngredientProduct` | Store and branch/region IDs; product ID, source product ID/name, package amount/unit; reviewed ingredient-to-product mapping, compatibility and effective dates. Multiple acceptable products may map to an ingredient. Estimate one branch basket at a time. |
| `PriceObservation` | Product ID, source identifier and source URL or manual provenance, capture timestamp UTC, CRC amount, promotion and eligibility/end date, branch, reviewer/status, confidence and freshness policy version. Package amount/unit live on the referenced product. Retain observations rather than overwriting. |
| `Substitution` | Original and replacement ingredient or recipe version, compatible restriction/equipment tags, quantity conversion, review status and rationale. Price effect is calculated per plan and store; it is not a fixed universal saving. |
| `ShoppingItem` / `StoreEstimate` | Plan snapshot, ingredient, required canonical amount, contributing meals; selected product, packages rounded up, purchased quantity, leftover, checkout line amount and observation IDs per branch; complete/partial status, missing lines, full-package total and budget delta only when complete. |

Use exact decimal/rational arithmetic for quantities, converting within a dimension (1 kg = 1,000 g; 1 L = 1,000 ml). Convert count-to-mass or volume-to-mass only with reviewed ingredient-specific factors; otherwise leave separate/unpriced, never guess density. Group only compatible ingredient IDs and dimensions. Sum required quantities before rounding package counts up: `ceil(required / package size) × package price`. Product selection must respect ingredient and unit compatibility; compare total whole-package cost, not raw package prices. Model CRC as integer minor units (e.g., hundredths of a colón), with explicit rounding once per payable line; format for Costa Rican Spanish without implying price accuracy. Store source currency and reject non-CRC observations unless a later approved conversion policy exists. Track weights, edible yields, and variable-weight goods only where the catalog has a reviewed conversion and pricing basis.

## 6. Minimal API contract

Recommendation: stateless synchronous generation with the whole plan returned to the client, bounded by request and execution limits. A session can resubmit a plan snapshot to apply an adjustment; no public retrieval or persisted plan editing is needed initially. Responses include a version and enough inputs, recipe-version IDs and selected substitutions to recompute server-side; do not trust client-supplied totals. Use HTTPS, JSON and controlled enum values.

| Operation | Request | Success response and errors | Mode |
|---|---|---|---|
| `POST /api/plans/generate` | `{ "budgetCrc": 25000, "people": 2, "daysPerWeek": 5, "mealTypes": ["lunch", "dinner"], "restrictions": ["vegetarian"], "preferences": [], "appliances": ["stovetop"] }` (`appliances: null` means unknown) | `200` plan snapshot with one occasion per selected day/type, shopping, comparison, and adjustment suggestions. `400` malformed JSON; `422` invalid range, unsupported enum, or inconsistent input; `429` rate limit; `503` unavailable catalog. Valid no-match or incomplete-data result is `200` with explicit status. | Sync |
| `POST /api/plans/recalculate` | `{ "inputs": {...}, "occasionRecipeVersions": [{"dayIndex": 0, "mealType": "lunch", "recipeVersionId": "rv1"}], "substitutionIds": ["sub1"] }` | `200` recalculated snapshot; `422` wrong occasion count, unavailable version, incompatible substitution, restriction violation, or bad input; `409` catalog version changed where reproducibility cannot be maintained; `429/503` as above. | Sync |
| `GET /health/live` | None | `200` if process responds. No sensitive details. | Sync |
| `GET /health/ready` | None | `200` if catalog and required storage readable; `503` otherwise. Stale prices alone should not necessarily stop service if degraded states are supported. | Sync |

Example response shape (IDs and values illustrative, not real retailer prices):

```json
{
  "schemaVersion": 1, "status": "incomplete_prices",
  "inputs": {"budgetCrc": 25000, "people": 2, "daysPerWeek": 5, "mealTypes": ["lunch", "dinner"]},
  "meals": [{"dayIndex": 0, "mealType": "lunch", "recipeVersionId": "rv1", "servings": 2}],
  "shopping": [{"ingredientId": "rice", "required": {"amount": "600", "unit": "g"}, "packages": 1, "purchasedAmount": "1000", "leftoverAmount": "400", "lineCostCrc": 1450}],
  "stores": [{"storeId": "s1", "status": "incomplete", "partialSubtotalCrc": 1500,
    "totalCrc": null, "budgetDeltaCrc": null, "missingIngredientIds": ["beans"],
    "oldestCapturedAt": "2026-11-10T18:00:00Z", "freshness": "stale"}],
  "adjustments": [{"id": "sub1", "label": "Alternative ingredient", "estimatedDeltaCrc": null}],
  "notices": ["Estimate incomplete; budget fit unknown."]
}
```

Actual responses include all selected weekly occasions, package selections and their observation IDs. Budget status uses the whole-package checkout cost; leftovers are disclosed and not valued as a discount. `status` distinguishes `within_budget`, `over_budget`, `incomplete_prices`, and `no_eligible_plan`. Restriction failures and bounds must be explicit. Recipe and product v1 mock contracts are defined in `data/mock/README.md` and the corresponding JSON Schemas; review them with the team before the production API is implemented. If the client later needs durable plans, introduce authenticated or unguessable, expiring IDs with access control and a retrieval endpoint only after a decision.

## 7. Supermarket price strategy

| Stage | Approach | Benefits and limitations |
|---|---|---|
| Discovery | Identify 2–3 candidate stores and representative branches; record source URLs, access method, region, coverage, rules, source owner and review date. | No store is approved merely by naming it. |
| Prototype | Manually record and review a small dated dataset with provenance and permission to use it; import through the same interface as future sources. | Fast and repeatable, but labor-intensive and quickly stale. Synthetic fixtures only for testing. |
| Pilot/release | Prefer an authorized public feed, API, or documented permission; otherwise consider site-specific automated collection only after a documented source review. | Source availability and automation permission are unknown; the existing FR-08 specifies scraped prices, so a manual-only pilot does **not** satisfy that requirement without a team-approved scope change. |
| Ongoing | Each approved adapter produces normalized observations and import diagnostics; review uncertain matches and changed package sizes before publication. | Source changes can break imports; pause that source and display its last eligible observation or missing data. |

Before any collection, review current terms of service, `robots.txt` directives, access restrictions, published rate limits, applicable legal/privacy considerations and use rights; document the decision and contact the source where necessary. Do not bypass logins, CAPTCHAs, access controls or technical restrictions. [Más x Menos purchase terms](https://www.masxmenos.cr/terminos-y-condiciones-de-compra) contain restrictions on using automated agents to navigate or search; this is a concrete warning, not permission or a legal determination. Obtain an appropriate permission or alternative source before automating it. [RFC 9309](https://www.rfc-editor.org/rfc/rfc9309.html) states that robots rules are not access authorization. No retailer's full terms, robots policy, feed availability, or legal status has been comprehensively verified; recheck each selected source at implementation time.

A source adapter returns `{sourceId, storeId, branchId, productExternalId, name, priceCrc, packageAmount, packageUnit, capturedAt, sourceUrl, promotion, diagnostics}`. Validate schema, CRC, positive quantity, timestamp and provenance; preserve raw reference where allowed. A human approves uncertain ingredient matches, comparable package units and changes; no guessed cross-dimension matches. Exclude membership, conditional, expired or ambiguous promotions by default; include ordinary offers only when applicability and end time are known. On failures, log source, time, counts and reason, alert the owner, and retain last known data subject to freshness limits; flag unknown matches as missing. Never fill missing with zero or rank an incomplete subtotal as a complete total. UI shows source/store, date and stale/missing labels, and states prices are estimates, not live quotes or inventory.

## 8. Generation and budget logic

1. Validate bounded input and resolve supported hard exclusions and equipment constraints. Filter active, reviewed recipe versions; unknown restriction compatibility fails closed. Assign a compatible recipe to each requested day/type occasion, preferring not to repeat until the eligible pool is exhausted; make repeats visible. If a slot has no eligible recipe, return no eligible plan and specific, non-conflicting suggestions.
2. Scale each recipe from base servings using exact quantities for the requested people. Aggregate compatible ingredients and convert to canonical dimensions. Build store-specific purchasable package choices from eligible reviewed matches and valid observations.
3. Generate combinations of the requested size from a bounded catalog. For a small catalog enumerate combinations; cap catalog/candidate count and execution time explicitly, returning a bounded-search notice if the cap is hit. For each combination choose lowest valid whole-package price per ingredient at each store, sum, and evaluate only complete estimates. All constraints apply before ranking.
4. Rank complete candidates first by under-budget feasibility, then preference score and variety; among ties prefer lower store total, fresher coverage, then stable recipe IDs for reproducibility. Team should confirm whether cheaper or variety should dominate after feasibility. An incomplete candidate cannot be classified within budget. If none fits, choose the lowest complete cost among searched candidates and indicate whether search was exhaustive; no assertion of global impossibility after a capped search.
5. Evaluate reviewed compatible substitutions and recipe swaps by recomputing the entire shopping list and package counts, since changing one item may alter the final cost. Show savings only for comparable complete estimates at the same store; disclose stale inputs. If none reduces cost, offer actionable input changes. Never present unsupported restrictions as safe.

Deterministic rules and fixed test data make quantities, budget comparisons and behavior explainable. An LLM is unnecessary for the MVP; later, reviewed recipe drafting or optional suggestion text could use AI, while validated constraints and arithmetic remain deterministic.

## 9. Test and quality strategy

- **Unit:** exact CRC arithmetic and rounding, scaling, compatible and invalid unit conversions, aggregation before package rounding, product matching, promotion eligibility, restrictions, appliance unknown vs specified, stale boundaries, budget ranking, bounded search, and substitutions that change package counts.
- **Integration:** API validation and error contracts, persistence/migrations, data imports, provenance and deterministic end-to-end calculation using controlled data. Verify no incomplete total is labeled within budget and no cross-store mixing occurs.
- **Adapters:** saved permitted/sanitized fixtures and controlled samples for schema changes, missing fields, promotions, blocked/failed requests and review queues. Tests never contact live supermarket sites.
- **Journey:** browser checks from Spanish input through five meals, shopping list and comparison, plus no-match, no complete store, stale prices, source outage and over-budget adjustment. Verify screen reader labels, keyboard flow, contrast and error focus; test Spanish copy, CRC and Costa Rica date/time conventions.
- **Safe data:** fixed clocks, synthetic prices and isolated test databases; never mutate production or rely on a live retailer. Review representative recipe tags manually. CI commands and framework are chosen only after the runtime decision. No tests are run as part of this planning task.

## 10. Configuration, security, privacy and operations

Use separate local, test and production settings with a documented example containing no secrets. Store any source API keys, database credentials and deployment tokens in the hosting secret manager, restrict access, rotate on exposure, and never commit them. The baseline session holds plan inputs locally and sends them only for calculation; avoid accounts, identity, precise location, health free text and personal data in logs. Restriction choices may reveal sensitive information: log only aggregate counts and errors, with retention limits and consent for pilot analytics. Define retention, deletion and jurisdiction with the team before release.

Validate types, enum values, lengths, positive budgets and upper bounds server-side; apply request-size/time limits and basic per-IP rate limiting at the edge, acknowledging shared IPs. Keep dependencies pinned, scan and update them, and review source/data licenses. Use HTTPS and minimal admin access. Use migrations and backups for curated data and observations; rehearse restoration, document retention and remove expired records. Protect manual import credentials and review imported data before publication.

Deploy a single API and static frontend on a simple managed host with a durable managed relational database if needed. CI should run agreed checks and migrations against test data before deployment. Hosting provider, budget, Costa Rica latency, uptime, access controls and data residency are unresolved; choose only after confirming team constraints. Expose liveness and readiness separately; log structured request IDs, timing, status, catalog version and ingestion outcome without raw inputs. Track request errors/latency, generation completion, incomplete comparison rate, observations by freshness, ingestion failures and source coverage. Send a simple alert to the assigned operator on repeated import failure, unhealthy service or inadequate fresh coverage; establish on-call ownership and a manual recovery checklist. Pilot thresholds and frequency are team decisions.

## 11. Proposed repository structure

`[existing]` reflects inspected files; all others are proposals, including this current draft. The structure follows the supplied monorepo outline without committing the team to the unresolved stack.

```text
README.md                         [existing]
AGENTS.md                         [existing]
docs/
  product-context.md              [existing]
  scope.md                        [existing]
  architecture.md                 [existing]
  plans/mvp-planning.md           [current proposed plan]
  decisions/                      [proposed when decisions are recorded]
apps/
  web/                            [current: static frontend prototype]
  api/                            [proposed: API, planning, pricing, shopping, imports]
packages/
  contracts/                      [optional proposed shared schemas, if stack supports]
data/
  mock/                           [current: synthetic frontend fixtures and v1 schemas]
```

Only add shared contracts if they reduce duplication after the stack choice. Keep adapters and domain modules within the API initially; do not create separate services or repositories. Tool configuration, scripts, tests and deployment files follow the confirmed runtime and host rather than assumed commands.

## 12. Phased implementation and integration

Three roles are rotating responsibilities, not separate services: **A: experience and product**, **B: planning/API and integration coordinator**, **C: catalog/pricing and operations**. B owns contract decisions, integration schedule and a shared decision log; A and C review cross-cutting choices. Reserve time in each milestone for review, integration and defect fixes rather than handing off at the end.

| Milestone | Goal, deliverables and dependencies | Parallel work and integration | Checkable exit / risks |
|---|---|---|---|
| M0: discovery and decisions | Confirm meal semantics, restrictions, appliances, budget basis, stack/host, data rights and first source candidates; define sample recipes, units, API examples, stale policy and acceptance scenarios. Depends on this draft's review. | A tests a paper journey; B coordinates stack/contract decisions and example calculation; C audits 2–3 candidate sources and drafts data dictionary. Agree on units, IDs and one end-to-end example before implementation. | Signed decisions and source review for each candidate; sample scenario reconciles recipes, packages and total; blocked automated sources are identified with fallback. No approval of scraping inferred from a robots file. |
| M1: vertical slice with synthetic data | Minimal app/API, curated synthetic fixtures, three-meal flow, aggregation and single-store calculation. Depends on M0 decisions. | A builds inputs/results; B builds calculation/API; C prepares fixtures and import shape. Integrate contract stub first, then one real end-to-end scenario mid-milestone; all review arithmetic. | Demo reproduces agreed calculation, package rounding, and explicit incomplete/error state; automated checks run in chosen environment. Fixture values cannot be presented as actual retailer data. |
| M2: catalog and comparison | Reviewed recipes, restrictions/equipment, 2–3 store source records, matching/import and complete/incomplete comparisons; permitted, traceable observations. Depends on M1 contract and source review. | A handles data quality states; B extends generation/comparison; C owns catalog, ingestion and review. Agree adapter schema and freshness semantics first; integrate each source incrementally, then inspect full provenance. | Three to five eligible recipes work for defined scenarios; complete stores use whole packages; missing/stale cases are visible. Source gaps or lack of permitted automation trigger manual fallback and a documented FR-08 release decision. |
| M3: budget adjustments and hardening | Search/ranking, substitutions, accessible Spanish journey, tests, operations and pilot deployment. Depends on reviewed mappings and M2 comparisons. | A owns usability/accessibility; B budget logic and end-to-end integration; C source monitoring, deployment and restore exercise. Integrate adjustments before full journey checks; all review failure scenarios. | Demonstrate within, over, incomplete, no-match and source-failure states; restrictions respected; no unqualified stale totals; chosen health, logging, backup and checks work. Limited catalog and price availability remain risks. |
| M4: pilot and release decision | Run consented user sessions, measure proposed targets, correct critical issues and confirm release scope. Depends on M3. | A coordinates sessions, B triages product defects, C validates freshness/source rights and operational readiness; all review results and decide release together. | Document results vs targets, unresolved issues, coverage and owner for ongoing updates. Do not claim FR-08 met unless approved scraping exists or the team explicitly changes the requirement. |

Work that should remain sequential: agree source rights before automated collection; agree unit/money and contracts before parallel module implementation; establish an integrated vertical slice before expanding the catalog; verify data and failure states before pilot claims. A source review and UX research can proceed concurrently with the decisions that do not depend on them.

## 13. Prioritized backlog and first milestone

| Priority | Outcome | Dependencies |
|---|---|---|
| P0 | Confirm weekly schedule (days and meal types), household servings, hard restrictions, appliances and whole-package budget semantics. | Product review. |
| P0 | Select runtime, host constraints, data store, shared schema approach and coordinator. | Team skills and hosting needs. |
| P0 | Audit at least 2–3 candidate stores for terms, robots, access, rights and coverage; decide how to meet or amend FR-08. | Candidate identification and current source evidence. |
| P0 | Define a reviewed recipe/product example, canonical units and exact end-to-end API fixture, including stale and missing data. | Product semantics; source data may initially be synthetic. |
| P0 | Build a single tested vertical slice for generation, whole-package list and comparison, plus explicit incomplete/no-match states. | Approved contracts and stack. |
| P0 | Curate enough recipes, product mappings and authorized dated observations; calculate budget status and offer valid over-budget adjustments. | Source review, catalog quality and vertical slice. |
| P0 | Complete accessibility, failure, security, monitoring and pilot checks before release. | Integrated application and source operations. |
| P1 | Improve source coverage and introduce independently replaceable permitted adapters. | Documented source permissions and stable adapter interface. |
| P1 | Refine ranking and usability using pilot evidence; tune thresholds. | Pilot measurements. |
| P2 | Consider optional AI-assisted catalog drafting with human review or durable plan retrieval. | Demonstrated need, privacy and cost decision. |

**First milestone: M0 discovery and decisions. Definition of done:** team records the decisions above, agrees a worked calculation and contract, reviews candidate source restrictions and identifies a viable path or explicit blocker for the scraping requirement, assigns owners, and approves the M1 acceptance scenarios. No production implementation is required for M0.

**First concrete tasks after review:** (1) A sketches the five-meal and incomplete-price screens and tests the proposed appliance input; (2) B leads a 30–45 minute decision session and writes the shared worked example and contract; (3) C identifies candidate stores, records the current terms/robots/access and reviews one representative package mapping per ingredient; (4) all three reconcile a single shopping-list and store-total example and record decisions before any parallel coding.

**Confirm before or during M0:** frontend and API choice; weekly weekday selection and recipe repetition policy; optional appliance scope; supported restriction list and ingredient review; budget and no-fit ranking; freshness/coverage thresholds; source rights and whether manual-only data changes FR-08; hosting, retention and operational owner.

No production code or implementation changes were made as part of this planning task.
