# C-M3-01: Provide reviewed recipe and ingredient adjustment candidates

**Status:** Draft for review and assignment
**Owner:** C — Backend / Meal Planning
**Milestone / priority:** M3 — budget adjustments and hardening; FR-12
**Related requirements:** FR-04, FR-05, FR-12
**Collaborators:** D ranks and recalculates candidates; B supplies branch price compatibility; A presents suggestions and apply actions.

## Description
Create or expose reviewable alternative recipes/ingredients with compatibility metadata and rationale for over-budget suggestions. Candidates must satisfy selected hard restrictions, meal suitability, applicable equipment constraints, and reviewed quantity conversions. Provide enough information for D to recalculate the full basket; do not promise a candidate always exists.

## Acceptance criteria
- [ ] Each candidate has a review state, source/version, rationale, and explicit compatibility rules.
- [ ] Candidates incompatible with any selected hard restriction or required equipment are excluded.
- [ ] Quantity changes use reviewed compatible units/conversions and can be costed from the approved catalog.
- [ ] When no safe reviewed candidate exists, the system can return an explicit no-suggestion outcome.
- [ ] Applying a candidate references the selected version in the session plan snapshot; no user plan is persisted.

## Dependencies
- C-M0-01 restriction/substitution decisions; C-M2-01 reviewed alternatives; B-M2-02 eligible price data; D-M3-01 recalculation interface.

## Open questions and constraints
- Substitution ranking, acceptable trade-offs, and minimum savings are M0 decisions.
- Do not silently replace recipes or weaken restrictions.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-12-substitutions.md](../../plans/feature-fr-12-substitutions.md)
