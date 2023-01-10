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
      <div className="container">
      <Link to="/"></Link>
      </div>
      <div className="container">

      </div>
      <AddBlog />
      <PostMedia/>
    </div>
  );
};

export default AdminHome;
