# Plan: Preferences and dietary restrictions

**Status:** Approved
**Issue:** FR-04 (no issue link supplied)
**Owner:** A — Frontend / Interface; C — Backend / Meal Planning; D — Backend / Budget, Integration, and Persistence (provisional workstream roles; named owners not assigned)

## 1. Objective and context
- **Problem or need:** Allow supported simple preferences/restrictions to filter recipes transparently.
- **Beneficiaries and expected outcome:** People in Costa Rica planning meals within a weekly household budget; allow supported simple preferences/restrictions to filter recipes transparently.

## 2. Scope
### Included
- Controlled reviewed values; eligibility based on reviewed recipe and ingredient tags.
### Excluded
- Medical/allergy safety guarantees; free-text health profiles; durable storage of restrictions.

## 3. Acceptance criteria
- [ ] Only supported enums are accepted.
- [ ] Hard restrictions exclude conflicting or unknown ingredient compatibility.
- [ ] No-match explains the constraint without silently relaxing it.

## 4. Analysis performed
- **Current state and repository patterns:** data/mock/recipes.schema.json currently allows vegetarian/vegan tags with mock review status; production vocabulary is open. The repository has a dependency-free static prototype in apps/web/, synthetic fixtures and strict v1 schemas in data/mock/, and no production API, package manager, automated test suite, CI, or deployment setup (approved plan §1).
- **Impact, contracts, and dependencies:** Affected areas are the frontend prototype, relevant future domain/API behavior, and catalog/persistence only where required. Existing contracts are limited to mock JSON schemas; stack and detailed module boundaries remain M0 decisions. Dependencies: M0-1 approves labels, tag review and preference vs hard restriction; M1-0 schema; M1-2 filtering.
- **Risks, edge cases, and mitigations:** Incomplete or wrong tags can mislead; avoid medical claims and use reviewed tags.
- **Alternatives and pending decisions:** Follow the approved MVP plan; preserve unresolved choices. Confirm M0-dependent behavior before implementation; do not infer API stack, source permissions, named ownership, or release policy.

## 5. Proposed solution
- **High-level description:** Represent selections as controlled session values and filter against reviewed tags; unknown compatibility is ineligible for a hard restriction.
- **Affected components:** apps/web/index.html, apps/web/app.js, and the relevant future API/domain module; update data/mock schemas/fixtures only if the approved contract requires it. No production module currently exists.

## 6. Work sequence
1. Resolve M0 product, technical, and source decisions that affect this feature and record the approved contract.
2. Define observable request/response and domain behavior; identify synthetic fixture cases.
3. Implement a small vertical slice across domain/API and UI without adding durable plan/input storage.
4. Add focused checks and integrate in the approved dependency order.
5. Demonstrate acceptance cases and update documentation if contracts or operator behavior change.

## 7. Validation
- **Tests and checks:** Unit matching/conflict/unknown tests; integration and end-to-end no-match; tag audit. No validation command or test suite is currently established; select tooling only after M0 stack decisions.
- **Manual validation or demo:** Demonstrate normal, boundary, and failure/incomplete cases with synthetic fixtures. Tests must not contact live retailer sites.
- **Acceptance coverage:** Criteria in §3 and the corresponding FR in docs/scope.md; approved MVP plan remains authoritative.

## 8. Deployment and rollback
- **Steps and rollback:** Disable a problematic label and correct through review; if migrated, use forward corrective migration. Hosting, migration, backup, and recovery procedures are undecided in M0.

## 9. Assumptions and open questions
- The approved MVP plan remains authoritative; this draft does not approve proposed behavior.
- Resolve: M0-1 approves labels, tag review and preference vs hard restriction; M1-0 schema; M1-2 filtering.
- Confirm exact validation limits, user-facing wording, test tooling, runtime, and named owner where the approved plan has not settled them.

## 10. Approval
- **Reviewer:** User approval recorded 2026-11-25 (name not provided).
- **Status and comments:** Approved per user instruction. M0 decision gates and open questions recorded above remain unresolved and must be settled before the affected implementation begins.
