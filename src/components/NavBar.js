import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <nav>
      <span className={styles.navlink}>
        <p>
          <NavLink to="/">Home</NavLink>
        </p>
        <p>
          <NavLink to="/create">Create</NavLink>
        </p>
        <p>
          <NavLink to="/planner">Planner</NavLink>
        </p>
      </span>
    </nav>
  );
};

export default NavBar;
