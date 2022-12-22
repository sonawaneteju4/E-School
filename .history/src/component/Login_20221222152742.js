import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentails, setCredentails] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentails.email,
        password: credentails.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token
      sessionStorage.setItem("token", json.authToken);
      navigate("/about");
    } else {
    console.log("Enter Correct Details");
    }
  };
  const onChange = (e) => {
    setCredentails({ ...credentails, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <section className="vh-100" style={{ backgroundColor: " #508bfc" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card shadow-2-strong">
                  <div className="card-body p-5 text-center">
                    <h1 className="mb-5">E-School</h1>
                    <h3 className="mb-5">Sign in</h3>

                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput email"
                        name="email"
                        onChange={onChange}
                        value={credentails.email}
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="password"
                        class="form-control"
                        id="floatingPassword password"
                        placeholder="Password"
                        name="password"
                        onChange={onChange}
                        value={credentails.password}
                      />
                      <label for="floatingPassword">Password</label>
                    </div>

                    <button
                      className=" btn btn-outline-info  btn-block"
                      type="submit"
                    >
                      Login
                    </button>

                    {/* <hr className="my-4"/>

            <button className="btn btn-lg btn-block btn-primary" 
              type="">Create</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default Login;
