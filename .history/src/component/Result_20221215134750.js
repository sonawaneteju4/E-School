import React from "react";

const Result = () => {
  return (
    <>
      <div className="container p-2">
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
          <button className="btn m-1 btn-outline-primary">Get Result</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Result;
