import React from 'react'

const Admission = () => {
  return (
    <div>
         <div className="text-center fs-3 fw-bold p-2 ">Admission Enquiry</div>.
         
         <div className='bg-secondary bg-gradient bg-opacity-25'>

         <div className='text-center fs-4 fw-bold p-2'>Enquiry from</div>
         <form>
         <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
         </form>
         </div>
    </div>
  )
}

export default Admission