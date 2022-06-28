import salads from "../assets/salads.png";
const diet = [
  {
    type: "None",
    image: salads,
  },
  {
    type: "Balanced",
    image: salads,
  },
  {
    type: "High-Fiber",
    image: salads,
  },
  {
    type: "High-Protein",
    image: salads,
  },
  {
    type: "Low-Carb",
    image: salads,
  },
  {
    type: "Low-Fat",
    image: salads,
  },
  {
    type: "Low-Sodium",
    image: salads,
  },
];

const meal = [
  { type: "3", image: salads },
  { type: "5", image: salads },
];

const mealTypes = {
  3: ["breakfast", "lunch"],
  5: ["breakfast", "lunch", "snack"],
};

const allergy = [
  { type: "none", image: salads },
  { type: "celery-free", image: salads },
  { type: "crustacean-free", image: salads },
  { type: "dairy-free", image: salads },
  { type: "egg-free", image: salads },
  { type: "fish-free", image: salads },
  { type: "fodmap-free", image: salads },
  { type: "gluten-free", image: salads },
  { type: "peanut-free", image: salads },
  { type: "lupine-free", image: salads },
  { type: "mollusk-free", image: salads },
  { type: "pork-free", image: salads },
  { type: "red-meat-free", image: salads },
  { type: "sesame-free", image: salads },
  { type: "shellfish-free", image: salads },
  { type: "soy-free", image: salads },
  { type: "mustard-free", image: salads },
  { type: "sulfite-free", image: salads },
  { type: "wheat-free", image: salads },
  { type: "tree-nut-free", image: salads },
];

const health = [
  { type: "none", image: salads },
  { type: "alcohol-cocktail", image: salads },
  { type: "alcohol-free", image: salads },
  { type: "DASH", image: salads },
  { type: "immuno-supportive", image: salads },
  { type: "keto-friendly", image: salads },
  { type: "kidney-friendly", image: salads },
  { type: "kosher", image: salads },
  { type: "low-potassium", image: salads },
  { type: "low-sugar", image: salads },
  { type: "Mediterranean", image: salads },
  { type: "no-oil-added", image: salads },
  { type: "paleo", image: salads },
  { type: "pescatarian", image: salads },
  { type: "sugar-conscious", image: salads },
  { type: "vegan", image: salads },
  { type: "vegetarian", image: salads },
];

const incaseneeded = [
  "_cont=CHcVQBtNNQphDmgVQntAEX4BYldtBAUGS2BABWUUZ1xzBgADUXlSUGtFZFV7BwAPEjZGATdAagEiBQFVFWVHCzBCZgd1DAAVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D",
  "_cont=CHcVQBtNNQphDmgVQntAEX4BY0t3AgIDSmxJCmsaalx6DQoORHdcETESNgQmBAIGR2ARAmcWMFRyUVIGSzMRAWNBY1F3BgUAUQhcETRRPAhhDgUHX3cDUjRGEAQvW0FeFiYiUjxENkd5T05K",
  "_cont=CHcVQBtNNQphDmgVQntAEX4BY0t3AgIDSmxJCmsaalx6DQoORHdcETESNgQmBAIGR2ARAmcWMFRyUVIGSzMRAWNBY1F3BgUAUQhcETRRPAhhDgcHX3cDUjRGEAQvW0FeFiYiUjxENkd5T05K",
];

export { diet, meal, allergy, health, mealTypes };
