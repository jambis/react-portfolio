import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

const Contact = () => {
  return (
    <div className="Contact-container">
      <p>
        Feel free to get in contact with me if you have any comments, ideas,
        questions, suggestions or just want to chat.
      </p>
      <div className="Contact-links">
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
          href="mailto:jdbishop22@gmail.com"
          title="James' Email"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <EmailIcon />
        </a>
      </div>
    </div>
  );
};

export default Contact;
