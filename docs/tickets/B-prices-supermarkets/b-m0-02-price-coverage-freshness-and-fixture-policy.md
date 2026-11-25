# B-M0-02: Agree price coverage, freshness, and fixture requirements

**Status:** Draft for review and assignment
**Owner:** B — Backend / Prices and Supermarkets
**Milestone / priority:** M0 — discovery and decisions; P0
**Related requirements:** FR-08–FR-10
**Collaborators:** D for worked checkout example and comparison contract; C for ingredient/product matching; A for freshness labels.

## Description
Propose and obtain decisions for seed coverage, observation freshness/staleness/unavailability policy, branch scope, promotion handling, price provenance fields, and minimum synthetic examples needed for complete and incomplete states. The current 7-day/30-day thresholds are illustrative only.

## Acceptance criteria
- [ ] The team approves or revises freshness thresholds and the policy for promotions, branch/region applicability, and capture timestamps.
- [ ] Coverage requirements are tied to the reviewed ingredient/recipe example and approved stores.
- [ ] The fixture specification includes a complete basket, stale observation, missing/expired price, and incompatible/missing mapping.
- [ ] Policy and fixture requirements are recorded in the agreed source-of-truth location and API/data-contract inputs.

## Dependencies
- B-M0-01 source audit; C-M0-01 ingredient/catalog assumptions; D-M0-01 worked calculation and D-M0-02 technical choices.

## Open questions and constraints
- The illustrative freshness windows are not validated targets.
- No candidate store or data source is approved yet.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-08-price-sourcing.md](../../plans/feature-fr-08-price-sourcing.md)
- [feature-fr-09-checkout-cost.md](../../plans/feature-fr-09-checkout-cost.md)
- [feature-fr-10-supermarket-comparison.md](../../plans/feature-fr-10-supermarket-comparison.md)
