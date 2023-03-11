import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cooking from "../assets/cooking.gif";
import InfoIcon from "@mui/icons-material/Info";
import { Fab, Tooltip } from "@mui/material";

const Home = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 23,
        padding: 24,
        paddingTop: 48,
      }}
    >
      <h1 className="text-5xl text-center">Welcome to Prep-a-Meal</h1>
      <p className="text-lg text-center">
        Having a hell week ahead? Don't worry, we can help you decide what to
        eat 😉
      </p>
      <NavLink to="/create">
        <button className="w-60 bg-[#659B91] text-white p-2.5 rounded-xl text-lg hover:bg-[#517c74] mt-[4%]">
          Start Prepping
        </button>
      </NavLink>
      <img src={cooking} className="w-56" />
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
              href="https://www.flaticon.com/free-icons/meal"
              title="meal icons"
            >
              Meal icons created by Freepik - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-animated-icons/cooking"
              title="cooking animated icons"
            >
              Cooking animated icons created by Freepik - Flaticon
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
    </div>
  );
};

export default Home;
