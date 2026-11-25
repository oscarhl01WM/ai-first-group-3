# D-M0-01: Coordinate M0 product decisions, contracts, and worked calculation

**Status:** Draft for review and assignment
**Owner:** D — Backend / Budget, Integration, and Persistence
**Milestone / priority:** M0 — discovery and decisions; P0
**Related requirements:** FR-01–FR-12
**Collaborators:** A owns journey; B owns source/store review; C owns meal/catalog review; all four reconcile and assign named owners.

## Description
Facilitate one coherent M0 decision set covering all FRs, input validation, days/meal semantics, household servings, restrictions, appliances, budget basis/ranking, no-match and incomplete-price behavior, freshness, substitutions, source policy, interface boundaries, and M1 acceptance scenarios. Produce one worked end-to-end example from inputs through recipes/units/packages to CRC checkout and budget state. Record decisions and unresolved questions in the location chosen by the team.

## Acceptance criteria
- [ ] Each FR-01–FR-12 has an agreed behavior or an explicit open decision/blocker; proposed defaults are not silently promoted.
- [ ] The worked example reconciles selected occasions, serving scaling, ingredient aggregation, branch package counts, CRC cost, and complete/incomplete/budget outcome.
- [ ] Request/response boundaries and ownership between A/B/C/D are reviewed against the example.
- [ ] M1 acceptance scenarios cover normal, invalid input, no-match, stale/missing-price, and over-budget cases.
- [ ] A source-of-truth location and named owners for the four workstreams are assigned; no production implementation is part of M0.

## Dependencies
- A-M0-01 journey map; B-M0-01/M0-02 source and price policy; C-M0-01 domain decisions; team review.

## Open questions and constraints
- No named person is assigned to D or other workstreams yet.
- Open decisions remain gates for affected M1+ implementation until recorded.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-01-budget-input.md](../../plans/feature-fr-01-budget-input.md)
- [feature-fr-02-household-size.md](../../plans/feature-fr-02-household-size.md)
- [feature-fr-03-weekly-schedule.md](../../plans/feature-fr-03-weekly-schedule.md)
- [feature-fr-04-preferences-restrictions.md](../../plans/feature-fr-04-preferences-restrictions.md)
- [feature-fr-08-price-sourcing.md](../../plans/feature-fr-08-price-sourcing.md)
- [feature-fr-09-checkout-cost.md](../../plans/feature-fr-09-checkout-cost.md)
- [feature-fr-11-budget-status.md](../../plans/feature-fr-11-budget-status.md)
- [feature-fr-12-substitutions.md](../../plans/feature-fr-12-substitutions.md)
