import React, { useContext } from "react";

import { PostsContextDispatch } from "../../Providers/PostsProvider";
import { firestore } from "../../Utils/firebase";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";

const AdminPost = (props) => {
  const dispatch = useContext(PostsContextDispatch);
  const { checked, id, title, published } = props.data;
  console.log(`${props.data.id}:`, props.data);

  const handleToggle = () => {
    published
      ? dispatch({ type: "TOGGLE_POST", payload: id })
      : dispatch({ type: "TOGGLE_DRAFT", payload: id });
  };

  const handleDelete = async () => {
    if (published) {
      await firestore.collection("posts").doc(id).delete();
    } else {
      await firestore.collection("drafts").doc(id).delete();
    }
  };

  const handleEdit = () => {
    //Set Editing to true
    //redirect to EditPost Component
  };

  const handlePreview = () => {
    //redirect to Preview Component
  };

  return (
    <ListItem dense button onClick={handleToggle}>
      <ListItemIcon>
        <Checkbox edge="start" checked={checked} tabIndex={-1} disableRipple />
      </ListItemIcon>
      <ListItemText primary={title} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="preview"
          title="Preview"
          onClick={handlePreview}
        >
          <VisibilityRoundedIcon />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="edit"
          title="Edit"
          onClick={handleEdit}
        >
          <EditRoundedIcon />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={handleDelete}
        >
          <DeleteRoundedIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default AdminPost;
