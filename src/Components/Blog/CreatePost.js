import React, { useState } from "react";

const CreatePost = () => {
  const [blogPost, setBlogPost] = useState({
    title: "",
    content: "",
    slug: "",
    date: "2020-04-13",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setBlogPost((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      <form>
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
        <label htmlFor="date">Date: </label>
        <input
          name="date"
          type="date"
          value={blogPost.date}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default CreatePost;
