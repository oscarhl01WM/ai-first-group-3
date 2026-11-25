# A-M1-01: Build the session-scoped planning input experience

**Status:** Draft for review and assignment
**Owner:** A — Frontend / Interface
**Milestone / priority:** M1 — vertical slice; FR-01–FR-04
**Related requirements:** FR-01, FR-02, FR-03, FR-04
**Collaborators:** D owns the API input contract and server-side validation; C defines meal/restriction enums; B reviews currency and price assumptions.

## Description
Turn the current static demo wizard into the approved input experience for weekly CRC budget, people, days/meal types, and controlled preferences/restrictions. Carry inputs through retryable generation failures within the browser session. Add appliance selection only if M0 approves it. Do not introduce accounts or durable input storage.

## Acceptance criteria
- [ ] The UI accepts and presents valid budget, people, schedule, preference, and restriction values according to the approved contract.
- [ ] Invalid ranges and unsupported values show actionable Spanish errors and focus/announce errors accessibly.
- [ ] The occasion count matches approved schedule semantics and stays within 21.
- [ ] Inputs remain available after a retryable generation error and are cleared only according to the approved session behavior.
- [ ] No account or durable plan/input retrieval is added.

## Dependencies
- A-M0-01 journey decisions and M0-01/D API contract decisions.
- C-M0-01 approved enums and schedule semantics; D-M1-02 validation contract.

## Open questions and constraints
- Numeric bounds, exact preference/restriction options, appliance availability, and weekday behavior are M0 decisions.
- Current prototype is dependency-free static HTML/JS; frontend framework selection remains open.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-01-budget-input.md](../../plans/feature-fr-01-budget-input.md)
- [feature-fr-02-household-size.md](../../plans/feature-fr-02-household-size.md)
- [feature-fr-03-weekly-schedule.md](../../plans/feature-fr-03-weekly-schedule.md)
- [feature-fr-04-preferences-restrictions.md](../../plans/feature-fr-04-preferences-restrictions.md)
