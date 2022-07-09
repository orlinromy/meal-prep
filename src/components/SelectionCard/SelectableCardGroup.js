import React from "react";
import SelectableCard from "./SelectableCard";

const SelectableCardGroup = (props) => {
  function handleClick(idx) {
    if (props.multiple) {
      if (idx === 0) {
        props.setData([0]);
      } else {
        props.setData((prevState) => {
          if (prevState.includes(idx)) {
            return prevState.filter((el) => el !== idx);
          } else {
            if (prevState.length < props.multipleMax) {
              return [...prevState.filter((el) => el !== 0), idx];
            } else {
              return prevState;
            }
          }

          // return prevState.includes(idx)
          //   ? prevState.filter((el) => el !== idx)
          //   : [
          //       ...prevState.filter((el) => el !== 0),
          //       idx,
          //     ];
        });
      }
    } else {
      props.setData([idx]);
    }
  }

  return props.hasImage ? (
    <div className="p-4 flex flex-wrap flex-row justify-center">
      {props.selection.map((type, idx) => (
        <SelectableCard
          key={Math.random()}
          type={type}
          handleClick={() => {
            handleClick(idx);
          }}
          hasImage={props.hasImage}
          isActive={props.value.includes(idx)}
        ></SelectableCard>
      ))}
    </div>
  ) : (
    <div className="flex flex-wrap justify-center">
      {props.selection.map((type, idx) => (
        <SelectableCard
          key={Math.random()}
          type={type}
          handleClick={() => {
            handleClick(idx);
          }}
          hasImage={props.hasImage}
          isActive={props.value.includes(idx)}
        ></SelectableCard>
      ))}
    </div>
  );
};

export default SelectableCardGroup;
