import React, { useState } from "react";
import Data from "./All Data/alldata";
import CatMedia from "./CatMedia";
import MediaComp from './MediaComp'
import SubMedia from "./SubMedia";

const 
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
    {/* <SubMedia filterMedia={filterMedia}/> */}
    </div>
    </div>
    <MediaComp items = {items}/>
      
    </>
  );
};

export default Media;
