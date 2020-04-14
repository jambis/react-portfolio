import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <Link to="/admin/createpost">Create a new blog post</Link>
    </div>
  );
};

export default Admin;
