# C-M2-01: Expand and review recipe, ingredient, tag, and unit coverage

**Status:** Draft for review and assignment
**Owner:** C — Backend / Meal Planning
**Milestone / priority:** M2 — catalog and comparison
**Related requirements:** FR-04–FR-07, FR-12
**Collaborators:** B needs canonical IDs for product matching; D needs complete reviewed fixtures and migration integration; A owns limitation messaging.

## Description
Curate the approved reviewed recipe and ingredient coverage needed for common MVP inputs. Validate ingredient identity, quantity/unit semantics, meal suitability, instructions, restriction tags, and appliance needs against the review process. Coordinate canonical ingredient IDs with B before product matching. Keep synthetic development fixtures distinct from reviewed pilot/production records.

## Acceptance criteria
- [ ] Recipe coverage is measured against the team-approved set of supported input combinations and repetition/no-match behavior.
- [ ] Every production recipe/version and ingredient tag has an explicit review state and reviewer/provenance per the approved process.
- [ ] Ingredient IDs and units agree with B’s product mapping boundary; conversions are present only when reviewed.
- [ ] Catalog schema/reference checks identify missing ingredients, invalid units, duplicate IDs, or incompatible tags.
- [ ] No unsupported claim of comprehensive coverage is made; gaps are documented for UI and pilot.

## Dependencies
- C-M0-01 catalog/review rules; C-M1-01 schema; B-M1-01 price contract and B-M2-01 mappings; D-M1-01 migrations.

## Open questions and constraints
- Seed coverage threshold and accepted recipe definition remain team decisions.
- Production content requires review and is not supplied by current synthetic fixtures.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-04-preferences-restrictions.md](../../plans/feature-fr-04-preferences-restrictions.md)
- [feature-fr-05-recipe-assignment.md](../../plans/feature-fr-05-recipe-assignment.md)
- [feature-fr-06-recipe-ingredients.md](../../plans/feature-fr-06-recipe-ingredients.md)
