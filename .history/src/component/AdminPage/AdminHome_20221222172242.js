import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AddBlog from './AddBlog'

const AdminHome = () => {
    navigate = useNavigate
    useEffect(()=>{
    if(sessionStorage.getItem('token')){

    }
    })
    else{
        navigate("/")
    }
  return (
    <div>
        <AddBlog/>
    </div>
  )
}

export default AdminHome