import React from 'react'

const SubMedia = () => {
  return (
    <>
            <span className="p-5">Short By: </span>
        <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-outline-info" onClick={() => filterMedia("gallery")}>Left</button>
  <button type="button" class="btn btn-outline-info">Middle</button>
  <button type="button" class="btn btn-outline-info">Right</button>
</div>
    </>
  )
}

export default SubMedia