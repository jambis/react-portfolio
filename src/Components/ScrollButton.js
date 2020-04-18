import React from "react";
import { animated } from "react-spring";
import ArrowDropDownCircleRoundedIcon from "@material-ui/icons/ArrowDropDownCircleRounded";

const ScrollButton = ({ transition }) => {
  return (
    <animated.div className="ScrollBtn-Container" style={transition}>
      <ArrowDropDownCircleRoundedIcon
        className="Arrow"
        onClick={() => window.scrollTo(0, 0)}
      />
    </animated.div>
  );
};

export default ScrollButton;
