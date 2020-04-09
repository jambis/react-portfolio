import React, { useState } from "react";

import Project from "./Project";
import { data } from "../Data/data";

const ProjectList = () => {
  const [projects, setProjects] = useState(data);

  const renderProjects = () => {
    return projects.map((project) => {
      return <Project data={project} />;
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
