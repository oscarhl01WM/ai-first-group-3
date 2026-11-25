# D-M0-02: Select application runtime, hosting, PostgreSQL provider, and operations policy

**Status:** Draft for review and assignment
**Owner:** D — Backend / Budget, Integration, and Persistence
**Milestone / priority:** M0 — discovery and decisions; P0
**Related requirements:** All FRs; architecture and operations
**Collaborators:** A/B/C provide frontend, import, and catalog requirements; all four approve budget, ownership, and operating constraints.

## Description
Resolve the architecture and operating decisions required before implementation: frontend and API stack/runtime, API host, managed PostgreSQL provider, migration and connection tooling, supported PostgreSQL major version, local/test/pilot/production environment approach, hosting budget, operational owner, backup retention, recovery objectives, access controls, data residency, latency/uptime goals, and security/privacy controls. Confirm whether shared contracts are needed. PostgreSQL remains the approved database engine; do not initialize an unselected stack.

## Acceptance criteria
- [ ] The team records choices or explicit blockers for each listed runtime, host, provider, tooling, environment, and operational decision.
- [ ] Local/test/pilot/production database version and migration-sequence policy is documented with synthetic local/test data.
- [ ] Backup retention, recovery objectives, data access, residency, operational ownership, and hosting budget are explicitly decided or remain named release gates.
- [ ] The chosen frontend/API/shared-contract design is consistent with the approved persistence boundary and does not add durable plan/input history.
- [ ] No package manager, framework, provider, or cloud resource is initialized before the decision is recorded.

## Dependencies
- D-M0-01 source-of-truth and M0 decision process; team constraints and provider/hosting evidence.

## Open questions and constraints
- The architecture document lists competing stack options and makes no selection.
- Named operational owner and actual recovery targets remain undecided.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
