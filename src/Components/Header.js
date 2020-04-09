import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Brightness4RoundedIcon from "@material-ui/icons/Brightness4Rounded";

import "../Styles/Header.scss";
//TODO: Custom darkmode hook

const Header = () => {
  const initialState =
    localStorage.getItem("darkmode") === "true" ? true : false;

  const [darkBool, setDarkBool] = useState(initialState);

  const handleClick = () => {
    setDarkBool((state) => !state);
    localStorage.setItem("darkmode", !darkBool ? "true" : "false");
  };

  return (
    <nav>
      <div className="Nav-text">
        <span role="img" aria-label="technologist">
          👨‍💻
        </span>
        <p>Jambis.dev</p>
      </div>
      <div className="Nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutme">About Me</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <Brightness4RoundedIcon
          onClick={handleClick}
          style={{ color: darkBool ? "#3f51b5" : "#555" }}
        />
      </div>
    </nav>
  );
};

export default Header;
