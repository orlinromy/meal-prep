import React from "react";

const MealLabel = (props) => {
  return (
    <>
      {props.labels.map((label, idx) => (
        <tr>
          <td>Day {idx + 1}</td>
          {label.map((x) => (
            <td>{x}</td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default MealLabel;
