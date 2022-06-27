import React from "react";
// import data from "../tempData";

const MealPlanner = (props) => {
  console.log(props);
  return <div>{JSON.stringify(props.data)}</div>;
};

export default MealPlanner;
