# C-M0-01: Set recipe, schedule, restriction, and appliance domain rules

**Status:** Draft for review and assignment
**Owner:** C — Backend / Meal Planning
**Milestone / priority:** M0 — discovery and decisions; P0
**Related requirements:** FR-03–FR-06, FR-12
**Collaborators:** A for journey/copy; D for contract, persistence, and worked example; B for canonical ingredient and product mapping needs.

## Description
Review the available recipe/catalog fixture and propose the production rules for meal suitability, selected days and meal types, repetition, servings, supported hard restrictions/preferences, ingredient-tag review, recipe versioning, canonical ingredient IDs/units, optional appliance requirements, and a measurable definition of reviewed/realistic recipes. Present unresolved alternatives for M0 rather than choosing them silently.

## Acceptance criteria
- [ ] The team records approved schedule semantics and repetition behavior, including what happens when eligible catalog coverage is insufficient.
- [ ] Supported restriction labels, the distinction between preference and hard restriction, unknown-tag behavior, and the ingredient-tag review process are approved.
- [ ] The team decides whether appliances are an input and which controlled values/catalog fields are needed.
- [ ] Canonical ingredient identity and allowed unit dimensions/conversions are documented with B/D.
- [ ] Recipe review/coverage criteria are measurable enough to plan M1/M2 catalog work.

## Dependencies
- M0-01 decision process and source-of-truth location; A-M0-01 journey map; D-M0-01 worked example.

## Open questions and constraints
- Current recipe fixtures are synthetic and do not establish approved production content or tags.
- No medical/allergy safety guarantee is implied by the current product scope.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-03-weekly-schedule.md](../../plans/feature-fr-03-weekly-schedule.md)
- [feature-fr-04-preferences-restrictions.md](../../plans/feature-fr-04-preferences-restrictions.md)
- [feature-fr-05-recipe-assignment.md](../../plans/feature-fr-05-recipe-assignment.md)
- [feature-fr-06-recipe-ingredients.md](../../plans/feature-fr-06-recipe-ingredients.md)
