# A-M3-02: Complete accessible Spanish UX and failure handling

**Status:** Draft for review and assignment
**Owner:** A — Frontend / Interface
**Milestone / priority:** M3 — cross-cutting quality, privacy, and operations
**Related requirements:** All user-facing FRs
**Collaborators:** D for API errors and input limits; B for source/freshness states; C for no-match/restriction states.

## Description
Harden the full journey for keyboard and screen-reader use, understandable Costa Rican Spanish, visible focus and field errors, and recoverable API/catalog/source failures. Ensure product status language communicates estimates, freshness, and unknown outcomes accurately.

## Acceptance criteria
- [ ] All primary journey actions are usable by keyboard with visible focus and logical order.
- [ ] Form errors and dynamic status changes are programmatically associated or announced and have a clear recovery action.
- [ ] User-facing text uses the approved Spanish terminology and distinguishes estimates, stale data, incomplete comparisons, and unknown budget fit.
- [ ] Generation, catalog-unavailable, source-failure, no-match, and retryable-error states preserve input where approved.
- [ ] Cross-browser/manual accessibility and content findings are recorded and blocking defects resolved before pilot readiness.

## Dependencies
- M1–M3 integrated screens and stable API error/status contracts.
- M0 terminology decisions; D-M3-02 operational/error behaviors; B-M3-01 and C-M3-02 domain failure signals.

## Open questions and constraints
- Select accessibility validation tools after frontend stack decision.
- No current automated test or CI setup is present.

## Source plan references
- [mvp-planning.md](../../plans/mvp-planning.md)
- [feature-fr-04-preferences-restrictions.md](../../plans/feature-fr-04-preferences-restrictions.md)
- [feature-fr-10-supermarket-comparison.md](../../plans/feature-fr-10-supermarket-comparison.md)
- [feature-fr-11-budget-status.md](../../plans/feature-fr-11-budget-status.md)
