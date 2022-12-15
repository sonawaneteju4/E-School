import React from "react";

const Media = () => {
  return (
    <div>
      <div className="p-2 m-2">
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
            checked
          />
          <label class="btn btn-outline-primary" for="btnradio1">
            Radio 1
          </label>

          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio3"
            autocomplete="off"
          />
          <label class="btn btn-outline-primary" for="btnradio3">
            Radio 3
          </label>
        </div>
      </div>
    </div>
  );
};

export default Media;
