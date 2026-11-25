# Plan: Weekly day and meal selection

**Status:** Approved
**Issue:** FR-03 (no issue link supplied)
**Owner:** A — Frontend / Interface; C — Backend / Meal Planning; D — Backend / Budget, Integration, and Persistence (provisional workstream roles; named owners not assigned)

## 1. Objective and context
- **Problem or need:** Let users choose 1–7 planning days and meal types, producing one occasion for every selected day/type.
- **Beneficiaries and expected outcome:** People in Costa Rica planning meals within a weekly household budget; let users choose 1–7 planning days and meal types, producing one occasion for every selected day/type.

## 2. Scope
### Included
- Day and meal-type selection and occasion count; mapping to at most 21 occasions.
### Excluded
- Calendar integration or date-specific goals; weekday semantics before M0.

## 3. Acceptance criteria
- [ ] For selected days D and types T there are exactly D×T occasions, no more than 21.
- [ ] Empty/out-of-range choices are rejected.
- [ ] Labels remain visible and repeats follow confirmed policy.

## 4. Analysis performed
- **Current state and repository patterns:** apps/web/app.js has updateOccasionCount and weekday/meal selections; approved plan flags weekdays for M0. The repository has a dependency-free static prototype in apps/web/, synthetic fixtures and strict v1 schemas in data/mock/, and no production API, package manager, automated test suite, CI, or deployment setup (approved plan §1).
- **Impact, contracts, and dependencies:** Affected areas are the frontend prototype, relevant future domain/API behavior, and catalog/persistence only where required. Existing contracts are limited to mock JSON schemas; stack and detailed module boundaries remain M0 decisions. Dependencies: M0-1 settles arbitrary weekdays vs count-based days and repetition; M1-1 precedes M1-2.
- **Risks, edge cases, and mitigations:** Prototype weekdays may conflict with proposed daysPerWeek API; settle mapping before contract finalization.
- **Alternatives and pending decisions:** Follow the approved MVP plan; preserve unresolved choices. Confirm M0-dependent behavior before implementation; do not infer API stack, source permissions, named ownership, or release policy.

## 5. Proposed solution
- **High-level description:** Align demo weekday pills and meal selection with the approved contract, then generate explicit occasion labels.
- **Affected components:** apps/web/index.html, apps/web/app.js, and the relevant future API/domain module; update data/mock schemas/fixtures only if the approved contract requires it. No production module currently exists.

## 6. Work sequence
1. Resolve M0 product, technical, and source decisions that affect this feature and record the approved contract.
2. Define observable request/response and domain behavior; identify synthetic fixture cases.
3. Implement a small vertical slice across domain/API and UI without adding durable plan/input storage.
4. Add focused checks and integrate in the approved dependency order.
5. Demonstrate acceptance cases and update documentation if contracts or operator behavior change.

## 7. Validation
- **Tests and checks:** Boundary/contract tests; end-to-end occasion count; keyboard review. No validation command or test suite is currently established; select tooling only after M0 stack decisions.
- **Manual validation or demo:** Demonstrate normal, boundary, and failure/incomplete cases with synthetic fixtures. Tests must not contact live retailer sites.
- **Acceptance coverage:** Criteria in §3 and the corresponding FR in docs/scope.md; approved MVP plan remains authoritative.

## 8. Deployment and rollback
- **Steps and rollback:** Revert UI and input mapping; plans are session-scoped. Hosting, migration, backup, and recovery procedures are undecided in M0.

## 9. Assumptions and open questions
- The approved MVP plan remains authoritative; this draft does not approve proposed behavior.
- Resolve: M0-1 settles arbitrary weekdays vs count-based days and repetition; M1-1 precedes M1-2.
- Confirm exact validation limits, user-facing wording, test tooling, runtime, and named owner where the approved plan has not settled them.

## 10. Approval
- **Reviewer:** User approval recorded 2026-11-25 (name not provided).
- **Status and comments:** Approved per user instruction. M0 decision gates and open questions recorded above remain unresolved and must be settled before the affected implementation begins.
