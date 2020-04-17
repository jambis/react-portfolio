import React from "react";
import { animated } from "react-spring";
import { NavLink } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import EmojiPeopleRoundedIcon from "@material-ui/icons/EmojiPeopleRounded";
import DeveloperBoardRoundedIcon from "@material-ui/icons/DeveloperBoardRounded";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";

import Darkmode from "./Darkmode";

const Drawer = ({ setShow, transition }) => {
  return (
    <animated.div className="DrawerMenu" style={transition}>
      <CloseIcon onClick={() => setShow((state) => !state)} />
      <div className="Drawer-links">
        <div className="Drawer-link-item">
          <NavLink
            exact
            to="/"
            activeClassName="active"
            onClick={() => setShow((state) => !state)}
          >
            <HomeRoundedIcon />
            Home
          </NavLink>
        </div>
        <div className="Drawer-link-item">
          <NavLink
            to="/aboutme"
            activeClassName="active"
            onClick={() => setShow((state) => !state)}
          >
            <EmojiPeopleRoundedIcon />
            About Me
          </NavLink>
        </div>
        <div className="Drawer-link-item">
          <NavLink
            to="/projects"
            activeClassName="active"
            onClick={() => setShow((state) => !state)}
          >
            <WorkRoundedIcon />
            Projects
          </NavLink>
        </div>
        <Darkmode />
      </div>
    </animated.div>
  );
};

export default Drawer;
