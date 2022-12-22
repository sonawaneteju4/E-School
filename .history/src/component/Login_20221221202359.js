import React from 'react'

const Login = () => {
  return (
    <div className='p-5 m-5 container'>
        <div className='container my-5'>
        <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
        </div>
        
    </div>
  )
}

export default Login