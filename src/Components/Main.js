import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";
import EmailIcon from "@material-ui/icons/Email";

import ProjectList from "./ProjectList";

import "../Styles/Main.scss";

const Main = () => {
  return (
    <>
      <div className="Header">
        <div className="Header-text">
          <h2>Hey it's James Bishop</h2>
          <p>This is a introduction of me</p>
          <div className="Header-links">
            <a
              href="https://github.com/jambis"
              title="James' Github"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/jambis/"
              title="James' Linkedin Profile"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://drive.google.com/file/d/1EBVJZTfDBGRvHPvxuMoc-YiMVJGuUFf1/view"
              title="James' Resume"
              target="_blank"
              rel="noopener noreferrer nofollow "
            >
              <DescriptionIcon />
            </a>
            <a
              href="mailto:jdbishop22@gmail.com"
              title="James' Email"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <EmailIcon />
            </a>
          </div>
        </div>
        <img src="https://via.placeholder.com/300x400" alt="James' Profile" />
      </div>
      <ProjectList />
    </>
  );
};

export default Main;
