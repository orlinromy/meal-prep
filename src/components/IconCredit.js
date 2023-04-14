import React, { useState } from "react";
import { Tooltip, Fab } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

export function IconCredit(props) {
  const { icons } = props;
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  return (
    <Tooltip
      disableHoverListener
      arrow
      open={isTooltipOpen}
      onClose={() => setIsTooltipOpen(false)}
      placement="top"
      title={
        <>
          <strong className="text-center text-lg">Icon credit</strong>
          <br />
          {icons.map((icon, i) => (
            <React.Fragment key={`icon-${i}`}>
              <a href={icon.link} title={icon.title} className="text-center">
                {icon.label}
                {/* Meal icons created by Freepik - Flaticon */}
              </a>
              <br />
            </React.Fragment>
          ))}
        </>
      }
    >
      <Fab
        size="small"
        aria-label="Icon Info"
        type="button"
        sx={{
          bgColor: "rgb(245, 245, 245)",
          position: "fixed",
          bottom: "3vh",
          right: "3vh",
        }}
        onClick={() => setIsTooltipOpen((prev) => !prev)}
      >
        <InfoIcon />
      </Fab>
    </Tooltip>
  );
}
