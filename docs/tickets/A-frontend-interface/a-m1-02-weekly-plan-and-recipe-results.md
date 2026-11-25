# A-M1-02: Present the weekly schedule and recipe details

**Status:** Draft for review and assignment
**Owner:** A — Frontend / Interface
**Milestone / priority:** M1 — vertical slice; FR-03, FR-05, FR-06
**Related requirements:** FR-03, FR-05, FR-06
**Collaborators:** C owns schedule assignment, recipe data, and serving scaling; D owns response contract; A integrates the journey.

## Description
Build the plan/calendar and recipe-detail result screens for the approved schedule contract. Display every selected occasion, assigned recipe, servings, ingredients and quantities, instructions, equipment/restriction caveats when approved, and visible repeat indicators. Render no-match results with the next action returned by the domain/API.

## Acceptance criteria
- [ ] The result view shows exactly the occasions returned for the submitted schedule with their day/type labels.
- [ ] Each recipe card/detail view shows the assigned recipe, planned servings, required ingredients and quantities, and instructions supplied by the contract.
- [ ] Repeated recipes are clearly identified when present.
- [ ] No-match or incomplete plan data is communicated without hiding unfilled occasions or suggesting restrictions were relaxed.
- [ ] The view works with the agreed synthetic M1 example and approved narrow/mobile layout.

## Dependencies
- A-M1-01 input experience and approved journey.
- C-M1-02 assignment and C-M1-03 recipe detail/scaling contract; D-M1-02 API contract.

## Open questions and constraints
- Calendar versus compact occasion list presentation and exact copy require UX review.
- Recipe appliance display depends on the M0 appliance decision and reviewed catalog fields.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-03-weekly-schedule.md](../../plans/feature-fr-03-weekly-schedule.md)
- [feature-fr-05-recipe-assignment.md](../../plans/feature-fr-05-recipe-assignment.md)
- [feature-fr-06-recipe-ingredients.md](../../plans/feature-fr-06-recipe-ingredients.md)
