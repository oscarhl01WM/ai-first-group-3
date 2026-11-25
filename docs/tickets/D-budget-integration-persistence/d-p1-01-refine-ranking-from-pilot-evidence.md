# D-P1-01: Revisit ranking and freshness thresholds using pilot evidence

**Status:** Draft for review and assignment
**Owner:** D — Backend / Budget, Integration, and Persistence
**Milestone / priority:** P1 — post-pilot improvement; not an MVP release blocker
**Related requirements:** FR-08–FR-12; adopted pilot measures
**Collaborators:** A analyzes usability; B provides price coverage/freshness evidence; C reviews catalog and alternative impacts.

## Description
Review pilot data and propose tuning for budget ranking, freshness thresholds, and adjustment behavior. Separate observed evidence from assumptions and implement only after the team approves the post-pilot scope.

## Acceptance criteria
- [ ] Each proposed change cites pilot evidence and states its effect on complete/incomplete estimates and substitutions.
- [ ] No threshold or ranking change is made without review and explicit scope approval.
- [ ] Regression fixtures preserve no false fit claims, one-branch totals, and restriction compatibility.

## Dependencies
- D-M4-01 pilot/release evidence; explicit P1 approval.

## Open questions and constraints
- This work is P1 and not a release gate; initial thresholds and ranking policy must first be agreed in M0.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
