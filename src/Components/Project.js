import React, { useState } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Project = (props) => {
  const [expanded, setExpanded] = useState(false);
  const { data } = props;

  const renderImage = () => {
    return data.image.map((img, i) => (
      <img width={data.maxWidth[i]} key={i} src={img} alt={data.title} />
    ));
  };

  const renderDescription = () => {
    return data.description.map((paragraph, i) => {
      return <p key={i}>{paragraph}</p>;
    });
  };

  const renderLoginInfo = () => {
    return (
      <p>
        You can try out the web application with the following username //
        password:&nbsp;
        <span>{data.login}</span>
      </p>
    );
  };

  return (
    <ExpansionPanel
      square
      expanded={expanded}
      onChange={() => setExpanded((state) => !state)}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <div className="ShortDetails">
          <div>
            <h3>{data.title}</h3>
            <p>Tech: {data.tech}</p>
          </div>
          <div className="Project-links">
            <a
              href={`http://${data.demo}`}
              target="_blank"
              rel="nofollow external noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="links"
            >
              Demo
            </a>
            <a
              href={`http://${data.github}`}
              target="_blank"
              rel="nofollow external noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="links"
            >
              Github
            </a>
          </div>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="Description">
        {data.description ? renderDescription() : null}
        {data.login ? renderLoginInfo() : null}
        <div className="Project-images">
          {data.image ? renderImage() : null}
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default Project;
