# B-M2-02: Select eligible prices and expose complete/incomplete branch data

**Status:** Draft for review and assignment
**Owner:** B — Backend / Prices and Supermarkets
**Milestone / priority:** M2 — catalog and comparison; FR-08–FR-10
**Related requirements:** FR-08, FR-09, FR-10
**Collaborators:** D owns checkout calculation and response integration; C reviews ingredient compatibility; A presents freshness and missing-data state.

## Description
Provide branch-specific price selection for normalized shopping needs using approved product compatibility, observation eligibility, promotion rules, and freshness policy. Return enough provenance and missing-line detail for D to calculate full-package totals and A to represent incomplete comparisons accurately.

## Acceptance criteria
- [ ] Price selection uses only reviewed, compatible products and eligible observations under the approved policy.
- [ ] One estimate is scoped to one branch; observations from multiple branches are never mixed into a basket.
- [ ] Missing, stale, expired, or incompatible lines are identified and marked rather than treated as zero or fresh.
- [ ] The selected observation identity/date and relevant promotion validity can be traced for every priced line.
- [ ] Complete and incomplete fixtures produce deterministic results under the approved policy.

## Dependencies
- B-M0-02 policy; B-M2-01 product/price import; D-M2-01 shopping needs and D-M2-02 estimate contract; C canonical units.

## Open questions and constraints
- Freshness windows, promotion expiry, and tie-breaking among equivalent products must be approved in M0.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-08-price-sourcing.md](../../plans/feature-fr-08-price-sourcing.md)
- [feature-fr-09-checkout-cost.md](../../plans/feature-fr-09-checkout-cost.md)
- [feature-fr-10-supermarket-comparison.md](../../plans/feature-fr-10-supermarket-comparison.md)
