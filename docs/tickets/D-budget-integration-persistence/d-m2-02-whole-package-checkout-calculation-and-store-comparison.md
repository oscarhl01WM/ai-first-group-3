# D-M2-02: Calculate whole-package totals and compare complete store baskets

**Status:** Draft for review and assignment
**Owner:** D — Backend / Budget, Integration, and Persistence
**Milestone / priority:** M2 — catalog and comparison; M2-3
**Related requirements:** FR-08, FR-09, FR-10
**Collaborators:** B supplies eligible branch products/prices; C validates ingredient compatibility; A presents totals and missing lines.

## Description
Combine normalized shopping needs with eligible B-supplied branch products/observations. Compute compatible package counts, purchased quantities, leftovers, payable line amounts, CRC total, and completeness for each single-branch basket. Compare 2–3 approved supermarkets only when totals are complete; keep partial totals explicitly incomplete and unranked as complete.

## Acceptance criteria
- [ ] Package quantity is rounded up to cover each required amount and payable line cost follows the M0-approved rounding rule.
- [ ] Total equals the sum of payable lines in the worked example using exact agreed arithmetic and CRC currency.
- [ ] Each estimate uses one branch and one compatible product/observation per priced need; branches are never mixed.
- [ ] Missing/expired/unsupported prices produce missing-item lists and an incomplete subtotal, never a false complete total.
- [ ] Complete branches can be compared on equivalent needs; incomplete branches are not ranked as complete.

## Dependencies
- D-M2-01 shopping needs; B-M2-02 eligible product/price selection; D-M0-01 worked example and D-M0-02 arithmetic/runtime decisions; A-M2-01 presentation integration.

## Open questions and constraints
- Freshness, promotion, conversion, and rounding policy must be approved before finalizing calculations.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-09-checkout-cost.md](../../plans/feature-fr-09-checkout-cost.md)
- [feature-fr-10-supermarket-comparison.md](../../plans/feature-fr-10-supermarket-comparison.md)
