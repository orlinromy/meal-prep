import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Prep-a-Meal</h1>
      <p>
        Having a hell week ahead? Don't worry, we'll help you to decide what to
        eat (hopefully)
      </p>
      <NavLink to="/create">
        <button>Start Prepping</button>
      </NavLink>
    </div>
  );
};

export default Home;
