import React, { useState }  from 'react'
import Video from './all/video'
import CatVideo from './CatVideo'

const allCatValues =[...new Set(Video.map((curElem) => 
  curElem.categorey
 )), "All"]
 console.log(allCatValues)
const SubVideo = () => {
  const [items, setItems] = useState(Data);
  const [catItems, setCatItems] = useState(allCatValues)
  const filterItems = (categorey) => {
            if (categorey === "All"){
                setItems(Data);
                return
            }
           const updatedItems = Data.filter((curElem)=>{
            return curElem.categorey === categorey;
           });
           setItems(updatedItems);
  }
  return (
    <>
      <div>
        <CatVideo filterItems={filterItems} catItems={catItems}/>
      </div>
      <div>
        <V
      </div>

    </>
  )
}

export default SubVideo