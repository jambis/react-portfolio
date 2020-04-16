import React from "react";
import { animated } from "react-spring";
import { NavLink } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import Brightness4RoundedIcon from "@material-ui/icons/Brightness4Rounded";

const Slider = ({ setShow, transition }) => {
  return (
    <animated.div className="DrawerMenu" style={transition}>
      <CloseIcon onClick={() => setShow((state) => !state)} />
      <div className="Slider-links">
        <NavLink
          exact
          to="/"
          activeClassName="active"
          onClick={() => setShow((state) => !state)}
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutme"
          activeClassName="active"
          onClick={() => setShow((state) => !state)}
        >
          About Me
        </NavLink>
        <NavLink
          to="/contact"
          activeClassName="active"
          onClick={() => setShow((state) => !state)}
        >
          Contact
        </NavLink>
        <Brightness4RoundedIcon />
      </div>
    </animated.div>
  );
};

export default Slider;
