import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import icon from "../assets/food-tray.png";

const NavBar = () => {
  let navigate = useNavigate();

  return (
    <div className="border-b-2 pt-0 bg-gradient-to-t from-[#fdf8f3] via-white">
      <nav className="flex items-center ml-7 my-3 gap-9">
        <img
          style={{ width: "50px", height: "50px" }}
          onClick={() => {
            navigate("/");
          }}
          src={icon}
          className="cursor-pointer"
          alt="prep-a-meal"
        />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create">Create</NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
