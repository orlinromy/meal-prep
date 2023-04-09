import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Groceries from "../Groceries/Groceries";
import MealList from "./MealList";
import styles from "../../styles/MealPlan.module.css";

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
    if (!e.destination) return;

    const items = [...plan];
    const tmp = items[e.destination.index];
    items[e.destination.index] = items[e.source.index];
    items[e.source.index] = tmp;

    setPlan(items);
  }

  function mealComponent() {
    const el = [];
    for (let i = 0; i < props.days; i++) {
      el.push(
        <MealList
          plan={plan}
          i={i}
          meal={props.meals.length}
          doubleClicked={props.doubleClicked}
        ></MealList>
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
            <tr style={{ height: "106px" }} id={"day" + (1 + i)}>
              <td style={{ width: "90px" }}>Day {i + 1}</td>
              <td style={{ width: "90px" }}>{props.meals[j]}</td>
            </tr>
          );
        } else {
          el.push(
            <tr style={{ height: "106px" }}>
              <td style={{ width: "90px" }}></td>
              <td style={{ width: "90px" }}>{props.meals[j]}</td>
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
        <>
          <div
            className={
              "overallDiv " +
              styles.overallDiv +
              " border-r-2 pr-8 pt-4 border-b-2"
            }
            style={{
              display: "flex",
              flexDirection: "column",
              maxHeight: "96vh",
              overflowY: "scroll",
              boxShadow: "rgba(100, 100, 111, 0.1) 20px 7px 29px 0px",
            }}
          >
            <p className="text-2xl pt-4 pb-2">Meal Plan</p>
            <p className="text-md pb-4">
              Pro tip: drag and drop to swap the meals
            </p>
            <div
              className="test"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <table>
                <tbody>{mealLabel().map((el) => el)}</tbody>
              </table>
              <table>
                <DragDropContext onDragEnd={handleDragEnd}>
                  <Droppable droppableId="mealCards">
                    {(provided) => (
                      <tbody
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {mealComponent().map((x) => x)}
                        {provided.placeholder}
                      </tbody>
                    )}
                  </Droppable>
                </DragDropContext>
              </table>
            </div>
            <Groceries groceries={plan}></Groceries>
          </div>
        </>
      )}
    </>
  );
};

export default MealPlan;
