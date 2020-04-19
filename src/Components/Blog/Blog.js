import React, { useState, useEffect } from "react";

import { firestore } from "../../Utils/firebase";
import { collectIdsAndDocs } from "../../Utils/helper";

import PostCard from "./PostCard";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  let unsubscribe = null;

  console.log(blogPosts);
  useEffect(() => {
    getBlogPosts();

    return () => {
      console.log("unsubscribing");
      unsubscribe();
    };
  }, []);

  const getBlogPosts = async () => {
    unsubscribe = firestore.collection("posts").onSnapshot((snapshot) => {
      const posts = snapshot.docs.map(collectIdsAndDocs);
      setBlogPosts(posts);
    });
  };

  const renderPostCards = () => {
    return blogPosts.map((blog) => {
      return <PostCard key={blog.id} data={blog} />;
    });
  };

  return <div className="Blogpost-Container">{renderPostCards()}</div>;
};

export default Blog;
