import React from 'react'

const SubMedia = (filterMedia) => {
  return (
    <>
            <span className="p-5">Short By: </span>
        <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-outline-info" onClick={() => filterMedia("event")}>Left</button>
  <button type="button" class="btn btn-outline-info" onClick={() => filterMedia("event")}>Middle</button>
  <button type="button" class="btn btn-outline-info" onClick={() => filterMedia("event")}>Right</button>
</div>
    </>
  )
}

export default SubMedia