# Plan: Budget input and validation

**Status:** Approved
**Issue:** FR-01 (no issue link supplied)
**Owner:** A — Frontend / Interface; D — Backend / Budget, Integration, and Persistence (provisional workstream roles; named owners not assigned)

## 1. Objective and context
- **Problem or need:** Let users provide a weekly budget in Costa Rican colones for evaluating a generated plan.
- **Beneficiaries and expected outcome:** People in Costa Rica planning meals within a weekly household budget; let users provide a weekly budget in costa rican colones for evaluating a generated plan.

## 2. Scope
### Included
- A weekly CRC budget field and validation; pass the value through the approved plan request.
### Excluded
- Budget optimization; accounts or durable user-input storage.

## 3. Acceptance criteria
- [ ] Valid positive CRC amount is retained for the session and submitted.
- [ ] Empty, nonnumeric, zero, negative, or out-of-range input has an actionable error; exact bounds are M0.
- [ ] UI and result identify the value as weekly CRC.

## 4. Analysis performed
- **Current state and repository patterns:** apps/web/index.html and apps/web/app.js contain the demo wizard; the approved plan §6 proposes a stateless API, not implemented. The repository has a dependency-free static prototype in apps/web/, synthetic fixtures and strict v1 schemas in data/mock/, and no production API, package manager, automated test suite, CI, or deployment setup (approved plan §1).
- **Impact, contracts, and dependencies:** Affected areas are the frontend prototype, relevant future domain/API behavior, and catalog/persistence only where required. Existing contracts are limited to mock JSON schemas; stack and detailed module boundaries remain M0 decisions. Dependencies: M0-1 ranges, API contract/runtime, privacy/session behavior; M1-0 if generation reads PostgreSQL.
- **Risks, edge cases, and mitigations:** Frontend-only checks can be bypassed or drift from server rules; define bounds in the approved contract and enforce server-side.
- **Alternatives and pending decisions:** Follow the approved MVP plan; preserve unresolved choices. Confirm M0-dependent behavior before implementation; do not infer API stack, source permissions, named ownership, or release policy.

## 5. Proposed solution
- **High-level description:** Extend the existing static wizard budget step and validate at the API boundary after stack selection. Keep input session-scoped.
- **Affected components:** apps/web/index.html, apps/web/app.js, and the relevant future API/domain module; update data/mock schemas/fixtures only if the approved contract requires it. No production module currently exists.

## 6. Work sequence
1. Resolve M0 product, technical, and source decisions that affect this feature and record the approved contract.
2. Define observable request/response and domain behavior; identify synthetic fixture cases.
3. Implement a small vertical slice across domain/API and UI without adding durable plan/input storage.
4. Add focused checks and integrate in the approved dependency order.
5. Demonstrate acceptance cases and update documentation if contracts or operator behavior change.

## 7. Validation
- **Tests and checks:** Unit/contract checks for valid and invalid values; generation integration check; manual keyboard/error review. Tests and commands do not exist yet. No validation command or test suite is currently established; select tooling only after M0 stack decisions.
- **Manual validation or demo:** Demonstrate normal, boundary, and failure/incomplete cases with synthetic fixtures. Tests must not contact live retailer sites.
- **Acceptance coverage:** Criteria in §3 and the corresponding FR in docs/scope.md; approved MVP plan remains authoritative.

## 8. Deployment and rollback
- **Steps and rollback:** Revert UI/contract change; no persistent input migration is expected. Hosting, migration, backup, and recovery procedures are undecided in M0.

## 9. Assumptions and open questions
- The approved MVP plan remains authoritative; this draft does not approve proposed behavior.
- Resolve: M0-1 ranges, API contract/runtime, privacy/session behavior; M1-0 if generation reads PostgreSQL.
- Confirm exact validation limits, user-facing wording, test tooling, runtime, and named owner where the approved plan has not settled them.

## 10. Approval
- **Reviewer:** User approval recorded 2026-11-25 (name not provided).
- **Status and comments:** Approved per user instruction. M0 decision gates and open questions recorded above remain unresolved and must be settled before the affected implementation begins.
