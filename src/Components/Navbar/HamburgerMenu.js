import React, { useState } from "react";
import { useTransition } from "react-spring";
import MenuIcon from "@material-ui/icons/Menu";
import Slider from "./Slider";

const HamburgerMenu = () => {
  const [show, setShow] = useState(false);

  const transitions = useTransition(show, null, {
    from: { right: "-70vw" },
    enter: { right: "0vw" },
    leave: { right: "-70vw" },
  });

  const renderSlider = () => {
    return transitions.map(
      ({ item, key, props }) =>
        item && <Slider key={key} setShow={setShow} transition={props} />
    );
  };
  return (
    <div className="HamburgerMenu">
      <MenuIcon
        className="HamburgerBtn"
        onClick={() => setShow((state) => !state)}
      />
      {renderSlider()}
    </div>
  );
};

export default HamburgerMenu;
