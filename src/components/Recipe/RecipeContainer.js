import React from "react";
import NutritionTable from "./NutritionTable";
import styles from "../../styles/RecipeContainer.module.css";

const RecipeContainer = (props) => {
  return props.recipeToShow ? (
    <div
      style={{ width: "40%", maxHeight: "96vh", overflowY: "scroll" }}
      className={`pt-8 pr-4 text-center ${styles.recipeCont}`}
    >
      <img
        className="rounded-md mx-auto"
        alt={props.recipeToShow.recipe.label}
        src={props.recipeToShow.recipe.images.REGULAR.url}
        style={{
          width: `${props.recipeToShow.recipe.images.REGULAR.width}`,
          height: `${props.recipeToShow.recipe.images.REGULAR.height}`,
        }}
      ></img>
      <h2 className="text-4xl mt-4 mb-2">{props.recipeToShow.recipe.label}</h2>
      <p className="text-lg">
        {props.recipeToShow.recipe.yield}{" "}
        {props.recipeToShow.recipe.yield > 1 ? "servings" : "serving"} |{" "}
        {Math.floor(props.recipeToShow.recipe.calories)} calories
      </p>
      <br />
      <a href={props.recipeToShow.recipe.url} target="_blank" rel="noreferrer">
        <button className="w-60 bg-[#659B91] text-white p-2.5 rounded-xl text-lg my-4 hover:bg-[#517c74]">
          Full Recipe
        </button>
      </a>

      <p className="text-lg text-left">Ingredients: </p>
      <ul className="list-disc pl-4 text-left">
        {props.recipeToShow.recipe.ingredientLines.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>

      <p className="text-lg text-left mt-4">Health Labels: </p>
      <p className="text-md text-left mb-4">
        {props.recipeToShow.recipe.healthLabels.join(", ")}
      </p>
      <p className="text-lg text-left mt-4 mb-2">Nutrition</p>
      <NutritionTable nutrients={props.recipeToShow.recipe.digest} />
    </div>
  ) : (
    <div className="text-slate-400 text-2xl text-center align-middle my-auto">
      <p>Click on any meal to get the recipe</p>
    </div>
  );
};

export default RecipeContainer;
