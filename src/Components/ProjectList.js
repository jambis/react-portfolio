import React, { useState } from "react";

import Project from "./Project";

import { projects } from "../Data/projects";

const ProjectList = () => {
  const projectsArr = useState(projects)[0];

  const renderProjects = () => {
    return projectsArr.map((project) => {
      return <Project key={project.id} data={project} />;
    });
  };

  return (
    <div className="ProjectList">
      <h2 name="projects">Projects</h2>
      {renderProjects()}
    </div>
  );
};

export default ProjectList;
