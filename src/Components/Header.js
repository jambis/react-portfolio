import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Brightness4RoundedIcon from "@material-ui/icons/Brightness4Rounded";

//TODO: Custom darkmode hook

const Header = () => {
  const initialState =
    localStorage.getItem("darkmode") === "true" ? true : false;

  const [darkBool, setDarkBool] = useState(initialState);

  useEffect(() => {
    if (darkBool) {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
  }, [darkBool]);

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
        <h2>Jambis.dev</h2>
      </div>
      <div className="Nav-links">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/aboutme" activeClassName="active">
          About Me
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
        <Brightness4RoundedIcon
          onClick={handleClick}
          style={{ color: darkBool ? "#3f51b5" : "#555" }}
        />
      </div>
    </nav>
  );
};

export default Header;
