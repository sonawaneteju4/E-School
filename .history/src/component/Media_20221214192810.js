import React, { useState } from "react";
import Data from "./All Data/alldata";
import CatMedia from "./CatMedia";
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
    <div>
    
    <CatMedia filterItems={filterItems}/>
    <div>
        <span className="p-5">Short By: </span>
        <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-outline-info">Left</button>
  <button type="button" class="btn btn-outline-info">Middle</button>
  <button type="button" class="btn btn-outline-info">Right</button>
</div>
    </div>
    </div>
    <MediaComp items = {items}/>
      
    </>
  );
};

export default Media;
