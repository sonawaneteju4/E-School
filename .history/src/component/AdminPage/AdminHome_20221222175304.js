import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AddBlog from './AddBlog'

const AdminHome = () => {
    let navigate = useNavigate
    const auth = () =>{
        if(sessionStorage.getItem('token')){
            console.log(sessionStorage.getItem('token'))
            
        }
        else{
            navigate("/")
        }
    }
    useEffect(()=>{
    auth()
    },[]);
  return (
    <div>
        <AddBlog/>
    </div>
  )
}

export default AdminHome