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
   

    <div>
      <div></div>
      <div></div>
      <AddBlog />
    </div>
  );
};

export default AdminHome;
