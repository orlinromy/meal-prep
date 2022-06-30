import { Card, Box } from "@mui/material";
import React from "react";
// import salads from "../../assets/salads.png";

const MealCard = (props) => {
  function handleClick(e) {
    props.doubleClicked(props.data);
  }

  return (
    <Card
      variant="outlined"
      sx={{ height: "104px" }}
      onDoubleClick={handleClick}
      className="drop-shadow-lg rounded-lg"
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        sx={{ height: "100%", mx: 2 }}
      >
        <img
          style={{ width: "80px", height: "80px", marginRight: "8px" }}
          src={props.data.recipe.images.THUMBNAIL.url}
          // src={salads}
          alt={props.data.recipe.label}
          className="rounded-lg"
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
