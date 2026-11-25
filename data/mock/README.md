# Munch CR mock data contract — v1

This contract defines the JSON shape the frontend consumes. The included names, stores, products, recipes and prices are synthetic fixtures, not scraped results or reviewed culinary guidance. A production import must only publish records with approved source rights and review state.

## Files and boundaries

- `recipes.json` is the versioned recipe catalog. A recipe version stores servings, prep time, meal suitability, dietary tags, appliances, ingredient quantities and ordered instructions.
- `products.json` is the versioned supermarket catalog. It separates retailer (`stores`), location (`branches`), source identity, store/branch-specific product/package facts and append-only timestamped price observations. It also owns the canonical ingredient dictionary used to join products and recipe ingredients. A comparison total is always for one branch; never assemble one basket from multiple branches of the same chain.
- `recipes.schema.json` and `products.schema.json` are strict JSON Schema Draft 2020-12 validators for v1. Validate incoming files against the matching schema before handing them to the frontend/API.

JSON is the frontend/API exchange format because recipe ingredients and steps are nested. A scraper may use CSV as its import/export format, then validate and normalize into this JSON/API contract. Do not make the frontend consume a scraper's raw columns or HTML shape directly.

## Shared rules

- IDs are stable opaque strings; references use IDs, never display names. IDs are unique within their entity type.
- Both documents carry `schemaVersion` (integer). Increment it for incompatible changes; clients reject unknown versions rather than guessing.
- Use decimal numeric quantities, never localized strings. Recipe and product units must match when estimating. V1 units are `g`, `ml`, and `count`; convert kg→g and L→ml during ingestion. Do not convert between mass, volume, and count without a reviewed ingredient-specific conversion.
- Prices are integer Costa Rican colones (`CRC`) in v1; no currency symbols or thousands separators in data. `capturedAt` is ISO-8601 UTC.
- `isSynthetic: true`, `reviewStatus: "mock"`, and the fixed `fixtureAsOf` date identify demo-only records. Production uses an approved review status and real provenance. A production observation can be eligible for estimates only after both its source observation and product-to-ingredient mapping pass review; mock fixtures are explicitly exempt so the demo can calculate.
- Null means unknown or not applicable; zero is a real numeric value and must not stand in for missing data. `ingredientId: null` is allowed only while `ingredientMatchStatus` is `unmatched` or `pending`; such a product cannot be used in an estimate.

## `recipes.json`

Top level: `{ schemaVersion, catalogId, isSynthetic, recipes[] }`.

Each recipe has:

| Field | Meaning |
|---|---|
| `id` | Stable recipe identity across edits. |
| `versionId` | Immutable version identity; generated plans should reference this. |
| `name`, `description` | User-facing Spanish text. |
| `baseServings` | Positive integer that ingredient quantities serve. |
| `minutes` | Non-negative preparation estimate. |
| `mealTypes` | Non-empty subset of `breakfast`, `lunch`, `dinner`; the same recipe can fit more than one occasion. |
| `dietaryTags` | Explicit verified tags from the controlled list; v1 includes `vegetarian`, `vegan`. Empty means no supported tag is claimed, not automatically “safe for every restriction.” |
| `appliances` | Required equipment IDs, e.g. `stovetop`, `oven`; empty if none are required. |
| `reviewStatus` | `draft`, `approved`, `rejected`, or fixture-only `mock`. Only approved production versions enter planning. |
| `ingredients[]` | `{ ingredientId, quantity: { amount, unit } }`; amount is required for `baseServings`. |
| `instructions[]` | Ordered `{ step, text }` records; step numbers start at 1 with no duplicates. |

Example:

```json
{
  "schemaVersion": 1,
  "catalogId": "munch-cr-recipes",
  "recipes": [{
    "id": "rice-and-beans",
    "versionId": "rice-and-beans-v1",
    "name": "Arroz con frijoles",
    "description": "Ejemplo de receta.",
    "baseServings": 2,
    "minutes": 30,
    "mealTypes": ["lunch", "dinner"],
    "dietaryTags": ["vegan", "vegetarian"],
    "appliances": ["stovetop"],
    "reviewStatus": "approved",
    "ingredients": [
      {"ingredientId": "rice", "quantity": {"amount": 200, "unit": "g"}},
      {"ingredientId": "beans", "quantity": {"amount": 150, "unit": "g"}}
    ],
    "instructions": [{"step": 1, "text": "Cocinar los ingredientes."}]
  }]
}
```

## `products.json`

Top level: `{ schemaVersion, catalogId, currency, isSynthetic, fixtureAsOf, ingredients[], sources[], stores[], branches[], products[], priceObservations[] }`.

- `ingredients[]`: canonical `{ id, name, canonicalUnit }` dictionary. `canonicalUnit` is `g`, `ml`, or `count`.
- `sources[]`: `{ id, name, kind, baseUrl }`; `kind` identifies an approved adapter/manual source. A source is registered only after its use is reviewed.
- `stores[]`: retailer `{ id, name }`.
- `branches[]`: location `{ id, storeId, name, region }`. A product and price observation identify a branch. Null is allowed only for truly store-wide pricing; branch-specific observations must not be mixed in a comparison.
- `products[]`: a store/branch-specific sellable item: `{ id, storeId, branchId, sourceId, externalId, name, ingredientId, ingredientMatchStatus, package: { amount, unit }, sourceUrl, isSynthetic }`. Keep the source's product name and its external ID. `ingredientId` is the normalized mapping, not a replacement for the source identity; it is null until a mapping is made. Review uncertain mappings before making them estimate-eligible.
- `priceObservations[]`: an append-only observation: `{ id, productId, sourceId, branchId, capturedAt, currency, priceCrc, promotion, sourceUrl, captureMethod, reviewStatus, eligibleForEstimate, isSynthetic }`. `branchId` must match the product's location. Never overwrite older observations. `promotion` is null or `{ priceCrc, startsAt, endsAt, conditions }`; keep the regular observed price in `priceCrc` and apply promotion eligibility explicitly.

Example product + price observation:

```json
{
  "product": {
    "id": "store-a-rice-1kg",
    "storeId": "store-a",
    "branchId": "store-a-branch-1",
    "sourceId": "store-a-web",
    "externalId": "retailer-product-123",
    "name": "Arroz 80% grano entero 1 kg",
    "ingredientId": "rice",
    "ingredientMatchStatus": "approved",
    "package": {"amount": 1000, "unit": "g"},
    "sourceUrl": "https://example.invalid/product/123",
    "isSynthetic": false
  },
  "priceObservation": {
    "id": "price-observation-123",
    "productId": "store-a-rice-1kg",
    "sourceId": "store-a-web",
    "branchId": "store-a-branch-1",
    "capturedAt": "2026-11-18T16:00:00Z",
    "currency": "CRC",
    "priceCrc": 1450,
    "promotion": null,
    "sourceUrl": "https://example.invalid/product/123",
    "captureMethod": "approved_web_adapter",
    "reviewStatus": "approved",
    "eligibleForEstimate": true,
    "isSynthetic": false
  }
}
```

The example domain is reserved and is only illustrating the field shape; it is not a real source.

## Weekly plan and package-size rule

The UI accepts `daysPerWeek` from 1–7, `mealTypes[]` containing one or more of breakfast/lunch/dinner, household `people`, and one weekly CRC budget. Number of planned occasions is `daysPerWeek × mealTypes.length` (at most 21). Generate an occasion for every selected meal type on every selected day. Recipe ingredients scale by `people / baseServings`; then consolidate each ingredient across the entire week before package rounding.

For each store branch and ingredient, select a compatible eligible product price and calculate whole packages as `ceil(requiredAmount / packageAmount)`. The checkout line is `packageCount × packagePrice`. Also return `purchasedAmount` and `leftoverAmount = purchasedAmount - requiredAmount`. Compare the weekly budget to the full checkout total, not a prorated consumed-ingredient cost. Show leftover visibly: the family paid for it and may carry it into a later week. V1 assumes no existing pantry stock and does not subtract any credit for it. If pantry inventory is added later, it needs an explicit user-entered amount and a separate stock-adjusted estimate.

For the rice example: 200 g needed, 1,000 g minimum package, CRC 1,450 per package ⇒ buy 1 package, charge CRC 1,450, show 800 g leftover. If the weekly plan uses 1,200 g, buy 2 packages, charge CRC 2,900, show 800 g leftover. Never report CRC 290 as the checkout cost for 200 g.

Do not rank stores missing any required compatible item. Mark their totals partial and the plan's budget status unknown if no complete store estimate exists. Stale observations may appear with an explicit stale label according to the agreed freshness policy; never call them current.

## CSV import columns for scraper handoff

JSON Schema validates object shape, but not uniqueness or cross-record references. The ingestion step must also verify unique IDs per entity; recipe ingredient IDs resolve in the product file; product store/source/branch/ingredient IDs exist; branch belongs to the stated store; product package unit equals the canonical ingredient unit; and each price observation's product/source/branch matches its referenced product. An ingredient mapping may be null only when unmatched/pending. Production `eligibleForEstimate: true` requires approved source and approved ingredient mapping.

CSV is a staging format for scraped observations, not the canonical recipe catalog. Recommended one-row-per-observation columns:

```text
observation_id,product_id,source_id,store_id,branch_id,external_product_id,product_name,ingredient_id,ingredient_match_status,package_amount,package_unit,currency,price_crc,promotion_price_crc,promotion_starts_at,promotion_ends_at,promotion_conditions,captured_at_utc,source_url,capture_method,review_status,eligible_for_estimate
```

If product identity/package data already exists, the importer can accept only product IDs and observation columns. V1 estimate math assumes fixed, purchasable packages (including count-based packages); defer loose/variable-weight items until their purchase increments and price basis are explicitly modeled. Validate positive package amount, supported unit, positive integer CRC price, timestamp, known store/source, duplicate observation IDs, and explicit ingredient mapping/review state. Preserve unmapped scraped products in a review queue; do not guess their ingredient ID.
