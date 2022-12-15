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
    <div>
    
    </div>
    <MediaComp items = {items}/>
      
    </>
  );
};

export default Media;
