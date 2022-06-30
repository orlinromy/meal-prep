import React from "react";
import { NavLink } from "react-router-dom";
import NutritionTable from "./NutritionTable";

const RecipeContainer = (props) => {
  return props.recipeToShow ? (
    <div style={{ width: "40%", maxHeight: "90vh" }}>
      <h2>{props.recipeToShow.recipe.label}</h2>
      <p>
        {props.recipeToShow.recipe.yield}{" "}
        {props.recipeToShow.recipe.yield > 1 ? "servings" : "serving"} |{" "}
        {Math.floor(props.recipeToShow.recipe.calories)} calories
      </p>
      <a href={props.recipeToShow.recipe.url} target="_blank">
        <button>Click here to get the full recipe</button>
      </a>
      <ul>
        {props.recipeToShow.recipe.ingredientLines.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <NutritionTable nutrients={props.recipeToShow.recipe.digest} />
    </div>
  ) : (
    <div style={{ width: "40%", height: "99vh" }}>
      <p>Double-click on any meal to get the recipe</p>
    </div>
  );
};

export default RecipeContainer;
