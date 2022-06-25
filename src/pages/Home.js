import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Prep-a-Meal</h1>
      <p>
        Having a hell wekk ahead? Don't worry, we'll help you to decide what to
        eat (hopefully)
      </p>
      <button>
        <NavLink to="/create">Start Prepping</NavLink>
      </button>
    </div>
  );
};

export default Home;
