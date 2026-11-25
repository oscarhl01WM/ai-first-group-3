# D-M1-01: Build PostgreSQL catalog persistence and versioned migrations

**Status:** Draft for review and assignment
**Owner:** D — Backend / Budget, Integration, and Persistence
**Milestone / priority:** M1 — persistence foundation; M1-0
**Related requirements:** FR-05, FR-06, FR-08–FR-10; persistence boundary
**Collaborators:** B owns store/product/source/observation fields; C owns recipe/ingredient/restriction fields; A reviews database-unavailable states.

## Description
After M0 choices, create isolated local/test PostgreSQL databases and the versioned migration chain for the selected runtime/tool. Define and implement catalog/price tables, foreign keys, uniqueness, transactions, append-only price observations, least-privilege roles, and synthetic seed loading. Do not create durable user plan or input tables.

## Acceptance criteria
- [ ] A clean supported PostgreSQL database migrates and loads synthetic recipe/product/price fixtures reproducibly.
- [ ] Upgrade migration checks preserve records and enforce agreed foreign-key, uniqueness, and append-only constraints.
- [ ] B/C data ownership and schema fields match approved domain contracts.
- [ ] Local/test and pilot/production use the same migration sequence and supported PostgreSQL major version; local/test data remains synthetic.
- [ ] No generated plan or personal-input data is durably stored.

## Dependencies
- D-M0-02 provider/runtime/tool decisions; M0-approved B/C data contracts; B-M1-01 and C-M1-01 domain inputs.

## Open questions and constraints
- Provider, migration tool, connection settings, backup retention, and recovery objectives require M0 decisions.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
