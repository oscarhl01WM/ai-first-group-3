# D-M2-01: Aggregate recipe ingredient needs into the shopping list contract

**Status:** Draft for review and assignment
**Owner:** D — Backend / Budget, Integration, and Persistence
**Milestone / priority:** M2 — catalog and comparison; M2-1
**Related requirements:** FR-06, FR-07
**Collaborators:** C owns recipe quantities and canonical units; A presents the shopping list; B consumes needs for product matching.

## Description
Read planned recipe-version needs and aggregate compatible ingredient IDs and units across all occasions. Preserve mass/volume/count dimensions and expose normalized required quantities plus unresolved/missing ingredient references for later pricing. Store-specific product mapping and package rounding are outside this task.

## Acceptance criteria
- [ ] Compatible ingredient references are consolidated and quantities reconcile to all recipe lines.
- [ ] Incompatible ingredient IDs/dimensions or unreviewed conversions remain separate and are not guessed.
- [ ] Missing references are surfaced explicitly for review rather than dropped silently.
- [ ] Output contract is stable for B price matching and A list display.
- [ ] Synthetic fixture checks cover repeated ingredients, scaled quantities, optional ingredient policy, and incompatible units.

## Dependencies
- D-M1-01 catalog schema and D-M1-02 contract; C-M1-03 quantity semantics; C-M2-01 canonical catalog; B-M1-01 matching boundary.

## Open questions and constraints
- Optional ingredient inclusion/exclusion and exact display rounding require approved product semantics.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-07-shopping-list.md](../../plans/feature-fr-07-shopping-list.md)
