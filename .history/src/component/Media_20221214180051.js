import React from "react";

const Media = () => {
  return (
    <div>
      <div className="p-2 m-2 text-center">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio1"
            autocomplete="off"
            onclick="filterSelection('gallery')"
            checked
          />
          <label class="btn btn-outline-primary" for="btnradio1">
           Gallery
          </label>

          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio3"
            onclick="filterSelection('video')"
            autocomplete="off"
          />
          <label class="btn btn-outline-primary" for="btnradio3">
           Video
          </label>
        </div>
      </div>


      <div className="Container">
      <div class="card" style="width: 18rem;">
  <img src="https://sonawaneteju4.github.io/Portfolio_me/img/personal.jpeg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>


    </div>
  );
};

export default Media;
