# Munch CR — Requirements & Planning

## Observable MVP objective

A user can enter a weekly budget, number of people, 1–7 planning days, and one or more meal types (breakfast, lunch, dinner); receive a weekly plan for every selected day/type occasion (up to 21); see ingredients and estimated prices; and receive a shopping recommendation that stays within budget or explains how to adjust it. Recipes may repeat when the selected number of occasions exceeds the reviewed catalog; repetition must be visible.

## MVP scope

| Included | Out of scope |
|---|---|
| Costa Rica | Delivery |
| 2–3 supermarkets | Direct purchasing from the application |
| Breakfast, lunch and dinner | Complex login |
| 1–7 days/week; choose one or more of up to three meal occasions/day | Advanced user personalization |
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
| FR-03 | The user can select 1–7 days per week and one or more meal types from breakfast, lunch and dinner; each selected type is planned on each selected day (maximum 21 occasions). |
| FR-04 | The user can specify preferences/restrictions. |
| FR-05 | The system assigns a recipe to each selected weekly occasion; repeated recipes are allowed when catalog coverage requires them and are shown clearly. |
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

**Given** a user enters ₡25,000 and selects days and meal types, **when** they generate a weekly plan, **then** the application calculates the full-package weekly checkout estimate and compares it against ₡25,000.

### Meal plan

**Given** the user selects 4 days and breakfast plus dinner, **then** the plan contains 8 meal occasions, with one recipe assigned to each occasion.

### Shopping list

**Given** the generated recipes, **then** ingredients are consolidated so the user does not see duplicate shopping items.

### Budget optimization

**Given** the estimated total exceeds the budget, **then** the application provides at least one adjustment or suggestion.

## Open questions for planning

- “Realistic recipes” is not given a measurable definition.
- Appliance availability appears in the problem description, but is not included in the objective, MVP list, or functional requirements. Its status is unresolved.
- The objective says optimize the shopping list to stay within budget; the specified requirement when over budget is to offer substitutions. The optimization method and expected result are not defined.
