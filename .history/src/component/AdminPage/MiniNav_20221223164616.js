import React from 'react'
import { Link } from 'react-router-dom'

const MiniNav = () => {
  return (
    <div>
         <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/postmedia">Post Media</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/addblog">AddBlog</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/">Link</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link disabled">Disabled</Link>
  </li>
</ul>
    </div>
  )
}

export default MiniNav