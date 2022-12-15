import React, { useState }  from 'react'
import Video from './all/video'
import CatVideo from './CatVideo'
import VideoComp from './VideoComp'

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
        <VideoComp items = {items}/>
      </div>

    </>
  )
}

export default SubVideo