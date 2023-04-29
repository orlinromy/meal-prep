import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import cooking from "../assets/cooking.gif";
import { IconCredit } from "../components/IconCredit";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const icons = [
  {
    link: "https://www.flaticon.com/free-icons/meal",
    title: "meal icons",
    label: "Meal icons created by Freepik - Flaticon",
  },
  {
    link: "https://www.flaticon.com/free-animated-icons/cooking",
    title: "cooking animated icons",
    label: "Cooking animated icons created by Freepik - Flaticon",
  },
];

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);
  return (
    <>
      <div style={{ justifySelf: "flex-start", padding: 8 }}>
        <IconButton
          onClick={() => {
            window.location.replace(`${document.referrer}?ott=dummy`);
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 23,
          padding: 24,
        }}
      >
        <h1 className="text-4xl sm:text-5xl text-center">
          Welcome to Prep-a-Meal
        </h1>
        <p className="text-lg text-center">
          Having a hell week ahead? Don't worry, we can help you decide what to
          eat 😉
        </p>
        <NavLink to="/create">
          <button className="w-60 bg-[#659B91] text-white p-2.5 rounded-xl text-lg hover:bg-[#517c74] mt-[4%]">
            Start Prepping
          </button>
        </NavLink>
        {localStorage.getItem("plan") && (
          <NavLink to="/planner">
            <button className="w-60 border hover:border-[#659B91] text-[#333333] p-2.5 rounded-xl text-lg mt-[4%]">
              View my plan
            </button>
          </NavLink>
        )}
        <img src={cooking} className="w-52" loading="lazy" />
        <IconCredit icons={icons} />
      </div>
    </>
  );
};

export default Home;
