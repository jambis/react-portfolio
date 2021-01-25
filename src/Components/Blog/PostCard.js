import React from "react";
import { Link } from "react-router-dom";

const PostCard = (props) => {
  const { title, content, slug } = props.data;

  return (
    <div className="PostCard">
      <p>Title - {title}</p>
      <p>Content - {content}</p>
      <Link to={`blog/${slug}`}>Read more...</Link>
    </div>
  );
};

export default PostCard;
