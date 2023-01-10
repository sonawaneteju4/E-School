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
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle mx-5"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             Hey ...{getuser.name}
            </button>
            <ul className="dropdown-menu m">
              <li>
                <Link className="dropdown-item m" href="#">
                  Action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item m" href="#">
                  Another action
                </Link>
              </li>
              <li>
                <Link className="dropdown-item m" href="#">
                  Something else here
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default InfoBar;
