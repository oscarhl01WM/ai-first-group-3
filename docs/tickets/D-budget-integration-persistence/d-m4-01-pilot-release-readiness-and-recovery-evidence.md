# D-M4-01: Coordinate pilot readiness, recovery evidence, and release decision

**Status:** Draft for review and assignment
**Owner:** D — Backend / Budget, Integration, and Persistence
**Milestone / priority:** M4 — pilot and release decision
**Related requirements:** All FRs; release readiness
**Collaborators:** A coordinates user sessions; B verifies sources/coverage; C reviews recipes/restrictions; all four review and decide together.

## Description
Assemble an evidence-based release packet after M3 gates: integrated journey results, budget/incomplete/no-match cases, source permissions and limitations, database restore rehearsal, operational ownership, privacy/accessibility/security findings, and adopted pilot outcomes. Coordinate defects and present a release recommendation for explicit team decision.

## Acceptance criteria
- [ ] The integrated journey demonstrates within-budget, over-budget, incomplete, no-match, source-failure, and applied-adjustment states.
- [ ] Restore rehearsal succeeds against approved objectives and the operational owner/runbook is identified.
- [ ] FR-08 status reflects documented permitted scraping or an explicitly approved scope change.
- [ ] Pilot results are compared only with targets the team adopted; limitations, unresolved defects, coverage, and ongoing owners are recorded.
- [ ] The team explicitly approves or declines release; this ticket does not publish/deploy without separate authorization.

## Dependencies
- D-M3-02 hardening; A-M4-01 pilot; B-M4-01 source verification; C-M4-01 catalog review.

## Open questions and constraints
- Pilot targets are proposed hypotheses unless adopted.
- Release process, hosting environment, operational owner, and release authority must be determined.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
