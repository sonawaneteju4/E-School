import React from "react";

const SubMedia = (filterMedia, catItems) => {
  return (
    <>
      <span className="p-5">Short By: </span>
      <div class="btn-group" role="group" aria-label="Basic example">
        {catItems.map((curClem) => { 
            return  <button
            type="button"
            class="btn btn-outline-info"
            onClick={() => filterMedia(curClem)}
          >
            {curClem}
          </button>
        })}
       
    </>
  );
};

export default SubMedia;
