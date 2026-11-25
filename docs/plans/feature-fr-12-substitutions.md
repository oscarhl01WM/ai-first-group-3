# Plan: Over-budget substitutions and adjustments

**Status:** Approved
**Issue:** FR-12 (no issue link supplied)
**Owner:** C — Backend / Meal Planning; B — Backend / Prices and Supermarkets; D — Backend / Budget, Integration, and Persistence; A — Frontend / Interface (provisional workstream roles; named owners not assigned)

## 1. Objective and context
- **Problem or need:** Offer compatible adjustments over budget and show recalculated effect before user applies them.
- **Beneficiaries and expected outcome:** People in Costa Rica planning meals within a weekly household budget; offer compatible adjustments over budget and show recalculated effect before user applies them.

## 2. Scope
### Included
- Reviewed alternatives; compatibility with restrictions/equipment; suggestion/apply distinction; full recalculation.
### Excluded
- Silent automatic changes; guarantee every plan can fit budget.

## 3. Acceptance criteria
- [ ] Over-budget complete estimate yields a valid suggestion or explicit no-suggestion reason.
- [ ] Suggestions preserve hard restrictions and applicable constraints.
- [ ] Applying is user-initiated and recalculates list/totals.
- [ ] Incomplete prices never imply achieved fit.

## 4. Analysis performed
- **Current state and repository patterns:** Approved plan proposes recalculation; no production API/catalog/substitution store exists. The repository has a dependency-free static prototype in apps/web/, synthetic fixtures and strict v1 schemas in data/mock/, and no production API, package manager, automated test suite, CI, or deployment setup (approved plan §1).
- **Impact, contracts, and dependencies:** Affected areas are the frontend prototype, relevant future domain/API behavior, and catalog/persistence only where required. Existing contracts are limited to mock JSON schemas; stack and detailed module boundaries remain M0 decisions. Dependencies: M0-1 substitution/ranking; reviewed alternatives; FR-07, FR-09, FR-10, FR-11 and approved prices.
- **Risks, edge cases, and mitigations:** Candidate may be incompatible/unavailable; validate same branch, restrictions and price status.
- **Alternatives and pending decisions:** Follow the approved MVP plan; preserve unresolved choices. Confirm M0-dependent behavior before implementation; do not infer API stack, source permissions, named ownership, or release policy.

## 5. Proposed solution
- **High-level description:** Generate candidate changes from reviewed alternatives, recalculate basket effect, and expose explicit suggestion/apply actions.
- **Affected components:** apps/web/index.html, apps/web/app.js, and the relevant future API/domain module; update data/mock schemas/fixtures only if the approved contract requires it. No production module currently exists.

## 6. Work sequence
1. Resolve M0 product, technical, and source decisions that affect this feature and record the approved contract.
2. Define observable request/response and domain behavior; identify synthetic fixture cases.
3. Implement a small vertical slice across domain/API and UI without adding durable plan/input storage.
4. Add focused checks and integrate in the approved dependency order.
5. Demonstrate acceptance cases and update documentation if contracts or operator behavior change.

## 7. Validation
- **Tests and checks:** Compatibility/recalculation unit tests; applied/unapplied/incomplete integration; end-to-end user action and totals. No validation command or test suite is currently established; select tooling only after M0 stack decisions.
- **Manual validation or demo:** Demonstrate normal, boundary, and failure/incomplete cases with synthetic fixtures. Tests must not contact live retailer sites.
- **Acceptance coverage:** Criteria in §3 and the corresponding FR in docs/scope.md; approved MVP plan remains authoritative.

## 8. Deployment and rollback
- **Steps and rollback:** Disable suggestions while retaining original result; correct substitution records with versioned review. Hosting, migration, backup, and recovery procedures are undecided in M0.

## 9. Assumptions and open questions
- The approved MVP plan remains authoritative; this draft does not approve proposed behavior.
- Resolve: M0-1 substitution/ranking; reviewed alternatives; FR-07, FR-09, FR-10, FR-11 and approved prices.
- Confirm exact validation limits, user-facing wording, test tooling, runtime, and named owner where the approved plan has not settled them.

## 10. Approval
- **Reviewer:** User approval recorded 2026-11-25 (name not provided).
- **Status and comments:** Approved per user instruction. M0 decision gates and open questions recorded above remain unresolved and must be settled before the affected implementation begins.
