import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Groceries from "../Groceries/Groceries";
import MealList from "./MealList";
import styles from "../../styles/MealPlan.module.css";

const MealPlan = (props) => {
  const {
    breakfastMenu,
    lunchDinnerMenu,
    snackMenu,
    meals,
    days,
    doubleClicked,
  } = props;

  const [plan, setPlan] = useState([]);

  useEffect(() => {
    if (plan.length === 0) {
      if (meals.length === 3) {
        for (let i = 0; i < days; i++) {
          const breakfastIndex = Math.floor(
            Math.random() * breakfastMenu.length
          );
          const dinnerIndex = Math.floor(
            Math.random() * lunchDinnerMenu.length
          );
          setPlan((prevState) => [
            ...prevState,
            breakfastMenu[breakfastIndex],
            lunchDinnerMenu[breakfastIndex],
            lunchDinnerMenu[dinnerIndex],
          ]);
        }
      } else if (meals.length === 5) {
        for (let i = 0; i < days; i++) {
          const breakfastIndex = Math.floor(
            Math.random() * breakfastMenu.length
          );
          const dinnerIndex = Math.floor(
            Math.random() * lunchDinnerMenu.length
          );
          const snackIndex = Math.floor(Math.random() * snackMenu.length);
          setPlan((prevState) => [
            ...prevState,
            breakfastMenu[breakfastIndex],
            lunchDinnerMenu[breakfastIndex],
            lunchDinnerMenu[dinnerIndex],
            snackMenu[snackIndex],
            snackMenu[breakfastIndex],
          ]);
        }
      }
    }
  }, []);

  function handleDragEnd(e) {
    if (!e.destination) return;

    const items = [...plan];
    const [reorderedItem] = items.splice(e.source.index, 1);
    items.splice(e.destination.index, 0, reorderedItem);

    setPlan(items);
  }

  function mealComponent() {
    const el = [];
    for (let i = 0; i < days; i++) {
      el.push(
        <MealList
          plan={plan}
          i={i}
          meal={meals.length}
          doubleClicked={doubleClicked}
        ></MealList>
      );
    }
    return el;
  }

  function mealLabel() {
    const el = [];
    for (let i = 0; i < days; i++) {
      for (let j = 0; j < meals.length; j++) {
        if (j === 0) {
          el.push(
            <tr style={{ height: "106px" }} id={"day" + (1 + i)}>
              <td style={{ width: "90px" }}>Day {i + 1}</td>
            </tr>
          );
        } else {
          el.push(<tr style={{ height: "106px" }} />);
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
              " border-r-2 px-3 sm:px-8 pt-2 sm:pt-4 border-b-2 flex flex-col max-h-[91.7vh] md:w-[55%] lg:w-[45%] overflow-y-auto shadow-[20px_7px_29px_0_rgba(100,100,111,0.1)] gap-[50px] grow-[5]"
            }
            style={{
              boxShadow: "rgba(100, 100, 111, 0.1) 20px 7px 29px 0px",
            }}
          >
            <div>
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
                <table style={{ position: "relative !important", zIndex: 999 }}>
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
            </div>
            <Groceries groceries={plan} />
          </div>
        </>
      )}
    </>
  );
};

export default MealPlan;
