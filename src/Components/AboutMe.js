import React, { useState } from "react";

import { about } from "../Data/abouttext";

const AboutMe = () => {
  const aboutText = useState(about)[0];

  const renderAboutText = () => {
    return aboutText.mainText?.map((p) => {
      return <p>{p}</p>;
    });
  };
  return <>{renderAboutText()}</>;
};

export default AboutMe;
