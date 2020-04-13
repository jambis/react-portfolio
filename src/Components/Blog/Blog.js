import React, { useState, useEffect } from "react";

import { getFirebase } from "../../Utils/firebase";

import PostCard from "./PostCard";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    getFirebase()
      .database()
      .ref("posts")
      .orderByChild("date")
      .once("value")
      .then((snapshot) => postsObjectToArray(snapshot.val()));
  }, []);

  const postsObjectToArray = (objPosts) => {
    const arrPosts = [];

    for (let key in objPosts) {
      arrPosts.push(objPosts[key]);
    }

    setBlogPosts(arrPosts.reverse());
  };

  const renderPostCards = () => {
    return blogPosts.map((blog) => {
      return <PostCard data={blog} />;
    });
  };

  console.log(blogPosts);
  return <div className="Blogpost-Container">{renderPostCards()}</div>;
};

export default Blog;
