import React from "react";
import { Draggable } from "react-beautiful-dnd";

const MealCard = (props) => {
  return (
    <Draggable
      key={props.idx}
      draggableId={props.idx.toString()}
      index={props.idx}
    >
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div style={{ border: "1px solid black" }}>
            {/* <img
            src={props.data.recipe.images.THUMBNAIL.url}
            alt={props.data.recipe.label}
          ></img> */}
            <p>{props.data.recipe.label}</p>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default MealCard;
