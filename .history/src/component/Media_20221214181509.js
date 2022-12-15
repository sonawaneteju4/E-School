import React, { useState } from "react";
import Data from "./All Data/alldata";
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

      <div className="Container">


        {
            items.map((elem)=> {

            })
        }
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://sonawaneteju4.github.io/Portfolio_me/img/personal.jpeg"
            className="card-img-top img-fluid "
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Media;
