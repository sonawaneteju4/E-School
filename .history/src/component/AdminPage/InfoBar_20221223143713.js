import React, { useEffect, useState } from "react";

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
      console.log(await res.json().name)
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
              <a className="navbar-brand">Hey...{getuser.name}</a>
              <form className="d-flex" role="search">
              <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          User Setting
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">{getuser.email}</a></li>
            <li><a className="dropdown-item" href="#">{getuser}</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">logOut</a></li>
          </ul>
        </li>
              </form>
            </div>
          </nav>
    </div>
  );
};

export default InfoBar;
