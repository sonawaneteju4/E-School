import React,{useEffect, useState} from 'react'

const InfoBar = () => {
     const [getuser, setgetuser] = useState([])

   const userDetails = async (getuser) => {
    try {
      const res =await fetch("http://localhost:5000/api/auth/getuser",{

          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'auth-token' : sessionStorage.getItem('token')
          }
      }
      );
      setgetuser(await res.json());
    } catch (error) {
      console.log(error)

    }
  }
   useEffect(()=>{
    userDetails()
   },[])
  return (
    <div>
        { userDetails.map((items)=> {
            return(

            )
        
        })}
    </div>
  )
}

export default InfoBar