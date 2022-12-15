import React from "react";


const ShowResult = () => {
  return (
    <>
      <div className="container bg-secondary p-2 text-dark bg-opacity-10">
        <div className="text-center fs-4">E-School</div>
        <div className="text-center fs-5">2nd Yr Result</div>
        <div class="position-relative p-2">
          <div class="position-absolute top-0 start-0">1st Sem Result</div>
          <div class="position-absolute top-0 start-50">Exam Seat Number: </div>
        </div>
          <div class="">Mother Name: AABBCC</div>
        <div className="p-1">Date : {new Date().toLocaleString() + ""} </div>
        <hr></hr>
        <table className="table m-2">
          <thead>
            <tr>
              <th scope="col">Subject</th>
              <th scope="col">Mark</th>
              <th scope="col">Out oFF</th>
              <th scope="col">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Subject 1</th>
              <td>20</td>
              <td>20</td>
              <td>A+</td>
            </tr>
            <tr>
              <th scope="row">Subject 2</th>
              <td>20</td>
              <td>20</td>
              <td>A+</td>
            </tr>
            <tr>
              <th scope="row">Subject 3</th>
              <td>20</td>
              <td>20</td>
              <td>A+</td>
            </tr>
            <tr>
              <th scope="row">Subject 4</th>
              <td>20</td>
              <td>20</td>
              <td>A+</td>
            </tr>
            <tr>
              <th scope="row">Subject 5</th>
              <td>20</td>
              <td>20</td>
              <td>A+</td>
            </tr>
          </tbody>
        </table>
        <div className="text-end">
        <p className="d-inline-block ps-5 px-5 text-start">Total Marks: </p>
        <p className="d-inline-block ps-5 px-5 text-center">Mark Obtain: </p>
        <p className="d-inline-block ps-5 px-5 text-end">Grade: </p>
        </div>
        <div className="text-center ">
        <button className="btn m-1 btn-outline-primary" onClick={()=> window.print()}>Print Result</button>
        </div>
      </div>
    </>
  );
};

export default ShowResult;
