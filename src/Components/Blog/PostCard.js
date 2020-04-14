import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ data }) => {
  return (
    <div className="PostCard">
      <p>Title - {data.title}</p>
      <p>Date - {data.date}</p>
      <Link
        to={{
          pathname: `blog/${data.slug}`,
          state: { data: data },
        }}
      >
        Read more...
      </Link>
    </div>
  );
};

export default PostCard;
