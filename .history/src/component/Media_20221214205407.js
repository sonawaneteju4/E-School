import React from 'react'
import SubMedia from './SubMedia'
import { useNavigate } from "react-router-dom";


const Media = () => {
    let navigate = useNavigate();
    const HandleClick = (e) =>{
        e.preventDefault();
        navigate("/gallery")
    }
  return (
    <>
    <div className='p-2 m-2 text-center'>
        <button className='btn m-1 btn-outline-primary' onClick={HandleClick}>
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