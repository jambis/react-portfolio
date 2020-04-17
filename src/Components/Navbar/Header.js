import React from "react";
import { NavLink } from "react-router-dom";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import PersonPinRoundedIcon from "@material-ui/icons/PersonPinRounded";
import EmojiPeopleRoundedIcon from "@material-ui/icons/EmojiPeopleRounded";
import DeveloperBoardRoundedIcon from "@material-ui/icons/DeveloperBoardRounded";
import ContactMailRoundedIcon from "@material-ui/icons/ContactMailRounded";

import Darkmode from "./Darkmode";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
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
        <Darkmode />
      </div>
      <HamburgerMenu />
    </nav>
  );
};

export default Header;
