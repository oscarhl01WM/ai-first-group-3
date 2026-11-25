# A-M3-01: Show budget status and apply user-selected adjustments

**Status:** Draft for review and assignment
**Owner:** A — Frontend / Interface
**Milestone / priority:** M3 — budget adjustments and hardening; FR-11, FR-12
**Related requirements:** FR-11, FR-12
**Collaborators:** D owns ranking/recalculation; C reviews recipe/ingredient alternatives and restrictions; B provides comparable prices.

## Description
Render distinct within-budget, over-budget, incomplete/unknown, and no-eligible-plan states. For over-budget results, present compatible suggestions and their recalculated effect; require an explicit user action to apply a change and show the updated plan/list/totals. Do not imply an incomplete estimate fits the budget.

## Acceptance criteria
- [ ] Complete totals show within-budget or over-budget status and the budget difference according to the approved rules.
- [ ] Incomplete prices show budget fit as unknown and identify missing data.
- [ ] Each suggestion is distinguishable from the currently applied plan.
- [ ] The user explicitly applies a selected suggestion before the result changes; the refreshed result shows recalculated items and totals.
- [ ] No-match/no-valid-adjustment cases explain the limitation and offer the approved next action.

## Dependencies
- A-M2-01 store comparison UI; D-M3-01 ranking/recalculation contract.
- C-M3-01 reviewed alternatives and B price availability; M0-01 approved budget/ranking rules.

## Open questions and constraints
- Suggestion ranking, minimum savings, and no-fit behavior remain M0 decisions.
- A budget-fit claim must never be based on partial totals.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-11-budget-status.md](../../plans/feature-fr-11-budget-status.md)
- [feature-fr-12-substitutions.md](../../plans/feature-fr-12-substitutions.md)
