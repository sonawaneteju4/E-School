import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddBlog from "./AddBlog";

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
      {sessionStorage.getItem("token")?(
      <div>
      
      </div>):(

        <div>

        )
      </div>
      <AddBlog />
    </div>
  );
};

export default AdminHome;
