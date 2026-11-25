# D-M3-02: Complete security, privacy, monitoring, and database recovery checks

**Status:** Draft for review and assignment
**Owner:** D — Backend / Budget, Integration, and Persistence
**Milestone / priority:** M3 — cross-cutting quality, privacy, and operations
**Related requirements:** All FRs; operational readiness
**Collaborators:** A leads accessibility/Spanish UX; B leads source/import operations; C leads catalog quality; all four review pilot readiness.

## Description
Implement and verify the chosen runtime’s input limits, rate controls, safe error handling, privacy-minimized logging, secret handling, health/readiness, least-privilege PostgreSQL roles, encrypted automated backups, restore rehearsal, and migration rollback/recovery process. Coordinate source diagnostics and synthetic/permitted fixtures. Do not invent retention or recovery objectives; use M0 decisions.

## Acceptance criteria
- [ ] API limits/rate controls and safe error behavior are configured using approved runtime/host policy.
- [ ] Logs exclude unnecessary personal/restriction input and secrets; retention follows approved policy.
- [ ] Database access uses least privilege and secrets are not committed to repository.
- [ ] Health/readiness and import/data-quality diagnostics expose actionable failure states.
- [ ] Backup and restore rehearsal meets approved retention/recovery objectives; migration failure/rollback/recovery is documented and exercised safely.
- [ ] Accessibility, security, freshness, failure, and data-quality checks required by M3 are recorded before M4.

## Dependencies
- D-M0-02 hosting/security/privacy/retention/recovery decisions; D-M1-01 persistence; integrated M1–M2; B-M3-01 and C-M3-02; A-M3-02.

## Open questions and constraints
- Provider, backup product, retention period, RPO/RTO, operational owner, and security tooling are unresolved M0 decisions.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
