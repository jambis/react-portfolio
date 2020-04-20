import React, { useContext } from "react";

import PostCard from "./PostCard";
import { PostsContext } from "../../Providers/PostsProvider";

const Blog = () => {
  const { posts } = useContext(PostsContext);

  const renderPostCards = () => {
    return posts.map((blog) => {
      return <PostCard key={blog.id} data={blog} />;
    });
  };

  return <div className="Blogpost-Container">{renderPostCards()}</div>;
};

export default Blog;
