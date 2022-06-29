import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import MealList from "./MealList";

const MealPlan = (props) => {
  const [plan, setPlan] = useState([]);

  useEffect(() => {
    if (plan.length === 0) {
      if (props.meals.length === 3) {
        for (let i = 0; i < props.days; i++) {
          const breakfastIndex = Math.floor(
            Math.random() * props.breakfastMenu.length
          );
          const dinnerIndex = Math.floor(
            Math.random() * props.lunchDinnerMenu.length
          );
          setPlan((prevState) => [
            ...prevState,
            props.breakfastMenu[breakfastIndex],
            props.lunchDinnerMenu[breakfastIndex],
            props.lunchDinnerMenu[dinnerIndex],
          ]);
        }
      } else if (props.meals.length === 5) {
        console.log("run here");
        for (let i = 0; i < props.days; i++) {
          const breakfastIndex = Math.floor(
            Math.random() * props.breakfastMenu.length
          );
          const dinnerIndex = Math.floor(
            Math.random() * props.lunchDinnerMenu.length
          );
          const snackIndex = Math.floor(Math.random() * props.snackMenu.length);
          setPlan((prevState) => [
            ...prevState,
            props.breakfastMenu[breakfastIndex],
            props.lunchDinnerMenu[breakfastIndex],
            props.lunchDinnerMenu[dinnerIndex],
            props.snackMenu[snackIndex],
            props.snackMenu[breakfastIndex],
          ]);
        }
      }
    }
  }, []);

  function handleDragEnd(e) {
    const items = [...plan];
    const [reorderedItem] = items.splice(e.source.index, 1);
    items.splice(e.destination.index, 0, reorderedItem);

    setPlan(items);
  }

  function mealComponent() {
    const el = [];
    for (let i = 0; i < props.days; i++) {
      el.push(
        <MealList plan={plan} i={i} meal={props.meals.length}></MealList>
      );
    }
    return el;
  }

  function mealLabel() {
    const el = [];
    for (let i = 0; i < props.days; i++) {
      for (let j = 0; j < props.meals.length; j++) {
        if (j === 0) {
          el.push(
            <tr style={{ height: "50px" }}>
              <td>Day {i + 1}</td>
              <td>{props.meals[j]}</td>
            </tr>
          );
        } else {
          el.push(
            <tr style={{ height: "50px" }}>
              <td></td>
              <td>{props.meals[j]}</td>
            </tr>
          );
        }
      }
    }
    return el;
  }

  return (
    <>
      {plan.length !== 0 && (
        <div className="test" style={{ display: "flex", flexDirection: "row" }}>
          <table>
            <tbody>{mealLabel().map((el) => el)}</tbody>
          </table>
          <table>
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="mealCards">
                {(provided) => (
                  <tbody {...provided.droppableProps} ref={provided.innerRef}>
                    {mealComponent().map((x) => x)}
                    {provided.placeholder}
                  </tbody>
                )}
              </Droppable>
            </DragDropContext>
          </table>
        </div>
      )}
    </>
  );
};

export default MealPlan;
