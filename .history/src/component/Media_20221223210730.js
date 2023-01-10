import React, { useEffect, useState } from 'react'
import SubMedia from './SubMedia'
import {  Routes, Route } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import SubVideo from './SubVideo';
import MediaCat from './MediaCat';


const Media = () => {
    // let navigate = useNavigate();


    // useEffect(()=>{
      
    // })
    // const HandleClick = (e) =>{
    //     e.preventDefault();
    //     navigate("media/gallery")
    
    // }
    // const HandleVideo = (e)=>{
    //     e.preventDefault();
    //     navigate("media/video");
    // }
  return (
    <>

        
        {/* <MediaCat/> */}
    {/* <div className='p-2 m-2 text-center'>
        <button className='btn m-1 btn-outline-primary' onClick={HandleClick}>
        Gallery
        </button>
        <button className='btn m-1 btn-outline-primary' onClick={HandleVideo}>
        Video
        </button>
        <hr></hr>

        <Routes>
            <Route path='/media'>

            <Route path="gallery" element={<SubMedia />}></Route>
            <Route path="video" element={<SubVideo />}></Route>
            </Route>
          </Routes>
    </div> */}
    </>
  )
}

export default Media