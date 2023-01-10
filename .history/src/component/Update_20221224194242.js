import React, {useEffect, useState} from "react";

const Update = () => {
    const API = "http://localhost:5000/api/update/fetchupdate"
    const [update, setupdate] = useState([])
   
    const fetchApiData = async(url) => {
      try {
        const res =await fetch(url);
        const data = await res.json();
        setupdate(data)
        console.log(data)
      } catch (error) {
        console.log(error)
        
      }
    }
  
    useEffect(()=>{
    fetchApiData(API)
  },[])
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
        { update.map((item)=>
        <tbody>
          <tr>
            <th scope="row">{update.ti}</th>
            <td>Mark</td>
            <td>Otto</td>
            <td><button className="btn btn-outline-secoundary" to="/">Follow Link</button></td>
          </tr>
        </tbody>
        ) }
      </table>
    </div>
  );
};

export default Update;
