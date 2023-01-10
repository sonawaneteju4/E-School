import React, { useEffect, useState } from 'react'




const BlogCont = () => {
  const API = "http://localhost:5000/api/blog/fetchblog"
  const [blog, setblog] = useState([])
 
  const fetchApiData = async(url) => {
    try {
      const res =await fetch(url);
      const data = await res.json();
      setblog(data)
      console.log(data)
    } catch (error) {
      console.log(error)
      
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
  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4 contianer p-5">
      {
      blog.map((item)=>

        <div className="col" key={item.id}>
    <div className="card">
      {/*{/*<img src="/image/yoga.jpeg" className="card-img-top" alt="..."/>*/}
      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <h6 className="">Author:{new Date(item.Date).toGMTString()}</h6>
        <p className="card-text">{item.description}</p>
        <p className="card-text"><small className="text-muted">
          By {!author ? "Unknown" : author} on {item.author}
          </small>
          </p>
      </div>
    </div>
  </div>
)}
</div>

    </>
  )
}

export default BlogCont