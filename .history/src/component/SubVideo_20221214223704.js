import React from 'react'
import Video from './all/video'
import CatVideo from './CatVideo'

const allCatValues =[...new Set(Data.map((curElem) => 
  curElem.categorey
 )), "All"]
 console.log(allCatValues)
const SubVideo = () => {
  return (
    <div>
      <div>
        <CatVideo/>
      </div>

    </div>
  )
}

export default SubVideo