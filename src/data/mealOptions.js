import salads from "../assets/salads.png";
import breakfast from "../assets/english-breakfast.png";
import dinner from "../assets/dinner.png";
import protein from "../assets/protein.png";
import fiber from "../assets/fiber.png";
import lowFat from "../assets/low-fat.png";
import lowCarb from "../assets/low-carb.png";
import lowSodium from "../assets/salt-free.png";
import forbidden from "../assets/forbidden.png";

const diet = [
  {
    type: "None",
    image: forbidden,
  },
  {
    type: "Balanced",
    image: salads,
  },
  {
    type: "High-Fiber",
    image: fiber,
  },
  {
    type: "High-Protein",
    image: protein,
  },
  {
    type: "Low-Carb",
    image: lowCarb,
  },
  {
    type: "Low-Fat",
    image: lowFat,
  },
  {
    type: "Low-Sodium",
    image: lowSodium,
  },
];

const meal = [
  { type: "3 (Breakfast, Lunch, Dinner)", image: breakfast },
  { type: "5 (+ Snack and Teatime)", image: dinner },
];

const mealTypes = {
  3: ["breakfast", "lunch"],
  5: ["breakfast", "lunch", "snack"],
};

const meals = {
  3: ["breakfast", "lunch", "dinner"],
  5: ["breakfast", "lunch", "dinner", "snack", "teatime"],
};

const allergy = [
  { type: "none", image: "" },
  { type: "celery-free", image: "" },
  { type: "crustacean-free", image: "" },
  { type: "dairy-free", image: "" },
  { type: "egg-free", image: "" },
  { type: "fish-free", image: "" },
  { type: "fodmap-free", image: "" },
  { type: "gluten-free", image: "" },
  { type: "peanut-free", image: "" },
  { type: "lupine-free", image: "" },
  { type: "mollusk-free", image: "" },
  { type: "pork-free", image: "" },
  { type: "red-meat-free", image: "" },
  { type: "sesame-free", image: "" },
  { type: "shellfish-free", image: "" },
  { type: "soy-free", image: "" },
  { type: "mustard-free", image: "" },
  { type: "sulfite-free", image: "" },
  { type: "wheat-free", image: "" },
  { type: "tree-nut-free", image: "" },
];

const health = [
  { type: "none", image: "" },
  { type: "alcohol-cocktail", image: "" },
  { type: "alcohol-free", image: "" },
  { type: "DASH", image: "" },
  { type: "immuno-supportive", image: "" },
  { type: "keto-friendly", image: "" },
  { type: "kidney-friendly", image: "" },
  { type: "kosher", image: "" },
  { type: "low-potassium", image: "" },
  { type: "low-sugar", image: "" },
  { type: "Mediterranean", image: "" },
  { type: "no-oil-added", image: "" },
  { type: "paleo", image: "" },
  { type: "pescatarian", image: "" },
  { type: "sugar-conscious", image: "" },
  { type: "vegan", image: "" },
  { type: "vegetarian", image: "" },
];

const incaseneeded = [
  "_cont=CHcVQBtNNQphDmgVQntAEX4BYldtBAUGS2BABWUUZ1xzBgADUXlSUGtFZFV7BwAPEjZGATdAagEiBQFVFWVHCzBCZgd1DAAVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D",
  "_cont=CHcVQBtNNQphDmgVQntAEX4BY0t3AgIDSmxJCmsaalx6DQoORHdcETESNgQmBAIGR2ARAmcWMFRyUVIGSzMRAWNBY1F3BgUAUQhcETRRPAhhDgUHX3cDUjRGEAQvW0FeFiYiUjxENkd5T05K",
  "_cont=CHcVQBtNNQphDmgVQntAEX4BY0t3AgIDSmxJCmsaalx6DQoORHdcETESNgQmBAIGR2ARAmcWMFRyUVIGSzMRAWNBY1F3BgUAUQhcETRRPAhhDgcHX3cDUjRGEAQvW0FeFiYiUjxENkd5T05K",
];

export { diet, meal, allergy, health, mealTypes, meals };
