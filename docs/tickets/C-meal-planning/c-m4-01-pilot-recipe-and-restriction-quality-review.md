# C-M4-01: Review recipe quality, restrictions, and no-match pilot cases

**Status:** Draft for review and assignment
**Owner:** C — Backend / Meal Planning
**Milestone / priority:** M4 — pilot and release decision
**Related requirements:** FR-04–FR-06, FR-12
**Collaborators:** A coordinates sessions; B verifies product mappings; D coordinates release evidence.

## Description
Review the pilot catalog, recipe instructions, restriction tags, ingredient mappings, schedule coverage, repetition, and no-match behavior. Provide evidence that hard restrictions are respected for the supported reviewed set and clearly document catalog limitations.

## Acceptance criteria
- [ ] Pilot recipe versions, ingredient tags, and relevant mapping references have completed the approved review process.
- [ ] Representative hard-restriction and unknown-tag cases are sampled and evidence recorded.
- [ ] No-match, insufficient-coverage, and repetition cases are documented with expected user guidance.
- [ ] Critical content defects are fixed or explicitly block/limit the pilot release recommendation.

## Dependencies
- C-M3-02 quality checks and B-M4-01 source readiness; D-M4-01 joint release review.

## Open questions and constraints
- Supported restriction set and review rigor must be approved before the audit.
- This review does not create medical safety guarantees.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-04-preferences-restrictions.md](../../plans/feature-fr-04-preferences-restrictions.md)
- [feature-fr-05-recipe-assignment.md](../../plans/feature-fr-05-recipe-assignment.md)
