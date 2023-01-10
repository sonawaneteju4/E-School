import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AddBlog from './AddBlog'

const AdminHome = () => {
    let navigate = useNavigate
    useEffect(()=>{
    if(!sessionStorage.getItem('token')){
       na
    }
    else{
       
    }
    },[]);
  return (
    <div>
        <AddBlog/>
    </div>
  )
}

export default AdminHome