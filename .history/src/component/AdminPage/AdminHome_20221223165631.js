import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
     
     
    </div>

  );
};

export default AdminHome;
