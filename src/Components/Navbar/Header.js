import React from "react";
import { NavLink } from "react-router-dom";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import EmojiPeopleRoundedIcon from "@material-ui/icons/EmojiPeopleRounded";
import DeveloperBoardRoundedIcon from "@material-ui/icons/DeveloperBoardRounded";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";

import Darkmode from "./Darkmode";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <nav>
      <div className="Nav-text">
        <NavLink to="/">
          <span role="img" aria-label="technologist">
            👨‍💻
          </span>
          <h2>Jambis.dev</h2>
        </NavLink>
      </div>
      <div className="Nav-links">
        <NavLink exact to="/" activeClassName="active">
          <HomeRoundedIcon />
          Home
        </NavLink>
        <NavLink to="/aboutme" activeClassName="active">
          <EmojiPeopleRoundedIcon />
          About Me
        </NavLink>
        <NavLink to="/projects" activeClassName="active">
          <WorkRoundedIcon />
          Projects
        </NavLink>
        <Darkmode />
      </div>
      <HamburgerMenu />
    </nav>
  );
};

export default Header;
