# A-M2-01: Present the shopping list and store estimates

**Status:** Draft for review and assignment
**Owner:** A — Frontend / Interface
**Milestone / priority:** M2 — catalog and comparison; FR-07–FR-10
**Related requirements:** FR-07, FR-08, FR-09, FR-10
**Collaborators:** D owns shopping and total response contracts; B owns prices, stores, freshness, and provenance; C reviews ingredient labels/units.

## Description
Present normalized consolidated shopping needs and per-branch store estimates. Show required quantities, package purchase quantities and leftovers where returned, observed dates/freshness, missing items, partial subtotals, and complete totals. Compare only equivalent baskets and keep incomplete branches out of complete-total ranking.

## Acceptance criteria
- [ ] Compatible duplicate shopping needs appear consolidated with quantity and unit; incompatible units remain distinct.
- [ ] Each store result identifies its branch and estimate/provenance date when available.
- [ ] Complete estimates are visually distinguishable from incomplete estimates.
- [ ] Incomplete results list missing items and any partial subtotal and are not represented as a complete ranking or budget-fit result.
- [ ] The same synthetic fixture can be traced from recipe needs through each displayed store line.

## Dependencies
- A-M1-02 plan result screens and D-M2-01/M2-02 response contracts.
- B-M2-01 approved observations/product matching and B-M2-02 price selection; C canonical ingredient names and units.

## Open questions and constraints
- Approved candidate stores, stale thresholds, and source-display wording must be decided in M0.
- Frontend/API stack remains unselected; existing UI is only a prototype.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-07-shopping-list.md](../../plans/feature-fr-07-shopping-list.md)
- [feature-fr-08-price-sourcing.md](../../plans/feature-fr-08-price-sourcing.md)
- [feature-fr-09-checkout-cost.md](../../plans/feature-fr-09-checkout-cost.md)
- [feature-fr-10-supermarket-comparison.md](../../plans/feature-fr-10-supermarket-comparison.md)
