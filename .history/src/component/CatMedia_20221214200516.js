import React from 'react'

const CatMedia = ({filterItems, curClem }) => {
  return (
    <>
      <div className="p-2 m-2 text-center">
      {catItems.map((curClem) => {
          return 
          <button type="button" class="btn btn-outline-dark m-1" onClick={() => filterItems("gallery")}>Gallery</button>
      })}
        {/* <button type="button" class="btn btn-outline-dark m-1" onClick={() => setItems(Data)}>All</button> */}
        <button type="button" class="btn btn-outline-dark m-1" onClick={() => filterItems("video")}>Video</button>
      </div>
    </>
  )
}

export default CatMedia
