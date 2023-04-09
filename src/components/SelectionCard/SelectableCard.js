import React from "react";
import { Card, Grid } from "@mui/material";

const SelectableCard = (props) => {
  return props.hasImage ? (
    <div
      onClick={props.handleClick}
      id={props.id}
      className="flex flex-wrap flex-row m-1.5"
    >
      <Card
        className="w-[120px] sm:w-[150px] drop-shadow-xl backdrop-blur-sm hover:shadow-lg hover:shadow-cream hover:backdrop-blur hover:cursor-pointer hover:border-solid hover:border-slate-200"
        style={
          props.isActive
            ? { backgroundColor: "#fbf0e7" }
            : { backgroundColor: "white" }
        }
      >
        <Grid
          container
          justifyContent="space-evenly"
          direction="column"
          alignItems="center"
        >
          <img
            className="m-4 w-16 sm:w-24"
            src={props.type.image}
            alt={props.type.type}
          />
          <p className="mb-4 mx-2 text-center">{props.type.type}</p>
        </Grid>
      </Card>
    </div>
  ) : (
    <div
      onClick={props.handleClick}
      id={props.id}
      className="flex m-1.5 sm:m-2 border border-solid rounded-3xl border-slate-200 hover:cursor-pointer hover:border-solid hover:shadow-lg hover:shadow-cream"
      style={
        props.isActive
          ? { backgroundColor: "#fbf0e7" }
          : { backgroundColor: "white" }
      }
    >
      <p className="m-2.5 text-center">{props.type.type}</p>
    </div>
  );
};

export default SelectableCard;
