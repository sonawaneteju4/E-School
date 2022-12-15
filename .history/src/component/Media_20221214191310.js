import React, { useState } from "react";
import Data from "./All Data/alldata";
import MediaComp from './MediaComp'

const Media = () => {
  const [items, setItems] = useState(Data);
  const filterItems = (cateItem) => {
           const updatedItems = Data.filter((curElem)=>{
            return curElem.categorey === cateItem;
           });
           setItems(updatedItems);
  }
  return (
    <>
      <div className="p-2 m-2 text-center">
        <button type="button" class="btn btn-outline-dark m-1" onClick={() => setItems(Data)}>All</button>
        <button type="button" class="btn btn-outline-dark m-1" onClick={() => filterItems("gallery")}>Gallery</button>
        <button type="button" class="btn btn-outline-dark m-1" onClick={() => filterItems("video")}>Video</button>
      </div>
    
    <MediaComp items = {items}/>
      
    </>
  );
};

export default Media;
