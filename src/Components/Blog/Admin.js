import React, { useContext } from "react";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";

import AdminPost from "./AdminPost";
import { PostsContext } from "../../Providers/PostsProvider";

const Admin = () => {
  const { posts, drafts } = useContext(PostsContext);

  const renderPosts = (article) => {
    return article.map((post) => {
      return <AdminPost key={post.id} data={post} />;
    });
  };

  return (
    <>
      <List>
        {renderPosts(posts)}
        {renderPosts(drafts)}
      </List>
      <Link to="/admin/createpost">Create a new blog post</Link>
    </>
  );
};

export default Admin;
