import React, { useEffect, useRef, useState } from "react";
import GroceryCard from "./GroceryCard";

const Groceries = (props) => {
  const groceriesRef = useRef([]);
  const [allGroceries, setAllGroceries] = useState([]);

  function gatherGroceries() {
    const arr = [];
    for (let i = 0; i < props.groceries.length; i++) {
      for (let j = 0; j < props.groceries[i].recipe.ingredients.length; j++) {
        arr.push(
          props.groceries[i].recipe.ingredients[j].food
            .toLowerCase()
            .replace(/-/g, " ")
        );
      }
    }
    arr.sort();
    arr.reverse();

    for (let i = 0; i < arr.length; i++) {
      if (
        groceriesRef.current.filter((grocery) => grocery.includes(arr[i]))
          .length === 0
      ) {
        groceriesRef.current.push(arr[i]);
      }
    }
    setAllGroceries(groceriesRef.current);
  }

  useEffect(() => {
    if (props.groceries.length > 0) {
      gatherGroceries();
    }
  }, [props.groceries]);

  return (
    <>
      <GroceryCard groceries={allGroceries} />
    </>
  );
};

export default Groceries;
