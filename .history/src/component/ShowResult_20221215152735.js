import React, {useState} from "react";
import RData from "./resultData";


const ShowResult = (result) => {
    
  return (
    <>
      <div className="container bg-secondary p-2 text-dark bg-opacity-10">
      {
        result.map((elem)=>{
            const {
                id,
                sName,
                sSeetN,
                mName,
                date,
                yrResult,
                semResult,
                sub1Name,
                sub1ObtMark,
                sub1TotalMark,
                sub2Name,
                sub2ObtMark,
                sub2TotalMark,
                sub3Name,
                sub3ObtMark,
                sub3TotalMark,
                sub4Name,
                sub4ObtMark,
                sub4TotalMark,
                sub5Name,
                sub5ObtMark,
                sub5TotalMark,

            } = elem;
            return(

      <>
        <div className="text-center fs-4">E-School</div>
        <div className="text-center fs-5">{yrResult} year {semResult} Sem Result</div>
        <div class="position-relative p-2">
          <div class="position-absolute top-0 start-0">Name :{sName} </div>
          <div class="position-absolute top-0 end-0">Exam Seat Number: {sSeetN} </div>
        </div>
        <div className="position-relative p-2">
        <div className="position-absolute end-0">Date :  {new Date().toLocaleString() + ""} </div>
          <div className="position-absolute">Mother Name:{mName}</div>
        </div>

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
              <th scope="row">{sub1Name}</th>
              <td>{sub1ObtMark} </td>
              <td>{sub1TotalMark}</td>
              <td>A+</td>
            </tr>
            <tr>
              <th scope="row">{sub2Name}</th>
              <td>{sub2ObtMark}</td>
              <td>{sub2TotalMark}</td>
              <td>A+</td>
            </tr>
            <tr>
              <th scope="row">{sub3Name}</th>
              <td>{sub3ObtMark}</td>
              <td>{sub3TotalMark}</td>
              <td>A+</td>
            </tr>
            <tr>
              <th scope="row"> 4</th>
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
                </>
                    );
                })}
        
      </div>
    </>
  );
};

export default ShowResult;
