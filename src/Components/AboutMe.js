import React, { useState } from "react";

import Contact from "./Contact";

import { about } from "../Data/abouttext";

const AboutMe = () => {
  const aboutText = useState(about)[0];

  const renderAboutText = () => {
    return aboutText.mainText?.map((p, i) => {
      return <p key={i}>{p}</p>;
    });
  };

  return (
    <>
      <h2 name="aboutme">About Me</h2>
      {renderAboutText()}
      <Contact />
    </>
  );
};

export default AboutMe;
