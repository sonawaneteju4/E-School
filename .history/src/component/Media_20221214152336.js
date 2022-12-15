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
            data-filter=".gallery"
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
            data-filter=".video"
            autocomplete="off"
          />
          <label class="btn btn-outline-primary" for="btnradio3">
           Video
          </label>
        </div>
      </div>
    </div>
  );
};

export default Media;
