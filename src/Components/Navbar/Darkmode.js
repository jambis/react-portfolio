import React, { useState, useEffect } from "react";
import Brightness4RoundedIcon from "@material-ui/icons/Brightness4Rounded";

const Darkmode = () => {
  const initialState =
    localStorage.getItem("darkmode") === "true" ? true : false;

  const [darkBool, setDarkBool] = useState(initialState);

  useEffect(() => {
    if (darkBool) {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
  }, [darkBool]);

  const handleClick = () => {
    setDarkBool((state) => !state);
    localStorage.setItem("darkmode", !darkBool ? "true" : "false");
  };

  return (
    <div className="Darkmode-container" onClick={handleClick}>
      <Brightness4RoundedIcon className="Darkmode-icon" />
      <p className="link-text">Darkmode</p>
    </div>
  );
};

export default Darkmode;
