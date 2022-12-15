import React from "react";

const ShowResult = () => {
  return (
    <>
      <div className="container bg-secondary p-2 text-dark bg-opacity-10">
        <div className="text-center fs-4">E-School</div>
        <div class="position-relative p-2">
          <div class="position-absolute top-0 start-0 p-1">1st Sem Result</div>
          <div class="position-absolute top-0 end-0">1st Sem Result</div>
        </div>
        <div className="p-1">Date : {new Date().toISOString() + ""} </div>
        <hr></hr>
        <table className="table m-2">
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
