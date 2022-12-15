import React from 'react'
import SubMedia from './SubMedia'

const Media = () => {
  return (
    <>
    <div className=''>
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