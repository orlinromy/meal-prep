import { Card, Box } from "@mui/material";
import React from "react";
import salads from "../../assets/salads.png";

const MealCard = (props) => {
  function handleClick(e) {
    props.doubleClicked(props.data);
  }

  return (
    // <div
    //   onDoubleClick={handleClick}
    //   style={{
    //     display: "flex",
    //     flexDirection: "row",
    //     alignItems: "center",
    //     boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    //     // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    //     // border: "solid 1px black",
    //     borderRadius: "20px",
    //     padding: "1px",
    //   }}
    // >
    //   <img
    //     style={{ width: "100px", height: "100px" }}
    //     // src={props.data.recipe.images.THUMBNAIL.url}
    //     src={salads}
    //     alt={props.data.recipe.label}
    //   ></img>
    //   <p>{props.data.recipe.label}</p>
    // </div>
    <Card
      variant="outlined"
      sx={{ height: "104px" }}
      onDoubleClick={handleClick}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        sx={{ height: "100%", mx: 2 }}
      >
        <img
          style={{ width: "80px", height: "80px", marginRight: "8px" }}
          // src={props.data.recipe.images.THUMBNAIL.url}
          src={salads}
          alt={props.data.recipe.label}
        ></img>
        <Box display="flex" flexDirection="column">
          <p style={{ marginBottom: "4px" }}>{props.data.recipe.label}</p>
          <p style={{ fontSize: "10px", marginBottom: "4px" }}>
            {props.data.recipe.dietLabels.join(", ")}
          </p>
        </Box>
      </Box>
    </Card>
  );
};

export default MealCard;

// <Draggable
// key={props.idx}
// draggableId={props.idx.toString()}
// index={props.idx}
// >
// {(provided) => (
//   <div
//     ref={provided.innerRef}
//     {...provided.draggableProps}
//     {...provided.dragHandleProps}
//   >
//     <div style={{ border: "1px solid black" }}>
//       {/* <img
//       src={props.data.recipe.images.THUMBNAIL.url}
//       alt={props.data.recipe.label}
//     ></img> */}
//       <p>{props.data.recipe.label}</p>
//     </div>
//   </div>
// )}
// </Draggable>
