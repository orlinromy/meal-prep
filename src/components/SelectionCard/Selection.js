import React from "react";
import SelectionLabel from "./SelectionLabel";
import SelectableCardGroup from "./SelectableCardGroup";

const Selection = (props) => {
  return (
    <div className="m-4">
      <SelectionLabel text={props.title} multipleMax={props.multipleMax} />
      <SelectableCardGroup
        selection={props.types}
        multiple={props.multiple}
        multipleMax={props.multipleMax}
        id={props.id}
        setData={props.setData}
        value={props.value}
        hasImage={props.hasImage}
      />
    </div>
  );
};

export default Selection;
