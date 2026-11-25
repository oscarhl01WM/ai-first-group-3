# C-M1-02: Generate an eligible recipe assignment for each selected occasion

**Status:** Draft for review and assignment
**Owner:** C — Backend / Meal Planning
**Milestone / priority:** M1 — vertical slice; FR-03 and FR-05
**Related requirements:** FR-03, FR-04, FR-05
**Collaborators:** A builds calendar/occasion screens; D owns input/response contract and integration.

## Description
Implement domain planning that creates one occasion per approved selected day/type pair and assigns a reviewed recipe compatible with meal type and every selected hard restriction. Apply the approved repetition rule and return explicit no-match details when the catalog cannot fill an occasion. Appliances are filtered only if their use is approved.

## Acceptance criteria
- [ ] For each valid input, output contains exactly one planned entry per selected day/type pair and no more than 21 entries.
- [ ] Every assigned recipe is reviewed and matches meal type, hard restrictions, and approved appliance constraints.
- [ ] Repetition follows the approved policy and is visible in the result.
- [ ] No eligible candidate produces an explicit no-match outcome and does not weaken restrictions.
- [ ] A deterministic synthetic fixture reproduces the approved worked scenario.

## Dependencies
- C-M0-01 product decisions; C-M1-01 reviewed catalog; D-M1-02 API contract and A-M1-01 input experience.

## Open questions and constraints
- Ranking/selection preferences and repetition threshold require team decision.
- No-match suggestions must not imply relaxing hard restrictions without explicit user action.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-03-weekly-schedule.md](../../plans/feature-fr-03-weekly-schedule.md)
- [feature-fr-05-recipe-assignment.md](../../plans/feature-fr-05-recipe-assignment.md)
