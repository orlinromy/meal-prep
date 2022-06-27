// import data from "./tempData";

import data from "./tempData";

function fetchData() {
  // TODO: implement data fetch using API
  return;
}

function planGenerator(date) {
  // state: # of days, # of meals, allergy + health (cos it's both from health), diet type
  // TODO: comment when you have used state here
  const numOfDays = 3;
  const meals = ["breakfast", "lunch", "dinner"];
  const allergy = ["none"];
  const health = ["none"];
  const dietType = ["none"];
  const plan = {};

  for (let i = 0; i < numOfDays; i++) {
    const key = "day" + 1;
    for (const meal in meals) {
    }
  }

  return plan;
}

export default planGenerator;
