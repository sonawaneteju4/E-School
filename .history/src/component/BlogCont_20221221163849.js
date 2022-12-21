import React, { useEffect } from 'react'



const [blog, setblog] = useState([])
useEffect(()=>{
  fetch("localhost:5000/api/blog/fetchblog").then((result)=>{
    result.json().then((resp)=>{
      setblog(resp)
    })
  })
},[])
const BlogCont = () => {
  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4 contianer p-5">
      {
      blog.map((item)=>)

        <div className="col">
    <div className="card">
      {/*{/*<img src="/image/yoga.jpeg" className="card-img-top" alt="..."/>*/}
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text"></p>
      </div>
    </div>
  </div>
}
</div>

    </>
  )
}

export default BlogCont