import React from "react";

const Result = () => {
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Exam Seat Number"
              aria-label="Exam Seat Number"
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
