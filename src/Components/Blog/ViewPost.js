import React from "react";

const ViewPost = (props) => {
  const { data } = props.location.state;

  console.log(data);
  return (
    <div className="ViewPost">
      <h2>{data.title}</h2>
      <p>{data.date}</p>
      <p>{data.content}</p>
    </div>
  );
};

export default ViewPost;
