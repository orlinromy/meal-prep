import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import styles from "../styles/NavBar.module.css";
import icon from "../assets/food-tray.png";

const NavBar = () => {
  let navigate = useNavigate();

  return (
    <div className="border-b-2 pt-0 bg-gradient-to-t from-[#fdf8f3] via-white">
      <nav className="flex justify-between mt-[10px] ml-[90px] mr-[70%] mb-[10px] ">
        {/* <span className="flex justify-between w-4/12 h-2/12 mt-[10px] ml-[100px]"> */}
        <img
          style={{ width: "50px", height: "50px" }}
          onClick={() => {
            navigate("/");
          }}
          src={icon}
          className="cursor-pointer"
        ></img>
        <p className="m-auto">
          <NavLink to="/">Home</NavLink>
        </p>
        <p className="m-auto">
          <NavLink to="/create">Create</NavLink>
        </p>
        {/* </span> */}
      </nav>
    </div>
  );
};

export default NavBar;
