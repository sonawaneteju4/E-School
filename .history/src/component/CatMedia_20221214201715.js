import React from 'react'

const CatMedia = ({filterItems, catItems}) => {
  return (
    <>
      <div className="p-2 m-2 text-center">
      {
      catItems.map((curClem) => {
    return <button type="button" key class="btn btn-outline-dark m-1" onClick={() => filterItems(curClem)}>{curClem}</button>
    })}
      </div>
    </>
  )
}

export default CatMedia
