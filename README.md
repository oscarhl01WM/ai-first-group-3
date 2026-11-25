# Munch CR

Munch CR helps plan weekly meals around a budget, household size, and preferences, with estimated Costa Rican supermarket prices. The current prototype accepts 1–7 days and breakfast, lunch and/or dinner (up to 21 meal occasions per week).

## Local frontend prototype

The prototype in [apps/web](apps/web) uses plain HTML, CSS and JavaScript without dependencies. This is a provisional implementation so the team can explore the experience while the React/Vite versus Vike/React/TypeScript decision remains open. It does not establish an API stack or implement scraping. All recipes, stores and prices are synthetic; see the [mock data contract](data/mock/README.md).

From the repository root, start any static HTTP server, for example with Python 3:

```sh
python3 -m http.server 8000
```

If Python 3 is unavailable, Ruby with WEBrick can be used instead: `ruby --disable-gems -run -e httpd . -p 8000`.

Open `http://localhost:8000/apps/web/`. Serve the repository root so the page can load the mock JSON files. The demo uses a fixed 18 November 2026 reference date to make freshness states reproducible. It keeps plan inputs only in the page session. The weekly schedule, whole-package purchase estimate, leftover display, and store calculations are frontend demonstrations, not the proposed production planning service. Data contracts and v1 JSON Schemas are documented in [data/mock](data/mock/README.md).

### Project documentation

- [Product context](docs/product-context.md): problem and journeys.
- [Scope and requirements](docs/scope.md): MVP boundaries and acceptance criteria.
- [Architecture](docs/architecture.md): component model and unresolved technology choices.
- [MVP planning](docs/plans/mvp-planning.md): approved phased implementation plan; unresolved product and technology choices remain explicit decision gates.
- [Codex project context](AGENTS.md): repository guidance and decisions requiring review.
