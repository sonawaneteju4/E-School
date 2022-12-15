import React, { useState } from "react";
import Data from "./All Data/alldata";
import { Link } from "react-router-dom";
// import Menu from "./All Data/alldata";

const Media = () => {
  const [items, setItems] = useState(Data);
  const filterItems = (cateItem) => {
           const updatedItems = Data.filter((curElem)=>{
            return curElem.categorey === cateItem;
           });
           setItems(updatedItems);
  }
  return (
    <>
      <div className="p-2 m-2 text-center">
       
        <button type="button" class="btn btn-outline-dark m-1" onClick={() => setItems(Data)}>All</button>
        <button type="button" class="btn btn-outline-dark m-1" onClick={() => filterItems("gallery")}>Gallery</button>
        <button type="button" class="btn btn-outline-dark m-1" onClick={() => filterItems("video")}>Video</button>
      </div>

      <div className="Container m-5 row row-cols-1 row-cols-md-2 g-4">
        {items.map((elem) => {
          const { id, link, tittle, description, categorey, coustomLink } =
            elem;
          return (
            <>

            <div className="card m-2" style={{ width: "18rem" }} key={id}>
              <div
                className="card-img-top img-fluid "
                >{link}</div>
              <div className="card-body">
                <h5 className="card-title"> {tittle}</h5>
                <p className="card-text">
                 {description}
                </p>
                <Link to={coustomLink} className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
                </>
          );
        })}
      </div>
    </>
  );
};

export default Media;
