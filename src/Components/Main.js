import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";
import EmailIcon from "@material-ui/icons/Email";

import ProjectList from "./ProjectList";

const Main = () => {
  return (
    <>
      <div className="Header">
        <div className="Header-text">
          <h1>
            Howdy! I'm James&nbsp;
            <span role="img" aria-label="vulcan salute">
              🖖
            </span>
          </h1>
          <p>
            I'm a full stack developer currently located in Mission, Texas. I've
            recently graduated from Lambda School. Navigate to Projects to find
            a list of projects that I have taken part of (made during the
            coursework working in teams of students). You can find more repos
            and details in my Github and LinkedIn profile. If you have any
            questions for me feel free to reach out to me through email.
          </p>
          <p>
            Currently my skills are:&nbsp;
            <span>
              JavaScript, Python, ReactJS, Redux, NodeJS, ExpressJS, Django,
              Flask, Redux, CSS/LESS/SASS, PostgreSQL/SQLite3, Git version
              control.
            </span>
          </p>
          <p>
            Also I'm currently learning: <span>Docker</span> and&nbsp;
            <span>GraphQL</span>
          </p>
        </div>
        <img src="Images/profilepic.jpg" alt="James' Profile" />
      </div>
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
    </>
  );
};

export default Main;
