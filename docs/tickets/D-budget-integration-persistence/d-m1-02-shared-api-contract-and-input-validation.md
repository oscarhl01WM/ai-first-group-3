# D-M1-02: Define shared API contracts and validate plan inputs

**Status:** Draft for review and assignment
**Owner:** D — Backend / Budget, Integration, and Persistence
**Milestone / priority:** M1 — vertical slice; M1-1
**Related requirements:** FR-01–FR-04; shared plan and estimate contracts
**Collaborators:** A builds client inputs; C defines meal/restriction enums and plan behavior; B reviews currency and price states.

## Description
Define the selected runtime’s request/response contract for plan generation and recalculation, including versioning, controlled enums, validation errors, session-only input semantics, plan/recipe version references, shopping needs, store completeness states, and status behavior. Implement server-side input validation and orchestration boundaries after M0 approves product semantics.

## Acceptance criteria
- [ ] Contract documents valid input fields and approved bounds/enums, and rejects malformed or unsupported input with clear typed errors.
- [ ] The API validates all client input independently; totals and eligibility are not trusted from the browser.
- [ ] Valid inputs remain session-scoped and no durable plan retrieval/input table or endpoint is added.
- [ ] Response represents normal generation, no-match, incomplete price, and retryable catalog/service failures explicitly.
- [ ] A/B/C/D review the same contract version before dependent implementation proceeds.

## Dependencies
- D-M0-01 product decisions; D-M0-02 selected runtime; A-M0-01 and C-M0-01 enum/semantics decisions; D-M1-01 catalog access.

## Open questions and constraints
- Exact endpoint shapes in the MVP plan are recommendations until reviewed against the selected runtime.
- Rate limit values, timeouts, and operational config need selected host/runtime.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
