import React from "react";
import { Link } from "react-router-dom";

import { firestore } from "../../Utils/firebase";

const PostCard = ({ data }) => {
  const handleRemove = async () => {
    await firestore.doc(`posts/${data.id}`).delete();
  };

  return (
    <div className="PostCard">
      <p>Title - {data.title}</p>
      <p>Content - {data.content}</p>
      <button type="button" onClick={handleRemove}>
        Delete
      </button>
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
