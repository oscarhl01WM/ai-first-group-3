# Munch CR — Discovery & Research

## Objective

Create an application that takes a budget, number of people, number of meals, and preferences and generates a meal plan using estimated prices from supermarkets in Costa Rica. The shopping recommendation should be optimized to stay within budget.

## Target user

The primary user is a person in Costa Rica who wants to plan several meals with a limited budget and does not want to research recipes, ingredients, and prices across supermarkets manually.

## Problem

The current process described for planning meals is:

1. Think about what to cook.
2. Search for recipes.
3. Review the ingredients needed.
4. Search for prices.
5. Compare supermarkets.
6. Calculate whether the budget is enough.
7. Adjust recipes if the budget is exceeded.
8. Add the appliances available to the person.

The application aims to bring this process into a single flow.

## User journeys

| Current journey | Proposed journey |
|---|---|
| Budget → recipes → ingredients → prices → supermarkets → total → adjustments | Enter preferences → generate plan → review recipes → review shopping list → view supermarkets → adjust budget |

## Assumptions stated in the project definition

- Prices are estimates, not guarantees; they may vary by date, location, promotions, or availability.
- Prices are obtained through web scraping of supermarket websites.

The definition does not identify specific supermarkets or source URLs. No additional data source is assumed here.
