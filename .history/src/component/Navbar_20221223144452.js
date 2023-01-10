import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

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
  useEffect(() => {}, []);
  const handleLogOut = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid text-white">
          <Link className="navbar-brand" to="/">
            E-School
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-house"
                    viewBox="0 0 16 16"
                    >
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                  </svg>  */}
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/newblog">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/academics">
                  Academics
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/media/gallery">
                  Media
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Student Section
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/result">
                      Result
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Notes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Imp Link
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admission
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/admission">
                      Enquiry
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Admission Status
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Contact Us
                </Link>
              </li>
              <form class="d-flex" role=""></form>
            </ul>
          </div>
        </div>
        {sessionStorage.getItem("token") ? (
          <div>
          {/* <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle text-light"
              to="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              user.name
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="">
                  user.email
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" onClick={handleLogOut} to="/">
                  LogOut
                </Link>
              </li>
            </ul>
          </li> */}
            <button class="btn btn-outline-light mx-3" onClick={handleLogOut}  type="submit">Logout {getuser.name}</button>
          </div>
        ) : (
          <div></div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
