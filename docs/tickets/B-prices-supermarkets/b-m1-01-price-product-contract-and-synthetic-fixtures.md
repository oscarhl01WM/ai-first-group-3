# B-M1-01: Define product/price boundary and synthetic store fixture

**Status:** Draft for review and assignment
**Owner:** B — Backend / Prices and Supermarkets
**Milestone / priority:** M1 — vertical slice with synthetic data
**Related requirements:** FR-08–FR-10
**Collaborators:** D owns shared API/database contracts; C owns canonical ingredient IDs/units; A reviews data caveats.

## Description
Specify B-owned store, branch, product/package, source, mapping, and price-observation fields against the approved v1 mock contract and chosen PostgreSQL/import boundary. Provide a representative synthetic branch fixture for the M1 end-to-end calculation; fixtures must remain synthetic and never contact retailer sites.

## Acceptance criteria
- [ ] The agreed contract preserves stable IDs, branch identity, package amount/unit, CRC price, capture time, provenance, review/eligibility state, and synthetic marking.
- [ ] The fixture satisfies the approved schemas or approved versioned contract and joins to C-approved ingredient IDs.
- [ ] The worked example produces explicit complete and incomplete price cases with no real retailer data.
- [ ] D and C review the boundary before M1 integration.

## Dependencies
- B-M0-01/B-M0-02 source and freshness decisions; D-M1-01 schema and D-M1-02 contract; C-M0-01 canonical units.

## Open questions and constraints
- Do not expand the mock schema incompatibly until a versioning/migration decision is approved.
- The mock catalog is synthetic; it is not evidence of retailer coverage.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-08-price-sourcing.md](../../plans/feature-fr-08-price-sourcing.md)
- [feature-fr-09-checkout-cost.md](../../plans/feature-fr-09-checkout-cost.md)
