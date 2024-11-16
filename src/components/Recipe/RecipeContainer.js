import React from 'react'
import NutritionTable from './NutritionTable'
import styles from '../../styles/RecipeContainer.module.css'

const RecipeContainer = (props) => {
  const { recipeToShow, source } = props

  const width = source ?? '' === 'drawer' ? '' : 'w-3/5'
  return recipeToShow ? (
    <div
      className={`pt-8 px-4 text-center ${styles.recipeCont} max-h-[91.7vh] overflow-y-auto ${width}`}
    >
      <img
        className="rounded-md mx-auto object-cover aspect-square w-11/12 max-w-xs"
        alt={recipeToShow.recipe.label}
        src={recipeToShow.recipe.images.REGULAR.url}
        loading="lazy"
      />
      <h2 className="text-4xl mt-4 mb-2">{recipeToShow.recipe.label}</h2>
      <p className="text-lg">
        {`${recipeToShow.recipe.yield} ${
          'serving' + (recipeToShow.recipe.yield > 1 ? 's' : '')
        } | ${Math.floor(recipeToShow.recipe.calories)} calories`}
      </p>
      <br />
      <a href={recipeToShow.recipe.url} target="_blank" rel="noreferrer">
        <button className="w-60 bg-[#659B91] text-white p-2.5 rounded-xl text-lg my-4 hover:bg-[#517c74]">
          Full Recipe
        </button>
      </a>

      <p className="text-lg text-left">Ingredients: </p>
      <ul className="list-disc pl-4 text-left">
        {recipeToShow.recipe.ingredientLines.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>

      <p className="text-lg text-left mt-4">Health Labels: </p>
      <p className="text-md text-left mb-4">
        {recipeToShow.recipe.healthLabels.join(', ')}
      </p>
      <p className="text-lg text-left mt-4 mb-2">Nutrition</p>
      <NutritionTable nutrients={recipeToShow.recipe.digest} />
    </div>
  ) : (
    <div
      className={`text-slate-400 text-2xl text-center align-middle my-auto ${width}`}
    >
      <p>Click on any meal to get the recipe</p>
    </div>
  )
}

export default RecipeContainer
