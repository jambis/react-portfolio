import React, { useState, useEffect } from "react";
import { getFirebase } from "../../Utils/firebase";

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

  console.log(blogPosts);
  return <>Blog</>;
};

export default Blog;
