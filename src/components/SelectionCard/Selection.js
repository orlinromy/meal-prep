import React from "react";
import SelectionLabel from "./SelectionLabel";
import SelectableCardGroup from "./SelectableCardGroup";

const Selection = (props) => {
  return (
    <>
      <SelectionLabel text={props.title} />
      <SelectableCardGroup
        selection={props.types}
        multiple={props.multiple}
        id={props.id}
        setData={props.setData}
        value={props.value}
      />
    </>
  );
};

export default Selection;
