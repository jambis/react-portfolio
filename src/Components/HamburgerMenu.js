import React from "react";
import { NavLink } from "react-router-dom";

const HamburgerMenu = () => {
  return (
    <div className="Hamburger-menu">
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/aboutme" activeClassName="active">
        About Me
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        Contact
      </NavLink>
    </div>
  );
};

export default HamburgerMenu;
