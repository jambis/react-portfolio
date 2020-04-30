import React, { useContext, useEffect, useState } from "react";

import { PostsContextState } from "../../Providers/PostsProvider";

const ViewPost = (props) => {
  const { posts } = useContext(PostsContextState);
  const { slug } = props.match.params;

  const [data, setData] = useState(null);

  useEffect(() => {
    posts.some((post, i) => {
      if (post.slug === slug) {
        setData({
          title: post.title,
          date: post.date,
          content: post.content,
        });
        return true;
      } else if (post.slug !== slug && i === posts.length - 1) {
        console.log("redirect to 404");
      }
    });
  }, [slug, posts]);

  return (
    <div className="ViewPost">
      <h2>{data?.title}</h2>
      <p>{data?.date}</p>
      <p>{data?.content}</p>
    </div>
  );
};

export default ViewPost;
