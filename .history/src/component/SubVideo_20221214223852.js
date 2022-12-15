import React from 'react'
import Video from './all/video'
import CatVideo from './CatVideo'

const allCatValues =[...new Set(Video.map((curElem) => 
  curElem.categorey
 )), "All"]
 console.log(allCatValues)
const SubVideo = () => {
  const [items, setItems] = useState(Video);
  return (
    <div>
      <div>
        <CatVideo filterItems={filterItems} catItems={catItems}/>
      </div>

    </div>
  )
}

export default SubVideo