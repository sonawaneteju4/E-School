import React from "react";

const Login = () => {
  return (
    <>
      <form className="">
      <section className="vh-100" style={{backgroundColor:" #508bfc"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong">
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Sign in</h3>

            <div className="form-outline mb-4">
              <label className="form-label" for="typeEmailX-2">Email</label>
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Enter Your Email Id" />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" for="typePasswordX-2">Password</label>
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
            </div>

            <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

            <hr className="my-4"/>

            <button className="btn btn-lg btn-block btn-primary" 
              type="submit"> Sign in with google</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        
          {/* <div className="container justify-content-center m-5 ">
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
     */}
      </form>
    </>
  );
};

export default Login;
