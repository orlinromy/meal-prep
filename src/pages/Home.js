import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cooking from "../assets/cooking.gif";
import { IconCredit } from "../components/IconCredit";

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
      <img src={cooking} className="w-56" loading="lazy" />
      <IconCredit icons={icons} />
    </div>
  );
};

export default Home;
