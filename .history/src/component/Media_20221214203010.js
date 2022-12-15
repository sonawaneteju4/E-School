import React from 'react'
import SubMedia from './SubMedia'

const Media = () => {
  return (
    <>
    <div className='p-2 m-2 text-center'>
        <button className='btn btn-primary'>
        Gallery
        </button>
        <button className='btn btn-primary'>
        Video
        </button>
        <SubMedia/>
    </div>
    </>
  )
}

export default Media