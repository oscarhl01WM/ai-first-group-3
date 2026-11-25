# Plan: Consolidated shopping list

**Status:** Approved
**Issue:** FR-07 (no issue link supplied)
**Owner:** D — Backend / Budget, Integration, and Persistence; C — Backend / Meal Planning; A — Frontend / Interface (provisional workstream roles; named owners not assigned)

## 1. Objective and context
- **Problem or need:** Combine ingredient needs across meals without losing quantity or unit meaning.
- **Beneficiaries and expected outcome:** People in Costa Rica planning meals within a weekly household budget; combine ingredient needs across meals without losing quantity or unit meaning.

## 2. Scope
### Included
- Aggregate compatible IDs/units; show quantities for later pricing.
### Excluded
- Package selection/store totals; pantry credit absent a separate decision.

## 3. Acceptance criteria
- [ ] Compatible lines consolidate by ingredient and unit.
- [ ] Incompatible units/items remain separate.
- [ ] Total reconciles to recipe lines.

## 4. Analysis performed
- **Current state and repository patterns:** data/mock/README.md defines canonical IDs and JSON boundary; approved plan M2-1 defines scope. The repository has a dependency-free static prototype in apps/web/, synthetic fixtures and strict v1 schemas in data/mock/, and no production API, package manager, automated test suite, CI, or deployment setup (approved plan §1).
- **Impact, contracts, and dependencies:** Affected areas are the frontend prototype, relevant future domain/API behavior, and catalog/persistence only where required. Existing contracts are limited to mock JSON schemas; stack and detailed module boundaries remain M0 decisions. Dependencies: M1-0 canonical model; FR-05/FR-06; M2-1 before store matching.
- **Risks, edge cases, and mitigations:** Bad mappings or dimension conversion may merge unlike items; group only reviewed IDs and supported conversions.
- **Alternatives and pending decisions:** Follow the approved MVP plan; preserve unresolved choices. Confirm M0-dependent behavior before implementation; do not infer API stack, source permissions, named ownership, or release policy.

## 5. Proposed solution
- **High-level description:** Aggregate plan needs by canonical ingredient and supported unit into a normalized list.
- **Affected components:** apps/web/index.html, apps/web/app.js, and the relevant future API/domain module; update data/mock schemas/fixtures only if the approved contract requires it. No production module currently exists.

## 6. Work sequence
1. Resolve M0 product, technical, and source decisions that affect this feature and record the approved contract.
2. Define observable request/response and domain behavior; identify synthetic fixture cases.
3. Implement a small vertical slice across domain/API and UI without adding durable plan/input storage.
4. Add focused checks and integrate in the approved dependency order.
5. Demonstrate acceptance cases and update documentation if contracts or operator behavior change.

## 7. Validation
- **Tests and checks:** Aggregation tests for duplicates/incompatible units; fixture reconciliation; end-to-end display. No validation command or test suite is currently established; select tooling only after M0 stack decisions.
- **Manual validation or demo:** Demonstrate normal, boundary, and failure/incomplete cases with synthetic fixtures. Tests must not contact live retailer sites.
- **Acceptance coverage:** Criteria in §3 and the corresponding FR in docs/scope.md; approved MVP plan remains authoritative.

## 8. Deployment and rollback
- **Steps and rollback:** Revert aggregation/display; correct mappings through review. Hosting, migration, backup, and recovery procedures are undecided in M0.

## 9. Assumptions and open questions
- The approved MVP plan remains authoritative; this draft does not approve proposed behavior.
- Resolve: M1-0 canonical model; FR-05/FR-06; M2-1 before store matching.
- Confirm exact validation limits, user-facing wording, test tooling, runtime, and named owner where the approved plan has not settled them.

## 10. Approval
- **Reviewer:** User approval recorded 2026-11-25 (name not provided).
- **Status and comments:** Approved per user instruction. M0 decision gates and open questions recorded above remain unresolved and must be settled before the affected implementation begins.
