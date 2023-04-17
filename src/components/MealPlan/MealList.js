import React from "react";
import MealCard from "./MealCard";
import { Draggable } from "react-beautiful-dnd";

const MealList = (props) => {
  function generateMealList() {
    const el = [];
    for (let i = 0; i < props.meal; i++) {
      el.push(
        <Draggable
          key={props.i * props.meal + i}
          draggableId={(props.i * props.meal + i).toString()}
          index={props.i * props.meal + i}
        >
          {(provided) => (
            <tr
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <td
                style={{
                  height: "50px",
                  width: "400px",
                }}
              >
                <MealCard
                  data={props.plan[props.meal * props.i + i]}
                  idx={props.i * props.meal + i}
                  meal={props.meal}
                  doubleClicked={props.doubleClicked}
                />
              </td>
            </tr>
          )}
        </Draggable>
      );
    }
    return el;
  }

  return <>{generateMealList().map((el) => el)}</>;
};

export default MealList;
