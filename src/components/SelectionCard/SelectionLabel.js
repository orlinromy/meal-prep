import React from "react";

const SelectionLabel = (props) => {
  return (
    <>
      <p className="text-2xl mt-4 mb-2">{props.text}</p>
      {props.multipleMax && (
        <p className="text-lg mb-2">(max. {props.multipleMax})</p>
      )}
    </>
  );
};

export default SelectionLabel;
