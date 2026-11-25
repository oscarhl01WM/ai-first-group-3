# D-M1-03: Integrate the synthetic-data planning and shopping vertical slice

**Status:** Draft for review and assignment
**Owner:** D — Backend / Budget, Integration, and Persistence
**Milestone / priority:** M1 — vertical slice with synthetic data
**Related requirements:** FR-01–FR-09; M1 exit
**Collaborators:** A builds input/result UI; B supplies synthetic branch fixture; C provides recipe planning; D integrates API, persistence, aggregation, and estimate.

## Description
Connect approved input, schedule and recipe assignment, consolidated shopping needs, one-branch package calculation, and the frontend into one reproducible end-to-end flow backed by PostgreSQL catalog fixtures. Use the M0 worked example. Make invalid input, no-match, and incomplete-price states explicit.

## Acceptance criteria
- [ ] A fresh database migrates/seeds and the agreed example returns expected occasions, recipe quantities, shopping needs, package rounding, and CRC total.
- [ ] Invalid inputs, no-match, and incomplete-price states are observable and handled by the UI.
- [ ] The backend recomputes totals from authoritative catalog/price data rather than client values.
- [ ] Generated plan and user inputs remain transient; no durable plan history is added.
- [ ] A focused integration/e2e check can be run using local synthetic data only.

## Dependencies
- D-M1-01 persistence; D-M1-02 API contract; A-M1-01/A-M1-02; B-M1-01; C-M1-01/C-M1-02/C-M1-03.

## Open questions and constraints
- Validation tooling and run command are selected after M0 stack decisions; no current automated test suite exists.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
