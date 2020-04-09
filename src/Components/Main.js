import React from "react";

import ProjectList from "./ProjectList";

import "../Styles/Main.scss";

const Main = () => {
  return (
    <>
      <div className="Header">
        <div className="Header-text">
          <h2>Hey it's James Bishop</h2>
          <p>This is a introduction of me</p>
        </div>
        <img src="https://via.placeholder.com/300x400" alt="James' Profile" />
      </div>
      <ProjectList />
    </>
  );
};

export default Main;
