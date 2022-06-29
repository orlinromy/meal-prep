import React from "react";
import MealCard from "./MealCard";

const MealList = (props) => {
  return props.meal === 3 ? (
    <>
      <tr>
        <td>
          <MealCard data={props.plan[3 * props.i]} idx={3 * props.i} />
        </td>
      </tr>
      <tr>
        <td>
          <MealCard data={props.plan[3 * props.i + 1]} idx={3 * props.i} />
        </td>
      </tr>
      <tr>
        <td>
          <MealCard data={props.plan[3 * props.i + 2]} idx={3 * props.i} />
        </td>
      </tr>
    </>
  ) : (
    <>
      <tr>
        <td>
          <MealCard data={props.plan[5 * props.i]} idx={5 * props.i} />
        </td>
      </tr>
      <tr>
        <td>
          <MealCard data={props.plan[5 * props.i + 1]} idx={5 * props.i + 1} />
        </td>
      </tr>
      <tr>
        <td>
          <MealCard data={props.plan[5 * props.i + 2]} idx={5 * props.i + 2} />
        </td>
      </tr>
      <tr>
        <td>
          <MealCard data={props.plan[5 * props.i + 3]} idx={5 * props.i + 3} />
        </td>
      </tr>
      <tr>
        <td>
          <MealCard data={props.plan[5 * props.i + 4]} idx={5 * props.i + 4} />
        </td>
      </tr>
    </>
  );
};

export default MealList;
