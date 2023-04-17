import { Card, Box, Chip } from "@mui/material";
import React from "react";

const MealCard = (props) => {
  function handleClick(e) {
    console.log(props.data);
    props.doubleClicked(props.data);
  }

  function mealLabel(i) {
    switch (i % props.meal) {
      case 0:
        return "Breakfast";
      case 1:
        return "Lunch";
      case 2:
        return "Dinner";
      case 3:
        return "Snack";
      case 4:
        return "Teatime";
    }
  }

  return (
    <Box
      sx={{
        height: "104px",
        boxShadow:
          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        borderRadius: "0.5rem",
        border: "1px",
        borderColor: "rgba(255, 255, 255, 0.12)",
        backgroundColor: "white",
      }}
      onClick={handleClick}
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
          alt={props.data.recipe.label}
          className="rounded-lg"
          loading="lazy"
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <p className="text-sm mb-2 ml-2 mt-2">{props.data.recipe.label}</p>
          <Chip
            label={mealLabel(props.idx)}
            size="small"
            className="w-fit ml-1"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MealCard;
