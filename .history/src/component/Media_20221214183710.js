import React, { useState } from "react";
import Data from "./All Data/alldata";
import { Link } from "react-router-dom";
// import Menu from "./All Data/alldata";

const Media = () => {
  const [items, setItems] = useState(Data);
  return (
    <>
      <div className="p-2 m-2 text-center">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio3"
            onclick="filterSelection('video')"
            autocomplete="off"
          />
          <label className="btn btn-outline-primary" for="btnradio3">
            All
          </label>
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            autocomplete="off"
            onclick="filterSelection('gallery')"
            checked
          />
          <label className="btn btn-outline-primary" for="btnradio1">
            Gallery
          </label>
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio3"
            onclick="filterSelection('video')"
            autocomplete="off"
          />
          <label className="btn btn-outline-primary" for="btnradio3">
            Video
          </label>
        </div>
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
                <Link to=`{coustomLink}`` className="btn btn-primary">
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
