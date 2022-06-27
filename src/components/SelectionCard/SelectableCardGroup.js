import React from "react";
import { Grid } from "@mui/material";
import SelectableCard from "./SelectableCard";

const SelectableCardGroup = (props) => {
  function handleClick(idx) {
    if (props.multiple) {
      if (idx === 0) {
        props.setData([0]);
      } else {
        props.setData((prevState) => {
          return prevState.includes(idx)
            ? prevState.filter((el) => el !== idx)
            : [...prevState.filter((el) => el !== 0), idx];
        });
      }
    } else {
      props.setData([idx]);
    }
  }

  return (
    <div>
      <Grid container justifyContent="space-evenly" alignItems="stretch">
        {props.selection.map((type, idx) => (
          <SelectableCard
            type={type}
            handleClick={() => {
              handleClick(idx);
            }}
            isActive={props.value.includes(idx)}
          ></SelectableCard>
        ))}
      </Grid>
    </div>
  );
};

export default SelectableCardGroup;
