import React, { useState, useEffect } from "react";
import { mealTypes, meals } from "../data/mealOptions";
// import { breakfast, lunchDinner, snack } from "../data/tempData";
import MealPlan from "../components/MealPlan/MealPlan";
import RecipeContainer from "../components/Recipe/RecipeContainer";
import MealPlanNavBar from "../components/MealPlanNavBar/MealPlanNavBar";
import LoadingOverlay from "../components/MealPlan/LoadingOverlay";

const MealPlanner = (props) => {
  const [breakfastMenu, setBreakfastMenu] = useState([]);
  const [lunchDinnerMenu, setLunchDinnerMenu] = useState([]);
  const [snackMenu, setSnackMenu] = useState([]);
  const [nextLunchAPI, setNextLunchAPI] = useState({ none: "" });
  const [nextSnackAPI, setNextSnackAPI] = useState({ none: "" });
  const [isLoading, setIsLoading] = useState([true, true]);

  const [recipeData, setRecipeData] = useState(null);

  function buildURL(data, mealType) {
    let url =
      "https://api.edamam.com/api/recipes/v2?type=public&app_id=1113102e&app_key=6805b5e32fdadfd679fd7b5e5ff2e600&q=";
    for (const type of data.diet) {
      if (type === "none") {
        url = url + "&diet=balanced";
      } else {
        url = url + "&diet=" + type;
      }
    }
    for (const type of data.allergy) {
      if (type !== "none") {
        url = url + "&health=" + type;
      }
    }
    for (const type of data.health) {
      if (type !== "none") {
        url = url + "&health=" + type;
      }
    }
    url = url + "&mealType=" + mealType;
    return url;
  }

  async function fetchData(url, mealType, callback) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (mealType === "breakfast") {
        setBreakfastMenu((prevState) => {
          return [...prevState, ...data.hits]; // //TODO: uncomment ...data.hits
        });
      } else if (mealType === "lunch") {
        setLunchDinnerMenu((prevState) => {
          return [...prevState, ...data.hits]; // //TODO: uncomment ...data.hits
        });
        setNextLunchAPI({
          [mealType]:
            // TODO: uncomment
            data._links.next.href,
          // "https://api.giphy.com/v1/gifs/random?api_key=bbXcJTy50Cy0hU0D8zqlvvUCeYAjjynH",
        });
      } else if (mealType === "snack") {
        setSnackMenu((prevState) => {
          return [...prevState, ...data.hits]; // //TODO: uncomment ...data.hits
        });
        setNextSnackAPI({
          [mealType]:
            //TODO: uncomment
            data._links.next.href,
          // "https://api.giphy.com/v1/gifs/random?api_key=bbXcJTy50Cy0hU0D8zqlvvUCeYAjjynH",
        });
      }
    } catch (err) {
      console.log(err.message);
    }
    callback && callback();
  }

  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      if (Object.keys(nextLunchAPI)[0] !== "none") {
        fetchData(
          nextLunchAPI[Object.keys(nextLunchAPI)[0]],
          Object.keys(nextLunchAPI)[0],
          () => {
            if (i === 1) {
              setIsLoading((prevState) => {
                return [false, prevState[1]];
              });
            }
          }
        );
      }
    }
  }, [Object.keys(nextLunchAPI)[0]]);

  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      if (Object.keys(nextSnackAPI)[0] !== "none") {
        fetchData(
          nextSnackAPI[Object.keys(nextSnackAPI)[0]],
          Object.keys(nextSnackAPI)[0],
          () => {
            if (i === 1) {
              setIsLoading((prevState) => {
                return [prevState[0], false];
              });
            }
          }
        );
      }
    }
  }, [Object.keys(nextSnackAPI)[0]]);

  useEffect(() => {
    for (const mealType of mealTypes[props.data.meal[0]]) {
      const url = buildURL(props.data, mealType);

      fetchData(
        //TODO: uncomment
        url,
        // "https://apito.giphy.com/v1/gifs/random?api_key=bbXcJTy50Cy0hU0D8zqlvvUCeYAjjynH",
        mealType
      );
      console.log(url);
    }
  }, []);

  function renderPlan() {
    if (props.data.meal[0] === 3) {
      return !isLoading[0] ? (
        <>
          <MealPlanNavBar
            days={props.data.days}
            meals={meals[props.data.meal[0]]}
          ></MealPlanNavBar>
          <MealPlan
            breakfastMenu={breakfastMenu}
            lunchDinnerMenu={lunchDinnerMenu}
            snackMenu={snackMenu}
            meals={meals[props.data.meal[0]]}
            days={props.data.days}
            doubleClicked={setRecipeData}
          />
          <RecipeContainer recipeToShow={recipeData} />
        </>
      ) : (
        <LoadingOverlay />
      );
    } else if (props.data.meal[0] === 5) {
      return isLoading.every((loading) => !loading) ? (
        <>
          <MealPlanNavBar
            days={props.data.days}
            meals={meals[props.data.meal[0]]}
          ></MealPlanNavBar>
          <MealPlan
            breakfastMenu={breakfastMenu}
            lunchDinnerMenu={lunchDinnerMenu}
            snackMenu={snackMenu}
            meals={meals[props.data.meal[0]]}
            days={props.data.days}
            doubleClicked={setRecipeData}
          />
          <RecipeContainer recipeToShow={recipeData} />
        </>
      ) : (
        <LoadingOverlay />
      );
    }
    return;
  }

  return <div className="flex flex-row justify-around">{renderPlan()}</div>;
};

export default MealPlanner;

// <div className="drop-shadow-xl grid place-items-center content-center w-5/12 h-5/12 rounded-2xl bg-white">
//           <img src={mixer} className="w-5/12 h-5/12"></img>
//         </div>
