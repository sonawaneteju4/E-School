import React from 'react'
import SubMedia from './SubMedia'

const Media = () => {
    const btnClick = () =>{
        alert("hie")
    }
  return (
    <>
    <div className='p-2 m-2 text-center'>
        <button className='btn m-1 btn-outline-primary' onClick={btnClick()}>
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