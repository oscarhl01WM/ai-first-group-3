# C-M1-01: Persist reviewed recipes, versions, ingredients, and restriction tags

**Status:** Draft for review and assignment
**Owner:** C — Backend / Meal Planning
**Milestone / priority:** M1 — PostgreSQL persistence foundation / vertical slice
**Related requirements:** FR-04–FR-06
**Collaborators:** D owns PostgreSQL migrations and persistence boundary; B reviews canonical ingredient IDs; A reviews unavailable/no-match behavior.

## Description
Define C-owned recipe, immutable recipe-version, recipe-ingredient, instruction, meal-suitability, appliance, restriction-tag, and review-status records for PostgreSQL. Supply synthetic local/test seed content and criteria for later reviewed production catalog entries. Generated plans and user inputs remain session-only; do not add durable plan-history storage.

## Acceptance criteria
- [ ] Recipe/version records preserve immutable version identity and the fields needed for assignment, detail display, scaling, and restriction checks.
- [ ] Ingredient references use canonical IDs and only approved units/conversions.
- [ ] Review status and restriction tags are explicit; unknown compatibility cannot be treated as passing a hard restriction.
- [ ] Migrations/fixtures pass referential-integrity and uniqueness checks and are reproducible in local/test environments.
- [ ] No durable Plan, PlannedMeal, or personal-input persistence is introduced.

## Dependencies
- C-M0-01 decisions; D-M1-01 PostgreSQL schema/migration foundation; B/D agreement on canonical ingredient contract.

## Open questions and constraints
- Exact schema columns and migration tooling depend on D-M0-02 stack/tooling decisions.
- All local/test recipe data must be synthetic; production content needs review.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-04-preferences-restrictions.md](../../plans/feature-fr-04-preferences-restrictions.md)
- [feature-fr-06-recipe-ingredients.md](../../plans/feature-fr-06-recipe-ingredients.md)
