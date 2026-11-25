# B-P1-01: Expand price coverage with independently replaceable permitted adapters

**Status:** Draft for review and assignment
**Owner:** B — Backend / Prices and Supermarkets
**Milestone / priority:** P1 — backlog improvement; not an MVP release blocker
**Related requirements:** FR-08, FR-10
**Collaborators:** D stabilizes adapter/import boundary; A reviews added freshness states.

## Description
After the MVP and only for sources with documented rights, improve coverage and introduce replaceable source adapters behind the approved stable import boundary. This is conditional backlog work; it does not authorize additional sources or scraping.

## Acceptance criteria
- [ ] Each additional source has documented terms, access, rights, and explicit approval before adapter work.
- [ ] Adapters emit the same reviewed normalized contract and preserve append-only provenance.
- [ ] Fixture-based tests cover adapter behavior without live retailer requests.
- [ ] Coverage improvement is demonstrated against an approved baseline.

## Dependencies
- B-M4-01 source readiness evidence; stable approved interface; explicit P1 scope approval.

## Open questions and constraints
- No additional retailer or collection method is currently approved.
- This ticket is post-MVP and may remain deferred.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-08-price-sourcing.md](../../plans/feature-fr-08-price-sourcing.md)
