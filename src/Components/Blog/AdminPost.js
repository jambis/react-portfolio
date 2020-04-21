import React, { useState } from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";

const AdminPost = (props) => {
  const [checked, setChecked] = useState(false);
  return (
    <ListItem
      role={undefined}
      dense
      button
      onClick={() => setChecked((state) => !state)}
    >
      <ListItemIcon>
        <Checkbox edge="start" checked={checked} tabIndex={-1} disableRipple />
      </ListItemIcon>
      <ListItemText primary={props.data.title} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="comments">
          <CommentIcon />
        </IconButton>
        <IconButton edge="end" aria-label="comments">
          <CommentIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default AdminPost;
