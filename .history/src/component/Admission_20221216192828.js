import React from "react";

const Admission = () => {
  return (
    <div>
      <div className="text-center fs-3 fw-bold p-2 ">Admission Enquiry</div>.
      <div className="bg-secondary bg-gradient bg-opacity-25">
        <div className="text-center fs-4 fw-bold p-2">Enquiry from</div>
        <form className="contianer p-5 m-5">
          <div className="form-floating my-2">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admission;
