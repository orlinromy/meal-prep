import React from "react";
import { Card, Grid } from "@mui/material";

const SelectableCard = (props) => {
  return props.hasImage ? (
    <div
      onClick={props.handleClick}
      id={props.id}
      className="flex flex-wrap flex-row m-1.5"
      // className={props.isActive ? styles.selected : ""}
    >
      <Card
        sx={{ minHeight: "150px", minWidth: "150px", maxWidth: "200px" }}
        className={`drop-shadow-xl backdrop-blur-sm hover:shadow-lg hover:shadow-cream hover:backdrop-blur hover:cursor-pointer hover:border-solid hover:border-slate-200`}
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
            className="m-4 w-24"
            // style={{ margin: "20px", width: "100px" }}
            src={props.type.image}
            alt={props.type.type}
          />
          <p
            className="m-4 text-center"
            style={{ margin: "20px", textAlign: "center" }}
          >
            {props.type.type}
          </p>
        </Grid>
      </Card>
    </div>
  ) : (
    <div
      onClick={props.handleClick}
      id={props.id}
      className="flex m-2 border border-solid rounded-3xl border-slate-200 hover:cursor-pointer hover:border-solid hover:shadow-lg hover:shadow-cream"
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

//     display: flex;
// border-radius: 30px;
// margin: 5px;
// background-color: white;
// box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
//   rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
// {styles.card}

// style={{ margin: "20px", textAlign: "center" }}
