import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddBlog from "./AddBlog";
import InfoBar from "./InfoBar";

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
<InfoBar/>
      <div></div>
      <div></div>
      <AddBlog />
    </div>
  );
};

export default AdminHome;
