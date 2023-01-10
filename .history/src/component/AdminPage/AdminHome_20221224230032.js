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
              <img src="/image/admin.png" height={50} width=></img>
          </div>
          </div>
          </div>
        
    <div className="contianer">
<AddBlog/>     
     
    </div>
    </div>

  );
};

export default AdminHome;
