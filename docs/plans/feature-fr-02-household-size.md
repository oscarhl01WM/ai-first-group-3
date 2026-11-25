# Plan: Household size input

**Status:** Approved
**Issue:** FR-02 (no issue link supplied)
**Owner:** A — Frontend / Interface; C — Backend / Meal Planning; D — Backend / Budget, Integration, and Persistence (provisional workstream roles; named owners not assigned)

## 1. Objective and context
- **Problem or need:** Let users specify how many people meals should serve so quantities scale consistently.
- **Beneficiaries and expected outcome:** People in Costa Rica planning meals within a weekly household budget; let users specify how many people meals should serve so quantities scale consistently.

## 2. Scope
### Included
- Positive whole-number people input; use it to scale every selected occasion and ingredient quantity.
### Excluded
- Household profiles; nonlinear appetite personalization.

## 3. Acceptance criteria
- [ ] Valid count is sent and reflected in planned servings.
- [ ] Missing, non-integer, zero, negative, or over-limit counts return a clear error; maximum is an M0 decision.
- [ ] Scaled quantities reconcile to recipe base servings.

## 4. Analysis performed
- **Current state and repository patterns:** apps/web/app.js has wizard validation; data/mock/recipes.json includes baseServings and quantities. The repository has a dependency-free static prototype in apps/web/, synthetic fixtures and strict v1 schemas in data/mock/, and no production API, package manager, automated test suite, CI, or deployment setup (approved plan §1).
- **Impact, contracts, and dependencies:** Affected areas are the frontend prototype, relevant future domain/API behavior, and catalog/persistence only where required. Existing contracts are limited to mock JSON schemas; stack and detailed module boundaries remain M0 decisions. Dependencies: M0-1 range/serving semantics; M1-1 input contract; M1-2 recipe scaling and canonical units.
- **Risks, edge cases, and mitigations:** Very large values and fractional ingredient quantities need bounds and display-rounding rules.
- **Alternatives and pending decisions:** Follow the approved MVP plan; preserve unresolved choices. Confirm M0-dependent behavior before implementation; do not infer API stack, source permissions, named ownership, or release policy.

## 5. Proposed solution
- **High-level description:** Carry a constrained numeric input into the plan model and scale from reviewed recipe base servings using agreed arithmetic.
- **Affected components:** apps/web/index.html, apps/web/app.js, and the relevant future API/domain module; update data/mock schemas/fixtures only if the approved contract requires it. No production module currently exists.

## 6. Work sequence
1. Resolve M0 product, technical, and source decisions that affect this feature and record the approved contract.
2. Define observable request/response and domain behavior; identify synthetic fixture cases.
3. Implement a small vertical slice across domain/API and UI without adding durable plan/input storage.
4. Add focused checks and integrate in the approved dependency order.
5. Demonstrate acceptance cases and update documentation if contracts or operator behavior change.

## 7. Validation
- **Tests and checks:** Unit tests for scale factors/bounds; integration through recipe and shopping quantities; manual display review. No validation command or test suite is currently established; select tooling only after M0 stack decisions.
- **Manual validation or demo:** Demonstrate normal, boundary, and failure/incomplete cases with synthetic fixtures. Tests must not contact live retailer sites.
- **Acceptance coverage:** Criteria in §3 and the corresponding FR in docs/scope.md; approved MVP plan remains authoritative.

## 8. Deployment and rollback
- **Steps and rollback:** Revert UI/calculation; no profile data exists to migrate. Hosting, migration, backup, and recovery procedures are undecided in M0.

## 9. Assumptions and open questions
- The approved MVP plan remains authoritative; this draft does not approve proposed behavior.
- Resolve: M0-1 range/serving semantics; M1-1 input contract; M1-2 recipe scaling and canonical units.
- Confirm exact validation limits, user-facing wording, test tooling, runtime, and named owner where the approved plan has not settled them.

## 10. Approval
- **Reviewer:** User approval recorded 2026-11-25 (name not provided).
- **Status and comments:** Approved per user instruction. M0 decision gates and open questions recorded above remain unresolved and must be settled before the affected implementation begins.
