# A-M0-01: Resolve the user journey and input UX questions

**Status:** Draft for review and assignment
**Owner:** A — Frontend / Interface
**Milestone / priority:** M0 — discovery and decisions
**Related requirements:** FR-01–FR-06, FR-10–FR-12
**Collaborators:** C for meal/restriction semantics; D for budget and API contracts; B for price/source caveats.

## Description
Map the end-to-end Spanish-language journey from budget and household inputs through meal selection, recipe review, shopping list, store comparison, and adjustment. Document user-facing implications of weekday selection, recipe repeats, hard restrictions, optional appliances, incomplete prices, no-match results, and what a whole-package budget means. A owns the journey and UX questions; product semantics remain team decisions in M0.

## Acceptance criteria
- [ ] A journey map or equivalent screen-flow notes cover the approved MVP flow and its principal error, no-match, stale-price, and incomplete-price states.
- [ ] Every unresolved UX choice is recorded as a question with options/trade-offs and linked to the M0 decision owner; none is silently decided in the mockup.
- [ ] A Spanish copy and status inventory is reviewed with B/C/D against the worked example and M0 product decisions.
- [ ] The team confirms the journey as an input to M1 acceptance scenarios.

## Dependencies
- M0-01 product, budget, schedule, and restriction decisions facilitated by D.
- B-M0-01 and B-M0-02 source/price caveats; C-M0-01 recipe/catalog decisions.

## Open questions and constraints
- Confirm whether users choose arbitrary weekdays or only a count of days.
- Confirm the approved source-of-truth location for M0 decisions and the named UX owner.
- No user research target or success threshold is approved until the team adopts one.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-01-budget-input.md](../../plans/feature-fr-01-budget-input.md)
- [feature-fr-03-weekly-schedule.md](../../plans/feature-fr-03-weekly-schedule.md)
- [feature-fr-04-preferences-restrictions.md](../../plans/feature-fr-04-preferences-restrictions.md)
- [feature-fr-05-recipe-assignment.md](../../plans/feature-fr-05-recipe-assignment.md)
- [feature-fr-10-supermarket-comparison.md](../../plans/feature-fr-10-supermarket-comparison.md)
- [feature-fr-11-budget-status.md](../../plans/feature-fr-11-budget-status.md)
- [feature-fr-12-substitutions.md](../../plans/feature-fr-12-substitutions.md)
