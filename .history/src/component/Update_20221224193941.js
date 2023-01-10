import React from "react";

const Update = () => {
  return (
    <div>
      <table classname="table  table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td><button className="btn btn-outline-secoundary" to="/">Follow Link</button></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td><button className="btn btn-outline-secoundary" to="/">Follow Link</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Update;
