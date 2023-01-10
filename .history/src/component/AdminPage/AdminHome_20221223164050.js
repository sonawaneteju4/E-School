import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddBlog from "./AddBlog";
import PostMedia from "./PostMedia";

const AdminHome = () => {
  let navigate = useNavigate;
  const auth = () => {
    if (sessionStorage.getItem("token")) {
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    auth();
  }, []);
  return (
    //use section Storage::

    <div>
      <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">Active</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/addblog">Add</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/">Link</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link disabled">Disabled</Link>
  </li>
</ul>
      <div className="container">
      <Link className="nav-link" to="/">Post New Blog</Link>
      </div>
      <div className="container">
      <Link className="nav-link" to="/">Post New Media</Link>
      </div>

      <AddBlog />
      <PostMedia/>
    </div>
  );
};

export default AdminHome;
