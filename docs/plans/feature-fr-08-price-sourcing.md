# Plan: Price sourcing and observation import

**Status:** Approved
**Issue:** FR-08 (no issue link supplied)
**Owner:** B — Backend / Prices and Supermarkets; D — Backend / Budget, Integration, and Persistence (provisional workstream roles; named owners not assigned)

## 1. Objective and context
- **Problem or need:** Provide traceable supermarket prices through a source process compliant with approved rights.
- **Beneficiaries and expected outcome:** People in Costa Rica planning meals within a weekly household budget; provide traceable supermarket prices through a source process compliant with approved rights.

## 2. Scope
### Included
- Source/branch review; approved collection/import; normalized mappings and dated observations.
### Excluded
- Unapproved scraping/live retailer requests during generation; manual-only prices satisfy FR-08 without scope approval.

## 3. Acceptance criteria
- [ ] Every production observation has approved source, date, branch/product, currency, review state.
- [ ] No automation before terms/access/rights/coverage approval.
- [ ] Checks use saved permitted or synthetic fixtures, never live sites.
- [ ] No compliant path means FR-08 is blocked.

## 4. Analysis performed
- **Current state and repository patterns:** data/mock README/schema define synthetic v1 shapes; AGENTS and approved plan require permission before collection; no source is approved. The repository has a dependency-free static prototype in apps/web/, synthetic fixtures and strict v1 schemas in data/mock/, and no production API, package manager, automated test suite, CI, or deployment setup (approved plan §1).
- **Impact, contracts, and dependencies:** Affected areas are the frontend prototype, relevant future domain/API behavior, and catalog/persistence only where required. Existing contracts are limited to mock JSON schemas; stack and detailed module boundaries remain M0 decisions. Dependencies: M0-1 source rights/store decisions; M1-0 PostgreSQL/import boundary; canonical ingredient contract; M2-1.
- **Risks, edge cases, and mitigations:** Rights may prohibit automation; promotions and branch data age. Gate automation and expose stale/missing states.
- **Alternatives and pending decisions:** Follow the approved MVP plan; preserve unresolved choices. Confirm M0-dependent behavior before implementation; do not infer API stack, source permissions, named ownership, or release policy.

## 5. Proposed solution
- **High-level description:** After approval, implement a controlled importer that normalizes permitted data into reviewed product and append-only observation records; method remains undecided.
- **Affected components:** apps/web/index.html, apps/web/app.js, and the relevant future API/domain module; update data/mock schemas/fixtures only if the approved contract requires it. No production module currently exists.

## 6. Work sequence
1. Resolve M0 product, technical, and source decisions that affect this feature and record the approved contract.
2. Define observable request/response and domain behavior; identify synthetic fixture cases.
3. Implement a small vertical slice across domain/API and UI without adding durable plan/input storage.
4. Add focused checks and integrate in the approved dependency order.
5. Demonstrate acceptance cases and update documentation if contracts or operator behavior change.

## 7. Validation
- **Tests and checks:** Schema/provenance checks; saved-fixture adapter checks; no live traffic; rejection/staleness operational review. No validation command or test suite is currently established; select tooling only after M0 stack decisions.
- **Manual validation or demo:** Demonstrate normal, boundary, and failure/incomplete cases with synthetic fixtures. Tests must not contact live retailer sites.
- **Acceptance coverage:** Criteria in §3 and the corresponding FR in docs/scope.md; approved MVP plan remains authoritative.

## 8. Deployment and rollback
- **Steps and rollback:** Disable importer and make observations ineligible through review status; preserve history. Hosting, migration, backup, and recovery procedures are undecided in M0.

## 9. Assumptions and open questions
- The approved MVP plan remains authoritative; this draft does not approve proposed behavior.
- Resolve: M0-1 source rights/store decisions; M1-0 PostgreSQL/import boundary; canonical ingredient contract; M2-1.
- Confirm exact validation limits, user-facing wording, test tooling, runtime, and named owner where the approved plan has not settled them.

## 10. Approval
- **Reviewer:** User approval recorded 2026-11-25 (name not provided).
- **Status and comments:** Approved per user instruction. M0 decision gates and open questions recorded above remain unresolved and must be settled before the affected implementation begins.
