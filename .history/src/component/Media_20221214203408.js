import React from 'react'
import SubMedia from './SubMedia'

const btnClick = () =>{
    alert("hie")
}

const Media = () => {
    
  return (
    <>
    <div className='p-2 m-2 text-center'>
        <button className='btn m-1 btn-outline-primary' onClic={btnClick()}>
        Gallery
        </button>
        <button className='btn m-1 btn-outline-primary'>
        Video
        </button>
        <SubMedia/>
    </div>
    </>
  )
}

export default Media