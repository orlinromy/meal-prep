# Prep-a-meal (WIP)

## Description

A meal planner app, built based on Edamam API, in which user can get a list of recipe based on their diet and health.

### Technical Used

- React
- react-router-dom
- react-beautiful-dnd
- Material UI
- Tailwind CSS

### Wireframes

Component Tree:
![component tree](component-tree.jpeg)

### User Stories

- User should be able to create a plan by filling in a form, and get their meal plan based on the number of days in the week they want to plan (min. 1 day, max. 7 days), how many meals they want to have in a day (breakfast-lunch-dinner or breakfast-lunch-dinner-snack-teatime), diet (e.g. balanced, low-fat), and health/allergy (e.g. egg-free, DASH, etc)
- User should be able to easily click on the available options in the form. As there is "none" option for diet and health, when user click "none", any other options that they choose should be unselected
- User should be able to rearrange their meal plan by dragging and dropping the meal cards in the Meal Planner page
- User should be able to view the ingredients, recipe, and nutritional value by double-clicking the meal card
- User should be able to read the list of groceries for their meals in the week
- User should be able to see whether they can find the ingredient in their favorite supermarket
- User should be able to quickly navigate through the plan using the Navigation bar in the Meal Planner page

---

## Planning and Development Process

A basic story of your planning and developing this project.

### Problem-Solving Strategy

### Unsolved problems

1. Groceries
   a. Use other platform's API so that the user can check if the item is available or cheaper elsewhere
   b. Groceries need to be categorized so that `egg` and `egg yolk` shouldn't appear at the same time
   c. Increase accuracy of the search result after getting data from the API by evaluating the search result and implement additional logic
   d. Add groceries quantity based on the recipe

2. Error pages are not implemented yet

3. Add favorite recipe and plan. Also, save the current generated plan to local storage to avoid app crash

## APIs Used

For this project, I am using [Edamam API](https://developer.edamam.com/edamam-docs-recipe-api) to get the recipes as well as the nutritional value for each recipe. As this application is targeted for people who would like to have a certain diet, Edamam API would be a good choice for this application because of its extensive diet and health label as well as the nutritional value analysis.

API from a supermarket in Singapore is used to retrieve groceries data, whether or not the item can be found in the supermarket

## Acknowledgments

## References

- [Wanderlog](https://wanderlog.com/) for the planner design
- [Meal icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/meal)
- [Mixer animated icons created by Freepik - Flaticon](https://www.flaticon.com/free-animated-icons/mixer)
- [Salad icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/salad)
- [English breakfast icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/english-breakfast)
- [Dinner icons created by Eucalyp - Flaticon](https://www.flaticon.com/free-icons/dinner)
- [Whey icons created by Konkapp - Flaticon](https://www.flaticon.com/free-icons/whey)
- [Fiber icons created by Flat Icons - Flaticon](https://www.flaticon.com/free-icons/fiber)
- [No fat icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/no-fat)
- [Carbs icons created by surang - Flaticon](https://www.flaticon.com/free-icons/carbs)
- [Salt free icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/salt-free)
- [Forbidden icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/forbidden)
- [Cooking animated icons created by Freepik - Flaticon](https://www.flaticon.com/free-animated-icons/cooking)
- [How to Add Drag and Drop in React with React Beautiful DnD](https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/#step-3-saving-list-order-after-reordering-items-with-react-beautiful-dnd)
