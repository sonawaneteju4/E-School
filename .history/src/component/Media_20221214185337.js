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
        {/* <div
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <button
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio3"
            autocomplete="off"
          >

          <label className="btn btn-outline-primary" for="btnradio3">
            All
          </label>
          </button>
          <button
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            autocomplete="off"
            onClick={() => filterItems('gallery')}
            checked
          >
          <label className="btn btn-outline-primary" for="btnradio1">
            Gallery
          </label>
          </button>
          <button
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio3"
            onClick={() => filterItems('video')}
            autocomplete="off"
          >
          <label className="btn btn-outline-primary" for="btnradio3">
            Video
          </label>
          </button>
        </div> */}
        <button type="button" class="btn btn-outline-dark m-1" onClick={()}>All</button>
        <button type="button" class="btn btn-outline-dark m-1" onClick={()}>Gallery</button>
        <button type="button" class="btn btn-outline-dark m-1" onClick={()}>Video</button>
      </div>

      <div className="Container m-5 row row-cols-1 row-cols-md-2 g-4">
        {items.map((elem) => {
          const { id, link, tittle, description, categorey, coustomLink } =
            elem;
          return (
            <>

            <div className="card m-2" style={{ width: "18rem" }}>
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
