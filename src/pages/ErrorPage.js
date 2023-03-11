import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-column justify-center items-center text-center h-[80vh] overflow-hidden">
      <p className="text-7xl mb-4">🤯</p>
      <p className="text-3xl">
        Sorry, we can't find anything... try again maybe?
      </p>
      <NavLink to="/create">
        <button className="w-60 bg-[#659B91] text-white p-2.5 rounded-xl text-xl hover:bg-[#517c74] mt-8">
          Take me back
        </button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
