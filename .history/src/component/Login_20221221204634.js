import React from 'react'

const Login = () => {
  return (
    <div className='p-5 m-5 container'>
        <div className='container-sm m'>
        <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control my-5" id="floatingPassword6" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
        </div>
        
    </div>
  )
}

export default Login