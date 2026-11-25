# C-M3-02: Harden catalog quality checks and no-match behavior

**Status:** Draft for review and assignment
**Owner:** C — Backend / Meal Planning
**Milestone / priority:** M3 — cross-cutting quality, privacy, and operations
**Related requirements:** FR-04–FR-06, FR-12
**Collaborators:** D integrates quality/readiness checks; A verifies user-visible no-match state; B validates ingredient mapping assumptions.

## Description
Add repeatable review and validation checks for recipe versions, ingredient references, units, instructions, restriction tags, and substitution compatibility. Resolve high-impact catalog defects and ensure incomplete/unknown catalog facts result in conservative eligibility and an explicit user outcome.

## Acceptance criteria
- [ ] Automated or repeatable checks detect broken ingredient references, invalid unit/dimension data, missing review state, duplicate version identifiers, and invalid tags.
- [ ] Hard-restriction unknown/conflict cases are covered by fixtures and excluded from eligible assignments.
- [ ] No-match and insufficient-catalog behavior is demonstrated across representative 1–21 occasion inputs.
- [ ] Resolved catalog issues retain reviewable provenance/version history.
- [ ] Quality findings and remaining coverage limits are reported to the pilot/release review.

## Dependencies
- C-M1-01 catalog persistence; C-M2-01 reviewed coverage; D-M3-02 integrated quality plan; A-M3-02 UX states.

## Open questions and constraints
- Test framework and exact seed coverage depend on M0 stack and catalog decisions.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-04-preferences-restrictions.md](../../plans/feature-fr-04-preferences-restrictions.md)
- [feature-fr-05-recipe-assignment.md](../../plans/feature-fr-05-recipe-assignment.md)
- [feature-fr-12-substitutions.md](../../plans/feature-fr-12-substitutions.md)
