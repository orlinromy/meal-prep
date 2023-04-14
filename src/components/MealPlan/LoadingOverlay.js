import React, { useState } from "react";
import mixer from "../../assets/mixer.gif";
import { Tooltip, Fab } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const LoadingOverlay = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  return (
    <>
      <div
        className="z-20 drop-shadow-xl grid place-items-center w-[80%] max-w-sm h-[50%] max-h-sm my-auto mx-3 rounded-2xl bg-white"
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <img src={mixer} className="w-8/12" loading="lazy" />
        <p className="text-2xl mb-8">Mixing some stuff...</p>
      </div>
      <Tooltip
        disableHoverListener
        arrow
        open={isTooltipOpen}
        onClose={() => setIsTooltipOpen(false)}
        placement="top"
        title={
          <>
            <strong>Icon Credit</strong>
            <br />
            <a
              className="text-center mr-8 ml-8 mb-4 text-sm"
              href="https://www.flaticon.com/free-animated-icons/mixer"
              title="mixer animated icons"
            >
              Mixer animated icons created by Freepik - Flaticon
            </a>
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
    </>
  );
};

export default LoadingOverlay;
