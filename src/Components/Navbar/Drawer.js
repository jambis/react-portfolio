import React from "react";
import { animated } from "react-spring";
import { NavLink } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import PersonPinRoundedIcon from "@material-ui/icons/PersonPinRounded";
import EmojiPeopleRoundedIcon from "@material-ui/icons/EmojiPeopleRounded";
import DeveloperBoardRoundedIcon from "@material-ui/icons/DeveloperBoardRounded";
import PermPhoneMsgRoundedIcon from "@material-ui/icons/PermPhoneMsgRounded";

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
            to="/contact"
            activeClassName="active"
            onClick={() => setShow((state) => !state)}
          >
            <PermPhoneMsgRoundedIcon />
            Contact
          </NavLink>
        </div>
        <Darkmode />
      </div>
    </animated.div>
  );
};

export default Drawer;
