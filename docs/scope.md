# Munch CR — Requirements & Planning

## Observable MVP objective

A user can enter a budget, number of people, and preferences; receive a plan of 3–5 meals; see ingredients and estimated prices; and receive a shopping recommendation that stays within the budget or explains how to adjust it.

## MVP scope

| Included | Out of scope |
|---|---|
| Costa Rica | Delivery |
| 2–3 supermarkets | Direct purchasing from the application |
| Lunch and dinner | Complex login |
| 3–5 recipes | Advanced user personalization |
| Budget in Costa Rican colones | All supermarkets in Costa Rica |
| Number of people | Guaranteed real-time prices |
| Simple preferences/restrictions | Real-time inventory |
| Shopping list | Detailed nutrition/calorie information |
| Estimated price | Social/community system |
| Basic supermarket comparison | |
| Substitutions when the budget is exceeded | |

## Functional requirements

| ID | Requirement |
|---|---|
| FR-01 | The user can enter a budget. |
| FR-02 | The user can specify the number of people. |
| FR-03 | The user can select the number of meals. |
| FR-04 | The user can specify preferences/restrictions. |
| FR-05 | The system generates 3–5 recipes. |
| FR-06 | Each recipe displays ingredients and quantities. |
| FR-07 | The system generates a consolidated shopping list. |
| FR-08 | The shopping list displays prices obtained through web scraping. |
| FR-09 | The system calculates the total cost. |
| FR-10 | The system compares 2–3 supermarkets. |
| FR-11 | The system identifies whether the result is within budget. |
| FR-12 | If the budget is exceeded, the system proposes substitutions. |

## Main flow

Home → Set Budget & Preferences (# of Meals) → Generate Meal Plan → Review Recipes → Shopping List → Supermarket Comparison → Budget Check → Suggestions / Substitutions

## Acceptance criteria

### Budget

**Given** a user enters ₡25,000, **when** they generate a meal plan, **then** the application calculates the estimated total and compares it against ₡25,000.

### Meal plan

**Given** the user requests 5 meals, **then** the application returns a plan containing 3–5 realistic recipes.

### Shopping list

**Given** the generated recipes, **then** ingredients are consolidated so the user does not see duplicate shopping items.

### Budget optimization

**Given** the estimated total exceeds the budget, **then** the application provides at least one adjustment or suggestion.

## Open questions for planning

- The definition uses “number of meals,” lunch and dinner, 3–5 recipes, and an example requesting five meals. Their exact relationship is not specified; confirm it before treating the meal count as a precise acceptance test.
- “Realistic recipes” is not given a measurable definition.
- Appliance availability appears in the problem description, but is not included in the objective, MVP list, or functional requirements. Its status is unresolved.
- The objective says optimize the shopping list to stay within budget; the specified requirement when over budget is to offer substitutions. The optimization method and expected result are not defined.
