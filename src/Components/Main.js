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
          <h2>
            Hey it's James Bishop{" "}
            <span role="img" aria-label="vulcan salute">
              🖖
            </span>
          </h2>
          <p>
            I'm a full stack developer currently located in Mission, Texas in
            the United States. I've recently graduated from Lambda School. Below
            you can view a list of projects that I have taken apart of (made
            during the coursework working in teams of students). You can find
            more repos and details in my Github and LinkedIn profile. If you
            have any questions for me feel free to reach out to me through
            email.
          </p>
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
