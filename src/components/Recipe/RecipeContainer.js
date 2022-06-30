import React from "react";
import { NavLink } from "react-router-dom";
import NutritionTable from "./NutritionTable";

const RecipeContainer = (props) => {
  return props.recipeToShow ? (
    <div
      style={{ width: "40%", maxHeight: "96vh", overflowY: "scroll" }}
      className="pt-8 text-center"
    >
      <img
        className="rounded-full"
        src={props.recipeToShow.recipe.images.REGULAR.url}
        style={{
          width: `${props.recipeToShow.recipe.images.REGULAR.width}`,
          height: `${props.recipeToShow.recipe.images.REGULAR.height}`,
        }}
      ></img>
      <h2 className="text-4xl">{props.recipeToShow.recipe.label}</h2>
      <p className="text-lg">
        {props.recipeToShow.recipe.yield}{" "}
        {props.recipeToShow.recipe.yield > 1 ? "servings" : "serving"} |{" "}
        {Math.floor(props.recipeToShow.recipe.calories)} calories
      </p>
      <br />
      <p className="text-lg text-left">Ingredients: </p>
      <ul className="list-disc pl-4 text-left">
        {props.recipeToShow.recipe.ingredientLines.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <a href={props.recipeToShow.recipe.url} target="_blank">
        <button className="w-60 bg-[#659B91] text-white p-2.5 rounded-xl text-lg my-4 hover:bg-[#517c74]">
          Full Recipe
        </button>
      </a>
      <NutritionTable nutrients={props.recipeToShow.recipe.digest} />
    </div>
  ) : (
    <div className="text-slate-400 text-2xl text-center align-middle my-auto">
      <p>Double-click on any meal to get the recipe</p>
    </div>
  );
};

export default RecipeContainer;
