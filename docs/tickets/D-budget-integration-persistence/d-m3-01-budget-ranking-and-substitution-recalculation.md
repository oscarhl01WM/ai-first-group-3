# D-M3-01: Evaluate budget status and recalculate applied adjustments

**Status:** Draft for review and assignment
**Owner:** D — Backend / Budget, Integration, and Persistence
**Milestone / priority:** M3 — budget adjustments and hardening; M3-1
**Related requirements:** FR-11, FR-12
**Collaborators:** A owns suggestion/apply flow; B supplies prices; C supplies compatible alternatives.

## Description
Apply the M0-approved ranking and budget rules only to complete same-branch checkout estimates. Return within-budget, over-budget with difference, incomplete/unknown, and no-eligible-plan outcomes. Evaluate C’s reviewed adjustment candidates using B’s eligible prices and recompute the full shopping list and store totals only after the user applies a suggestion.

## Acceptance criteria
- [ ] Complete estimate at/below budget is within budget; complete estimate above budget shows the difference.
- [ ] Incomplete estimates always report budget fit unknown and identify missing lines.
- [ ] Suggestions are clearly separate from applied plan state and respect hard restrictions/equipment rules.
- [ ] Applying a suggestion causes authoritative full-list and per-branch recalculation; client-provided totals are ignored.
- [ ] No eligible suggestion or no eligible plan is represented explicitly and does not imply that fit is guaranteed.

## Dependencies
- D-M0-01 approved budget/ranking/substitution policy; D-M2-02 complete/incomplete comparison; C-M3-01 reviewed candidates; A-M3-01 apply UX.

## Open questions and constraints
- Ranking, tie-breaks, target fit behavior, and acceptable trade-offs remain unresolved until M0.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-11-budget-status.md](../../plans/feature-fr-11-budget-status.md)
- [feature-fr-12-substitutions.md](../../plans/feature-fr-12-substitutions.md)
