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
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
              </form>
            </div>
          </nav>
    </div>
  );
};

export default InfoBar;
