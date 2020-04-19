import React, { useState } from "react";
import { firestore } from "../../Utils/firebase";
import { collectIdsAndDocs } from "../../Utils/helper";

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

    const docRef = await firestore.collection("posts").add(newPost);
    const doc = await docRef.get();

    newPost = collectIdsAndDocs(doc);
  };

  //   const saveAsDraft = () => {
  //     // const date = generateDate();
  //     const newPost = {
  //       title: blogPost.title,
  //       date: blogPost.date,
  //       slug: blogPost.slug,
  //       content: blogPost.content,
  //     };
  //     getFirebase()
  //       .database()
  //       .ref()
  //       .child(`drafts/${blogPost.slug}`)
  //       .set(newPost)
  //       .then(() => props.history.push("/admin"));
  //   };

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
        <label htmlFor="content">Content: </label>
        <input
          name="content"
          type="text"
          value={blogPost.content}
          onChange={handleChange}
        />
        <label htmlFor="date">Date: </label>
        <input
          name="date"
          type="date"
          value={blogPost.date}
          onChange={handleChange}
        />
        <button type="button" onClick={publishArticle}>
          Publish Article
        </button>
        <button type="button">Save AS Draft</button>
      </form>
    </div>
  );
};

export default CreatePost;
