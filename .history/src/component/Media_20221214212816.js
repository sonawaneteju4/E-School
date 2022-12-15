import React from 'react'
import SubMedia from './SubMedia'
import {  Routes, Route } from "react-router-dom";

import { useNavigate } from "react-router-dom";


const Media = () => {
    let navigate = useNavigate();
    const HandleClick = (e) =>{
        e.privent
    
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
        <Routes>
            <Route exact path="/gallery" element={<SubMedia />}></Route>
          </Routes>
    </div>
    </>
  )
}

export default Media