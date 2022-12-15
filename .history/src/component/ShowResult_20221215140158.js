import React from "react";

const ShowResult = () => {
  return (
    <>
      <div className="container bg-secondary p-2 text-dark bg-opacity-10">
        <div className="text-center fs-4">E-School</div>
        <div className="">
        <div className="d-inline text-">1st Sem Result</div>
        <div className="d-inline">Exam Seat Number</div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShowResult;
