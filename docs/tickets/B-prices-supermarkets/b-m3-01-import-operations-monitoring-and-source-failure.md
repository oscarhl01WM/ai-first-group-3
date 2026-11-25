# B-M3-01: Add source import diagnostics and operational monitoring

**Status:** Draft for review and assignment
**Owner:** B — Backend / Prices and Supermarkets
**Milestone / priority:** M3 — cross-cutting quality, privacy, and operations
**Related requirements:** FR-08–FR-10
**Collaborators:** D owns health/observability and operational integration; A owns user-visible source failure states.

## Description
Provide operator-visible import outcomes, validation failures, source unavailability, freshness/coverage gaps, and review queues for the approved source path. Ensure failures cannot silently replace good history or make stale data appear fresh.

## Acceptance criteria
- [ ] Import attempts have actionable success/failure counts and validation diagnostics without storing prohibited raw retailer pages.
- [ ] Source or adapter failures leave prior observations intact and do not create fresh eligible observations.
- [ ] Coverage and freshness gaps can be reviewed per approved store/branch.
- [ ] A source failure can be surfaced through an explicit API status for the UI.
- [ ] Runbook/recovery notes identify safe retry and disabling behavior.

## Dependencies
- B-M2-01 importer; B-M2-02 price eligibility; D-M3-02 monitoring/security/operations decisions.

## Open questions and constraints
- Specific monitoring platform, alert thresholds, and import cadence depend on M0 host/operations decisions.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-08-price-sourcing.md](../../plans/feature-fr-08-price-sourcing.md)
- [feature-fr-10-supermarket-comparison.md](../../plans/feature-fr-10-supermarket-comparison.md)
