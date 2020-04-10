import React from "react";
import ArrowDropDownCircleRoundedIcon from "@material-ui/icons/ArrowDropDownCircleRounded";

const ScrollButton = () => {
  return (
    <ArrowDropDownCircleRoundedIcon
      className="Arrow"
      onClick={() => window.scrollTo(0, 0)}
    />
  );
};

export default ScrollButton;
