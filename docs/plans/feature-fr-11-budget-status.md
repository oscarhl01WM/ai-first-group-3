# Plan: Budget status and fit

**Status:** Approved
**Issue:** FR-11 (no issue link supplied)
**Owner:** D — Backend / Budget, Integration, and Persistence; A — Frontend / Interface; B — Backend / Prices and Supermarkets (provisional workstream roles; named owners not assigned)

## 1. Objective and context
- **Problem or need:** Explain whether a complete estimated basket fits the weekly budget and accurately describe over-budget/unknown outcomes.
- **Beneficiaries and expected outcome:** People in Costa Rica planning meals within a weekly household budget; explain whether a complete estimated basket fits the weekly budget and accurately describe over-budget/unknown outcomes.

## 2. Scope
### Included
- Compare complete checkout to budget; distinct fit, over-budget, incomplete/unknown states.
### Excluded
- Savings guarantees; fit from partial totals.

## 3. Acceptance criteria
- [ ] Complete total ≤ budget is within budget.
- [ ] Complete total > budget shows difference.
- [ ] Missing/expired required price means unknown and identifies items.
- [ ] All-incomplete outcome allows review/adjustment without false fit claim.

## 4. Analysis performed
- **Current state and repository patterns:** Approved plan requires unknown status for incomplete comparisons; demo data remains synthetic. The repository has a dependency-free static prototype in apps/web/, synthetic fixtures and strict v1 schemas in data/mock/, and no production API, package manager, automated test suite, CI, or deployment setup (approved plan §1).
- **Impact, contracts, and dependencies:** Affected areas are the frontend prototype, relevant future domain/API behavior, and catalog/persistence only where required. Existing contracts are limited to mock JSON schemas; stack and detailed module boundaries remain M0 decisions. Dependencies: M0-1 budget basis/ranking; FR-01, FR-09, FR-10; completeness contract.
- **Risks, edge cases, and mitigations:** Partial totals could falsely imply fit; derive status from completeness in domain logic.
- **Alternatives and pending decisions:** Follow the approved MVP plan; preserve unresolved choices. Confirm M0-dependent behavior before implementation; do not infer API stack, source permissions, named ownership, or release policy.

## 5. Proposed solution
- **High-level description:** Evaluate only complete same-branch totals and return explicit status for UI.
- **Affected components:** apps/web/index.html, apps/web/app.js, and the relevant future API/domain module; update data/mock schemas/fixtures only if the approved contract requires it. No production module currently exists.

## 6. Work sequence
1. Resolve M0 product, technical, and source decisions that affect this feature and record the approved contract.
2. Define observable request/response and domain behavior; identify synthetic fixture cases.
3. Implement a small vertical slice across domain/API and UI without adding durable plan/input storage.
4. Add focused checks and integrate in the approved dependency order.
5. Demonstrate acceptance cases and update documentation if contracts or operator behavior change.

## 7. Validation
- **Tests and checks:** Threshold/completeness unit tests; API/UI status integration; Spanish copy review. No validation command or test suite is currently established; select tooling only after M0 stack decisions.
- **Manual validation or demo:** Demonstrate normal, boundary, and failure/incomplete cases with synthetic fixtures. Tests must not contact live retailer sites.
- **Acceptance coverage:** Criteria in §3 and the corresponding FR in docs/scope.md; approved MVP plan remains authoritative.

## 8. Deployment and rollback
- **Steps and rollback:** Revert status logic/presentation; regenerate session result after correcting estimates. Hosting, migration, backup, and recovery procedures are undecided in M0.

## 9. Assumptions and open questions
- The approved MVP plan remains authoritative; this draft does not approve proposed behavior.
- Resolve: M0-1 budget basis/ranking; FR-01, FR-09, FR-10; completeness contract.
- Confirm exact validation limits, user-facing wording, test tooling, runtime, and named owner where the approved plan has not settled them.

## 10. Approval
- **Reviewer:** User approval recorded 2026-11-25 (name not provided).
- **Status and comments:** Approved per user instruction. M0 decision gates and open questions recorded above remain unresolved and must be settled before the affected implementation begins.
