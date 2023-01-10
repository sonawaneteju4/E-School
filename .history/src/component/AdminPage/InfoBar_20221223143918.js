import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const InfoBar = () => {
  const [getuser, setgetuser] = useState([]);

  const userDetails = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/getuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": sessionStorage.getItem("token"),
        },
      });
      setgetuser(await res.json());
      console.log(await res.json().name);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    userDetails();
  }, []);
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand">Hey...{getuser.name}</Link>
          <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
        </div>
      </nav>
    </div>
  );
};

export default InfoBar;
