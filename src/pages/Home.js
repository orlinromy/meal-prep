import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import cooking from "../assets/cooking.gif";

const Home = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);
  return (
    <div className="flex flex-row">
      <div className="ml-[12%] mt-[13%]">
        <h1 className="text-5xl mb-[1.3%]">Welcome to Prep-a-Meal</h1>
        <p className="text-lg">
          Having a hell week ahead? Don't worry, we can help you decide what to
          eat 😉
        </p>
        <NavLink to="/create">
          <button className="w-60 bg-[#659B91] text-white p-2.5 rounded-xl text-lg hover:bg-[#517c74] mt-[4%]">
            Start Prepping
          </button>
        </NavLink>
      </div>
      <img src={cooking} className="mt-[20%] ml-[10%] w-56"></img>
    </div>
  );
};

export default Home;
