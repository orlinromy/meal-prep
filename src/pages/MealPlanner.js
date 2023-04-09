import React, { useState, useEffect, useRef } from "react";
import { mealTypes, meals } from "../data/mealOptions";
import { useNavigate } from "react-router-dom";
import MealPlan from "../components/MealPlan/MealPlan";
import RecipeContainer from "../components/Recipe/RecipeContainer";
import MealPlanNavBar from "../components/MealPlanNavBar/MealPlanNavBar";
import LoadingOverlay from "../components/MealPlan/LoadingOverlay";
import { useMediaQuery } from "@mui/material";

const MealPlanner = (props) => {
  const showFull = useMediaQuery("(min-width:600px)");
  const [breakfastMenu, setBreakfastMenu] = useState([]);
  const [lunchDinnerMenu, setLunchDinnerMenu] = useState([]);
  const [snackMenu, setSnackMenu] = useState([]);
  const [nextLunchAPI, setNextLunchAPI] = useState({ none: "" });
  const [nextSnackAPI, setNextSnackAPI] = useState({ none: "" });
  const [isLoading, setIsLoading] = useState([true, true]);
  let navigate = useNavigate();
  const fetchControllerRef = useRef(null);

  const [recipeData, setRecipeData] = useState(null);

  function buildQuery(query, type) {
    if (type === "none" && query !== "diet") {
      return;
    } else if (type === "none" && query === "diet") {
      type = "balanced";
    }

    return `&${query}=${type}`;
  }

  function buildURL(data, mealType) {
    let url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&q=`;
    return (
      url +
      data.diet.map((type) => buildQuery("diet", type)) +
      data.allergy.map((type) => buildQuery("health", type)) +
      data.health.map((type) => buildQuery("health", type)) +
      buildQuery("mealType", mealType)
    );
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
      console.error(err.message);
    }
    callback && callback();
  }

  useEffect(() => {
    // call the API 2x to get enough lunch data to randomize
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
    // call the API 2x to get enough snack data to randomize
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
    }

    if (
      (props.data.meal[0] === 3 && isLoading[0]) ||
      (props.data.meal[0] === 5 && isLoading.some((loading) => !loading))
    ) {
      return <LoadingOverlay />;
    }

    return (
      <>
        {showFull && (
          <MealPlanNavBar
            days={props.data.days}
            meals={meals[props.data.meal[0]]}
          />
        )}
        <MealPlan
          breakfastMenu={breakfastMenu}
          lunchDinnerMenu={lunchDinnerMenu}
          snackMenu={snackMenu}
          meals={meals[props.data.meal[0]]}
          days={props.data.days}
          doubleClicked={setRecipeData}
        />
        {showFull && <RecipeContainer recipeToShow={recipeData} />}
      </>
    );
  }

  return <div className="flex flex-row justify-around">{renderPlan()}</div>;
};

export default MealPlanner;
