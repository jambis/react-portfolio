import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { firestore } from "../../Utils/firebase";
import { collectIdsAndDocs } from "../../Utils/helper";

import PostCard from "./PostCard";

const Admin = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    getBlogPosts("posts", setBlogPosts);
    // getBlogPosts("drafts", setDrafts);
  }, []);

  const getBlogPosts = async (articles, cb) => {
    const snapshot = await firestore.collection(articles).get();

    const posts = snapshot.docs.map(collectIdsAndDocs);

    cb(posts);
  };

  const renderPostCards = (blogposts) => {
    return blogposts.map((blog) => {
      return <PostCard key={blog.id} data={blog} />;
    });
  };

  return (
    <div>
      {renderPostCards(blogPosts)}
      {renderPostCards(drafts)}
      <Link to="/admin/createpost">Create a new blog post</Link>
    </div>
  );
};

export default Admin;
