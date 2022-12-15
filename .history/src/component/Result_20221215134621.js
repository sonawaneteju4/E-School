import React from "react";

const Result = () => {
  return (
    <>
      <div className="container p-2">
        
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
      </div>
    </>
  );
};

export default Result;
