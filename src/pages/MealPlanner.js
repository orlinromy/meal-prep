import React, { useState, useEffect } from "react";
import { mealTypes } from "../data/mealOptions";
import { breakfast, lunchDinner, snack } from "../data/tempData";
import MealPlan from "../components/MealPlan/MealPlan";

const MealPlanner = (props) => {
  const [breakfastMenu, setBreakfastMenu] = useState([]);
  const [lunchDinnerMenu, setLunchDinnerMenu] = useState([]);
  const [snackMenu, setSnackMenu] = useState([]);
  const [nextLunchAPI, setNextLunchAPI] = useState({ none: "" });
  const [nextSnackAPI, setNextSnackAPI] = useState({ none: "" });
  const [isLoading, setIsLoading] = useState([true, true]);
  //   const [selectedMeal, setSelectedMeal] = useState({
  //     breakfast: [],
  //     lunch: [],
  //     dinner: [],
  //     snack: [],
  //     teatime: [],
  //   });

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
          return [...prevState, data]; // //TODO: uncomment ...data.hits
        });
      } else if (mealType === "lunch") {
        setLunchDinnerMenu((prevState) => {
          return [...prevState, data]; // //TODO: uncomment ...data.hits
        });
        setNextLunchAPI({
          [mealType]:
            // TODO: uncomment
            //    data._links.next.href,
            "https://api.giphy.com/v1/gifs/random?api_key=bbXcJTy50Cy0hU0D8zqlvvUCeYAjjynH",
        });
      } else if (mealType === "snack") {
        setSnackMenu((prevState) => {
          return [...prevState, data]; // //TODO: uncomment ...data.hits
        });
        setNextSnackAPI({
          [mealType]:
            //TODO: uncomment
            //   data._links.next.href,
            "https://api.giphy.com/v1/gifs/random?api_key=bbXcJTy50Cy0hU0D8zqlvvUCeYAjjynH",
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
        // url,
        "https://api.giphy.com/v1/gifs/random?api_key=bbXcJTy50Cy0hU0D8zqlvvUCeYAjjynH",
        mealType
      );
      console.log(url);
    }
  }, []);

  function renderPlan() {
    if (props.data.meal[0] === 3) {
      return (
        !isLoading[0] && (
          <MealPlan
            breakfastMenu={breakfast}
            lunchDinnerMenu={lunchDinner}
            snackMenu={snack}
            meals={props.data.meal[0]}
            days={props.data.days}
          />
        )
      );
    } else if (props.data.meal[0] === 5) {
      return (
        isLoading.every((loading) => !loading) && (
          <MealPlan
            breakfastMenu={breakfast}
            lunchDinnerMenu={lunchDinner}
            snackMenu={snack}
            meals={props.data.meal[0]}
            days={props.data.days}
          />
        )
      );
    }
    // planComponent();
    return;
  }

  return <div>{renderPlan()}</div>;
};

export default MealPlanner;
