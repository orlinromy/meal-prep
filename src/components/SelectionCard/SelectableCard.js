import React from "react";
import { Card, Grid } from "@mui/material";
import styles from "../../styles/SelectableCard.module.css";

const SelectableCard = (props) => {
  return (
    <div
      onClick={props.handleClick}
      id={props.id}
      className={props.isActive ? styles.selected : ""}
    >
      <Card sx={{ minHeight: "150px", minWidth: "150px", maxWidth: "250px" }}>
        <Grid
          container
          justifyContent="space-evenly"
          direction="column"
          alignItems="center"
        >
          <img
            style={{ margin: "20px" }}
            src={props.type.image}
            alt={props.type.type}
          />
          <p style={{ margin: "20px", textAlign: "center" }}>
            {props.type.type}
          </p>
        </Grid>
      </Card>
    </div>
  );
};

export default SelectableCard;
