import React, { useState } from "react";

import Project from "./Project";
import { data } from "../Data/data";

const ProjectList = () => {
  const projects = useState(data)[0];

  const renderProjects = () => {
    return projects.map((project) => {
      return <Project key={project.id} data={project} />;
    });
  };

  return (
    <div>
      <h2 name="projects">Projects</h2>
      {renderProjects()}
    </div>
  );
};

export default ProjectList;
