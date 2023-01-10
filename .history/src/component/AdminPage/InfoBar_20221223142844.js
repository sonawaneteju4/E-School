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
    //   setgetuser(await res.json());
      console.log(await res.json())
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    userDetails();
  }, []);
  return (
    <div>
        {}
      {getuser.map((curElem) => {
        return (
          <nav className="navbar bg-light">
            <div className="container-fluid">
              <a className="navbar-brand">{curElem.name}</a>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>
        );
      })}
    </div>
  );
};

export default InfoBar;
