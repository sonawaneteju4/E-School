import React, { useEffect } from 'react'
import AddBlog from './AddBlog'

const AdminHome = () => {
    useEffect(()=>{
    if(sessionStorage.getItem('t'))
    })
  return (
    <div>
        <AddBlog/>
    </div>
  )
}

export default AdminHome