# B-M2-01: Match reviewed products and import permitted price observations

**Status:** Draft for review and assignment
**Owner:** B — Backend / Prices and Supermarkets
**Milestone / priority:** M2 — catalog and comparison; FR-08
**Related requirements:** FR-08
**Collaborators:** D owns persistence/import boundary; C approves canonical ingredient references; A owns source/freshness notices.

## Description
After source-rights approval, build the approved collection/import path to normalize eligible observations and reviewed product-to-ingredient mappings into PostgreSQL. Preserve provenance and append-only history. If no compliant automated path exists, stop and record FR-08 as blocked unless the team approves an explicit scope change.

## Acceptance criteria
- [ ] Only sources with documented rights and approved access are ingested.
- [ ] Each mapping and observation has reviewable source/product/branch/ingredient references and provenance fields.
- [ ] New price observations append history; prior observations are not overwritten.
- [ ] Invalid IDs, units, currencies, source records, and unreviewed mappings are rejected or quarantined with diagnostics.
- [ ] Import validation uses synthetic or saved permitted fixtures and sends no live retailer traffic in tests.
- [ ] FR-08 is not marked complete if the approved requirement for scraping cannot be met.

## Dependencies
- B-M0-01 approved source path; B-M1-01 contract/fixture; D-M1-01 PostgreSQL migrations; C-M1-01 canonical ingredient model.

## Open questions and constraints
- Collection cadence, technology, and any adapter framework remain decisions after rights and runtime selection.
- Manual import is not a substitute for scraping without an approved scope change.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-08-price-sourcing.md](../../plans/feature-fr-08-price-sourcing.md)
