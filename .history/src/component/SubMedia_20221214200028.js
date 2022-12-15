import React from 'react'

const SubMedia = (filterMedia, catItems) => {
  return (
    <>
            <span className="p-5">Short By: </span>
        <div class="btn-group" role="group" aria-label="Basic example">
            {
                catItems.map
            }
  <button type="button" class="btn btn-outline-info" onClick={() => filterMedia("event")}>Left</button>
  <button type="button" class="btn btn-outline-info" onClick={() => filterMedia("event College")}>Middle</button>
  <button type="button" class="btn btn-outline-info" onClick={() => filterMedia("Days College")}>Right</button>
</div>
    </>
  )
}

export default SubMedia