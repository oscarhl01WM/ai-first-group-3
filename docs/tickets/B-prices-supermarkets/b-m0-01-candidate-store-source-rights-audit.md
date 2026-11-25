# B-M0-01: Audit candidate stores and source permissions

**Status:** Draft for review and assignment
**Owner:** B — Backend / Prices and Supermarkets
**Milestone / priority:** M0 — discovery and decisions; P0
**Related requirements:** FR-08, FR-10
**Collaborators:** D for source-to-import boundary and decision record; C for canonical ingredient coverage; A for notices.

## Description
Identify 2–3 candidate supermarket/branch sources and document terms, access controls, rights, practical coverage, geographic scope, price evidence, and collection constraints. Determine whether a permitted path exists for FR-08. Do not infer permission from robots.txt or automate collection before explicit approval.

## Acceptance criteria
- [ ] Each candidate has a source/branch profile with evidence links, terms/access/rights review, coverage observations, and unresolved risks.
- [ ] The team records an explicit permitted collection path or marks FR-08 blocked / proposes a scope change for approval.
- [ ] No automated collection begins before review and permission are recorded.
- [ ] The decision identifies which branch/store assumptions are used in the worked example and M1 fixture.

## Dependencies
- D-M0-01 source-of-truth and decision process; candidate selection/search by team.

## Open questions and constraints
- Specific retailers and branches are not named or approved.
- Manual-only data does not fulfill FR-08 unless a scope change is explicitly approved.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-08-price-sourcing.md](../../plans/feature-fr-08-price-sourcing.md)
- [feature-fr-10-supermarket-comparison.md](../../plans/feature-fr-10-supermarket-comparison.md)
