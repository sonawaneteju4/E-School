import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddBlog from "./AddBlog";
import MiniNav from "./MiniNav";


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
      <div class="d-flex">
        <div class="p-2 bg-dark h-100 w-25 d-inline-block">
          <div class="list-group">

          </div>
          </div>
          </div>
    <div>
<AddBlog/>     
     
    </div>

  );
};

export default AdminHome;
