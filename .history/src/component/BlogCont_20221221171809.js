import React, { useEffect, useState } from 'react'




const BlogCont = () => {
  const API = "localhost:5000/api/blog/fetchblog"
  const [blog, setblog] = useState([])
 
  const getData = async() => {
    try {
      const res
    } catch (error) {
      
    }
  }

  useEffect(()=>{
  fetchApiData(API)
},[])

// const resopnce = await fetch("localhost:5000/api/blog/fetchblog").then((result)=>{
//   result.json().then((resp)=>{
//     setblog(resp)
//   })
//   .catch(err => {
//     console.log("error:", err);
//   });
// })
// console.log(resopnce)
console.log(blog)
  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4 contianer p-5">
      {
      blog.map((item)=>

        <div className="col">
    <div className="card">
      {/*{/*<img src="/image/yoga.jpeg" className="card-img-top" alt="..."/>*/}
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
      </div>
    </div>
  </div>
)}
</div>

    </>
  )
}

export default BlogCont