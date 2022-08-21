import React, { useState, useEffect, useRef } from "react";
import { mealTypes, meals } from "../data/mealOptions";
import { useNavigate } from "react-router-dom";
import MealPlan from "../components/MealPlan/MealPlan";
import RecipeContainer from "../components/Recipe/RecipeContainer";
import MealPlanNavBar from "../components/MealPlanNavBar/MealPlanNavBar";
import LoadingOverlay from "../components/MealPlan/LoadingOverlay";

const MealPlanner = (props) => {
  // console.log(props.data);
  const [breakfastMenu, setBreakfastMenu] = useState([]);
  const [lunchDinnerMenu, setLunchDinnerMenu] = useState([]);
  const [snackMenu, setSnackMenu] = useState([]);
  const [nextLunchAPI, setNextLunchAPI] = useState({ none: "" });
  const [nextSnackAPI, setNextSnackAPI] = useState({ none: "" });
  const [isLoading, setIsLoading] = useState([true, true]);
  let navigate = useNavigate();
  const fetchControllerRef = useRef(null);

  const [recipeData, setRecipeData] = useState(null);

  function buildURL(data, mealType) {
    let url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&q=`;
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
      const res = await fetch(url, {
        signal: fetchControllerRef.current.signal,
      });
      const data = await res.json();
      if (data.count === 0) {
        navigate("/error");
      }
      if (mealType === "breakfast") {
        setBreakfastMenu((prevState) => {
          return [...prevState, ...data.hits];
        });
      } else if (mealType === "lunch") {
        setLunchDinnerMenu((prevState) => {
          return [...prevState, ...data.hits];
        });
        if (data.count > 20) {
          setNextLunchAPI({
            [mealType]: data._links.next.href,
          });
        }
      } else if (mealType === "snack") {
        setSnackMenu((prevState) => {
          return [...prevState, ...data.hits];
        });
        if (data.count > 20) {
          setNextSnackAPI({
            [mealType]: data._links.next.href,
          });
        }
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
      } else {
        setIsLoading((prevState) => {
          return [prevState[0], false];
        });
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
      } else {
        setIsLoading((prevState) => {
          return [prevState[0], false];
        });
      }
    }
  }, [Object.keys(nextSnackAPI)[0]]);

  useEffect(() => {
    if (props.data === undefined) {
      navigate("/create");
    } else {
      fetchControllerRef.current = new AbortController();
      for (const mealType of mealTypes[props.data.meal[0]]) {
        const url = buildURL(props.data, mealType);

        fetchData(url, mealType);
      }
    }
    return () => fetchControllerRef.current.abort();
  }, []);

  function renderPlan() {
    if (props.data === undefined) {
      return;
    } else if (props.data.meal[0] === 3) {
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
