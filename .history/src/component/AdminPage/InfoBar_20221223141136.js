import React,{useEffect, useState} from 'react'

const InfoBar = () => {
     const [getuser, setgetuser] = useState([])

  useEffect = async (getuser) => {
    try {
      const res =await fetch("http://localhost:5000/api/auth/getuser",{

          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'auth-token' : sessionStorage.getItem('token')
          }
      }
      );
      setgetuser = await res.json();
      setgetuser(data)
      console.log(data)
    } catch (error) {
      console.log(error)

    }
  }
  return (
    <div>
        { getuser.map((items)=>
        <nav className="navbar bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">{items.name}</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>)}
    </div>
  )
}

export default InfoBar