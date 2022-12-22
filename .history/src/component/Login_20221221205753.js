import React from "react";

const Login = () => {
  return (
    <>
      <form className="position-relativeposition-absolute top-50 start-50">
        
          <div className="container m-5 align-items-center mx-5">
            <div className="form-floating col-sm-7 mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating col-sm-7 mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword6"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
          <button className="btn btn-outline-primary">Login</button>
          <button className="btn btn-outline-primary mx-5">Reset</button>
          </div>
    
      </form>
    </>
  );
};

export default Login;
