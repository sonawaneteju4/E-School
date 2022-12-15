import React from 'react'
import SubMedia from './SubMedia'



const Media = () => {
    let navigate = useNavigate();
  return (
    <>
    <div className='p-2 m-2 text-center'>
        <button className='btn m-1 btn-outline-primary' >
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