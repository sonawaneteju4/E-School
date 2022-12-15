import React,{useState} from "react";
import RData from "./resultData";
import ShowResult from "./ShowResult";

const Result = () => {
    const [result, setResult] = useState(RData);
    const filterResult = (mName, sSeetN) =>{
        if ( mName === mName)({

        }
    }

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
                // onChange={onChange}
                className="form-control"
                placeholder="Mother Name"
                aria-label="Mother Name"
              />
            </div>
          </div>
          <div className="text-center p-2">
          <button className="btn btn-outline-dark" >Get Result</button>
          </div>
        </form>
        <ShowResult result = {result}/>
      </div>
    </>
  );
};

export default Result;
