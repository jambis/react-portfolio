import React, { useContext } from "react";
import { Link } from "react-router-dom";

import PostCard from "./PostCard";
import { PostsContext } from "../../Providers/PostsProvider";

const Admin = () => {
  const { posts, drafts } = useContext(PostsContext);

  const renderPosts = (article) => {
    return article.map((post) => {
      return <PostCard key={post.id} data={post} />;
    });
  };

  return (
    <div>
      {renderPosts(posts)}
      {renderPosts(drafts)}
      <Link to="/admin/createpost">Create a new blog post</Link>
    </div>
  );
};

export default Admin;
