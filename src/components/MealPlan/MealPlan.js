import React, { useState, useEffect } from "react";

const MealPlan = (props) => {
  const [selectedBreakfast, setSelectedBreakfast] = useState([]);
  const [selectedLunch, setSelectedLunch] = useState([]);
  const [selectedDinner, setSelectedDinner] = useState([]);
  const [selectedSnack, setSelectedSnack] = useState([]);
  const [selectedTeatime, setSelectedTeatime] = useState([]);

  useEffect(() => {
    console.log(props);

    if (props.meals === 3) {
      for (let i = 0; i < props.days; i++) {
        const breakfastIndex = Math.floor(
          Math.random() * props.breakfastMenu.length
        );
        const dinnerIndex = Math.floor(
          Math.random() * props.lunchDinnerMenu.length
        );
        setSelectedBreakfast((prevState) => [
          ...prevState,
          props.breakfastMenu[breakfastIndex],
        ]);
        setSelectedLunch((prevState) => [
          ...prevState,
          props.lunchDinnerMenu[breakfastIndex],
        ]);
        setSelectedDinner((prevState) => [
          ...prevState,
          props.lunchDinnerMenu[dinnerIndex],
        ]);
      }
    } else if (props.meals === 5) {
      console.log("run here");
      for (let i = 0; i < props.days; i++) {
        const breakfastIndex = Math.floor(
          Math.random() * props.breakfastMenu.length
        );
        const dinnerIndex = Math.floor(
          Math.random() * props.lunchDinnerMenu.length
        );
        const snackIndex = Math.floor(Math.random() * props.snackMenu.length);
        setSelectedBreakfast((prevState) => [
          ...prevState,
          props.breakfastMenu[breakfastIndex],
        ]);
        setSelectedLunch((prevState) => [
          ...prevState,
          props.lunchDinnerMenu[breakfastIndex],
        ]);
        setSelectedDinner((prevState) => [
          ...prevState,
          props.lunchDinnerMenu[dinnerIndex],
        ]);
        setSelectedSnack((prevState) => [
          ...prevState,
          props.snackMenu[snackIndex],
        ]);
        setSelectedTeatime((prevState) => [
          ...prevState,
          props.snackMenu[breakfastIndex],
        ]);
      }
    }
  }, []);
  return (
    <div>
      <h1>Breakfast: </h1>
      {selectedBreakfast.length !== 0 &&
        selectedBreakfast.map((breakfast) => <p>{breakfast.recipe.label}</p>)}
      <h1>Lunch: </h1>
      {selectedLunch.length !== 0 &&
        selectedLunch.map((lunch) => <p>{lunch.recipe.label}</p>)}
      <h1>Dinner: </h1>
      {selectedDinner.length !== 0 &&
        selectedDinner.map((dinner) => <p>{dinner.recipe.label}</p>)}
      <h1>Snack: </h1>
      {selectedSnack.length !== 0 &&
        selectedSnack.map((snack) => <p>{snack.recipe.label}</p>)}
      <h1>Teatime: </h1>
      {selectedTeatime.length !== 0 &&
        selectedTeatime.map((teatime) => <p>{teatime.recipe.label}</p>)}
    </div>
  );
};

export default MealPlan;
