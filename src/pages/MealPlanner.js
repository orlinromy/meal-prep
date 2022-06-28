import React, { useState, useEffect } from "react";
import { mealTypes } from "../data/mealOptions";
import { breakfast, lunchDinner, snack } from "../data/tempData";

const MealPlanner = (props) => {
  const [breakfastMenu, setBreakfastMenu] = useState([]);
  const [lunchDinnerMenu, setLunchDinnerMenu] = useState([]);
  const [snackMenu, setSnackMenu] = useState([]);
  const [nextLunchAPI, setNextLunchAPI] = useState({ none: "" });
  const [nextSnackAPI, setNextSnackAPI] = useState({ none: "" });

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

  async function fetchData(url, mealType) {
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
  }

  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      if (Object.keys(nextLunchAPI)[0] !== "none") {
        fetchData(
          nextLunchAPI[Object.keys(nextLunchAPI)[0]],
          Object.keys(nextLunchAPI)[0]
        );
      }
    }
  }, [Object.keys(nextLunchAPI)[0]]);

  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      if (Object.keys(nextSnackAPI)[0] !== "none") {
        fetchData(
          nextSnackAPI[Object.keys(nextSnackAPI)[0]],
          Object.keys(nextSnackAPI)[0]
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
    }
  }, []);

  return (
    <div>
      <p>
        breakfast menu: length: {breakfastMenu.length}{" "}
        {JSON.stringify(breakfastMenu)}
      </p>
      <p>
        lunch/dinner menu: length: {lunchDinnerMenu.length}{" "}
        {JSON.stringify(lunchDinnerMenu)}
      </p>
      <p>
        snack menu: length: {snackMenu.length} {JSON.stringify(snackMenu)}
      </p>
    </div>
  );
};

export default MealPlanner;
