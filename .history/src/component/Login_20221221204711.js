import React from 'react'

const Login = () => {
  return (
    <div className='p-5 mx-5 container'>
        <div className='container-sm mx-5'>
        <div className="form-floating">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword6" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
        </div>
        
    </div>
  )
}

export default Login