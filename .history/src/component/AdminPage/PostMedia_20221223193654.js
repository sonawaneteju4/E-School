import React, {useState} from "react";
import MiniNav from "./MiniNav";


const categories = [
  {label:"Select an Option", value: "default"},
  {label:"Award", value: "Award"},
  {label:"Event", value: "Event"},
  {label:"Parent Meeting", value: "Parent Meeting"},
  {label:"Student Gallery", value: "Student Gallery"},
]


const PostMedia = () => {
  const [msg, setmsg] = useState();
    const [blog, setBlog] = useState({title: "", description: "", link: "",coustomLink:"",subCategory:"",category:"" })

    
    const {name, description, link, coustomLink,subCategory,category} = blog
    let handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:5000/api/blog/addblog",{
                method: "POST",
                headers: {
                    'Content-Type':"application/json",
                    'auth-token' : sessionStorage.getItem('token') 
                },
                body: JSON.stringify({
                  title: blog.title,
                  description: blog.description,
                  link: blog.link,
                  coustomLink: blog.coustomLink,
                  subCategory:blog.subCategory,
                  category:blog.category,
                }),
            });
            let resJson = await res.json();
            console.log(resJson)
      if (res.status === 200) {
        setBlog({title: "", description: "", tag: ""})
        setmsg("Blog Post successfully");
      } else {
        setmsg("Some error occured");
      }
        } catch (err) {
            console.log(err);
        }
    }
    const onChange = (e)=>{
        setBlog({...blog, [e.target.name]: e.target.value})
    }
    const onSelectValue = (e)=>{
      if(e.target.value === "default"){
        setBlog({...blog, [e.target.name]: ""})
      }
      else{
        setBlog({...blog, [e.target.name]: e.target.value})
      }
    }
  return (
    <div>
        <MiniNav/>
      <div className="">
        <form
          className=""
           onSubmit={handleSubmit}
        >
          <section className="vh-100" style={{ backgroundColor: " #508bfc" }}>
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="card shadow-2-strong">
                    <div className="card-body p-5 text-center">
                      <h1 className="mb-5">Add New Blog</h1>
                      <div className="form-floating mb-3">
                        <input
                          type="title"
                          className="form-control"
                          id="floatingInput title"
                          name="title"
                          onChange={onChange}
                          value={blog.title}
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Title</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="link"
                          className="form-control"
                          id="floatingInput link"
                          name="link"
                          onChange={onChange}
                          value={blog.link}
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Link</label>
                      </div>
                      <div className="form-floating mb-3">
                        <textarea
                          type="description"
                          className="form-control"
                          id="floatingTextarea2 description"
                          name="description"
                          style={{ height: "100px" }}
                          onChange={onChange}
                          value={blog.description}
                          placeholder="name@example.com"
                          />
                        <label htmlFor="floatingTextarea2">Description</label>
                      </div>
                      <div className="form-floating mb-3">
                        <select
                          className="form-select"
                          id="floatingSelect"
                          name="category"
                          label = "Cat"
                          onChange={onSelectValue}
                          aria-label="Floating label select example"
                          >
                            {categories.map(item =>(
                               <option key={item.value} value={item.value}>{item.label}</option>
                            ))}
                        </select>
                        <label htmlFor="floatingSelect">Select Media Category</label>
                      </div>
                      <div className="form-floating mb-3">
                        <select
                          className="form-select"
                          id="floatingSelect"
                          name="subCategory"
                          value={blog.subCategory}
                          onChange= {onChange}
                          aria-label="Floating label select example"
                        >
                          <option>Video</option>
                          <option>Image</option>
                        </select>
                        <label htmlFor="floatingSelect">Select Media Type</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="coustomLink"
                          className="form-control"
                          id="floatingInput coustomLink"
                          name="coustomLink"
                          onChange={onChange}
                          value={blog.coustomLink}
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Coustom Link</label>
                      </div>
                      <button className="btn btn-outline-dark mb-3">
                        Submit
                      </button>
                      {/* <div className="alert">{msg ? <p>{msg}</p> : null}</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default PostMedia;
