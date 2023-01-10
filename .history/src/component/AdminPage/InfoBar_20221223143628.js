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
              <Link className="navbar-brand">Hey...{getuser.name}</Link>
              <form className="d-flex" role="search">
              <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          User Setting
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">{getuser.email}</Link></li>
            <li><Link className="dropdown-item" href="#">{getuser}</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="#">logOut</Link></li>
          </ul>
        </li>
              </form>
            </div>
          </nav>
    </div>
  );
};

export default InfoBar;
