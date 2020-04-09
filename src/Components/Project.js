import React, { useState } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "../Styles/Project.scss";

const Project = (props) => {
  const [expanded, setExpanded] = useState(false);
  const { data } = props;

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
            <a
              href={`http://${data.demo}`}
              target="_blank"
              rel="nofollow external noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Demo
            </a>
            <a
              href={`http://${data.github}`}
              target="_blank"
              rel="nofollow external noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
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
