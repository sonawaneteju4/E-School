import React from "react";

const Result = () => {
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Exam Seat Number"
              aria-label="First name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
