# C-M1-03: Scale recipe ingredients and return recipe details

**Status:** Draft for review and assignment
**Owner:** C — Backend / Meal Planning
**Milestone / priority:** M1 — vertical slice; FR-02 and FR-06
**Related requirements:** FR-02, FR-05, FR-06
**Collaborators:** A presents recipe details; D owns plan response and calculation integration.

## Description
Return the selected recipe version’s user-facing instructions and scale ingredient quantities to planned servings using the approved base-serving rules and exact quantity representation. Keep canonical units/dimensions intact and avoid unreviewed mass-volume-count conversions.

## Acceptance criteria
- [ ] Each assigned recipe response identifies its immutable recipe version and planned servings.
- [ ] All required ingredient lines and instructions are returned for the selected recipe.
- [ ] Scaled ingredient amounts reconcile to base quantities under the approved arithmetic and preserve supported units.
- [ ] Unsupported cross-dimension conversions are rejected or kept separate, never guessed.
- [ ] A worked fixture validates quantity values before they feed shopping aggregation.

## Dependencies
- C-M0-01 unit decisions; C-M1-01 recipe catalog; D-M1-02 contract; D-M2-01 shopping aggregation contract.

## Open questions and constraints
- Display rounding is separate from calculation precision and needs a team-approved presentation rule.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-02-household-size.md](../../plans/feature-fr-02-household-size.md)
- [feature-fr-06-recipe-ingredients.md](../../plans/feature-fr-06-recipe-ingredients.md)
