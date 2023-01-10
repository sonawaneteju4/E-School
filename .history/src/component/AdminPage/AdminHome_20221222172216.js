import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AddBlog from './AddBlog'

const AdminHome = () => {
    useNavigate
    useEffect(()=>{
    if(sessionStorage.getItem('token')){

    }
    })
    else{

    }
  return (
    <div>
        <AddBlog/>
    </div>
  )
}

export default AdminHome