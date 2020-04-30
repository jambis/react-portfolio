import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import SaveRoundedIcon from "@material-ui/icons/SaveRounded";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";

import { firestore } from "../../Utils/firebase";

const CreatePost = (props) => {
  const [blogPost, setBlogPost] = useState({
    title: "",
    content: "",
    slug: "",
  });

  const handleChange = (e) => {
    e.persist();
    setBlogPost((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };

  const publishArticle = async () => {
    let newPost = {
      title: blogPost.title,
      slug: blogPost.slug,
      content: blogPost.content,
    };

    await firestore.collection("posts").add(newPost);
  };

  const saveAsDraft = async () => {
    const newPost = {
      title: blogPost.title,
      slug: blogPost.slug,
      content: blogPost.content,
    };

    await firestore.collection("drafts").add(newPost);
  };

  const preview = () => {
    //Preview item
  };

  return (
    <>
      <h2>Create A Blog Post</h2>
      <form className="create-form">
        <label htmlFor="title">Title: </label>
        <input
          name="title"
          type="text"
          value={blogPost.title}
          onChange={handleChange}
        />
        <label htmlFor="slug">Slug: </label>
        <input
          name="slug"
          type="text"
          value={blogPost.slug}
          onChange={handleChange}
        />
        <label htmlFor="content">Content: </label>
        <textarea
          name="content"
          type="textarea"
          cols={20}
          rows={15}
          value={blogPost.content}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button
            variant="contained"
            color="primary"
            className="primary"
            startIcon={<SaveRoundedIcon />}
          >
            Save As Draft
          </Button>
          <Button
            variant="contained"
            color="default"
            className="default"
            startIcon={<VisibilityRoundedIcon />}
          >
            Preview
          </Button>
          <Button
            variant="contained"
            color="default"
            className="default"
            startIcon={<PublishRoundedIcon />}
          >
            Publish Article
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className="secondary"
            startIcon={<DeleteRoundedIcon />}
          >
            Delete
          </Button>
        </div>
      </form>
    </>
  );
};

export default CreatePost;
