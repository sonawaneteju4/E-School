import React from "react";

const Result = () => {
  return (
    <>
      <div className="container bg-">
        <form>
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
                placeholder="Mother Name"
                aria-label="Mother Name"
              />
            </div>
          </div>
          <div className="text-center p-2">
          <button className="btn btn-outline-dark">Get Result</button>
          </div>
        </form>
        <Shw
      </div>
    </>
  );
};

export default Result;
