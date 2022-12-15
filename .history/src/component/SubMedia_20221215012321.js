import React, { useState } from "react";
import Data from "./alldata";
import CatMedia from "./CatMedia";
import MediaComp from './MediaComp'


const allCatValues =[...new Set(Data.map((curElem) => 
 curElem.categorey
)), "All"]
console.log(allCatValues)
const SubMedia = () => {
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
    
    <CatMedia filterItems={filterItems} catItems={catItems}/>
    <div class="row row-cols-1 row-cols-md-2 g-4">
    <MediaComp items = {items}/>
      <div></div>
    </>
  );
};

export default SubMedia;
