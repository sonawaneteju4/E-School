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
      <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
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
