import React, { useState } from "react";
import { useTransition } from "react-spring";
import MenuIcon from "@material-ui/icons/Menu";

import Drawer from "./Drawer";

const HamburgerMenu = () => {
  const [show, setShow] = useState(false);

  const transitions = useTransition(show, null, {
    from: { right: "-70vw" },
    enter: { right: "0vw" },
    leave: { right: "-70vw" },
  });

  const renderDrawer = () => {
    return transitions.map(
      ({ item, key, props }) =>
        item && <Drawer key={key} setShow={setShow} transition={props} />
    );
  };
  return (
    <div className="HamburgerMenu">
      <MenuIcon
        className="HamburgerBtn"
        onClick={() => setShow((state) => !state)}
      />
      {renderDrawer()}
    </div>
  );
};

export default HamburgerMenu;
