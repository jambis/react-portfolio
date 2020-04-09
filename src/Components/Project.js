import React, { useState } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "../Styles/Project.scss";

const Project = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ExpansionPanel
      square
      expanded={expanded}
      onChange={() => setExpanded((state) => !state)}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <div className="ShortDetails">
          <div>
            <h2>{data.title}</h2>
            <p>{data.tech}</p>
          </div>
          <div className="Project-links">
            <a href="#test" onClick={(e) => e.stopPropagation()}>
              Demo
            </a>
            <a href="#test" onClick={(e) => e.stopPropagation()}>
              Github
            </a>
          </div>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <p>{data.description}</p>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default Project;
