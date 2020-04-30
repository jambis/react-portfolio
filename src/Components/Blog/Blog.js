import React, { useContext } from "react";

import PostCard from "./PostCard";
import { PostsContextState } from "../../Providers/PostsProvider";

const Blog = () => {
  const { posts } = useContext(PostsContextState);

  const renderPostCards = () => {
    return posts.map((blog) => {
      return <PostCard key={blog.id} data={blog} />;
    });
  };

  return <div className="Blogpost-Container">{renderPostCards()}</div>;
};

export default Blog;
