import React from "react";
import { useState } from "react";

const AddBlog = () => {
    const [title, settitle] = useState();
    const [description, setdescription] = useState();
    const [author, setauthor] = useState();
    const [msg, setmsg] = useState();

    let handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:5000/api/blog/addblog",{
                method: "POST",
                headers: {
                    'auth-token' : sessionStorage.getItem('token')
                },
                body: JSON.stringify({
                  title: title,
                  description: description,
                  author: author,
                }),
            });
            let resJson = await res.json();
            console.log(resJson)
      if (res.status === 200) {
        settitle("");
        setdescription("");
        setauthor("");
        setmsg("Blog Post successfully");
      } else {
        setmsg("Some error occured");
      }
        } catch (err) {
            console.log(err);
        }
    }
  return (
    <>
      <div className="">
        <form className=""
         onSubmit={handleSubmit}
         >
          <section className="vh-100" style={{ backgroundColor: " #508bfc" }}>
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="card shadow-2-strong">
                    <div className="card-body p-5 text-center">
                      <h1 className="mb-5">Add New Blog</h1>
                      <div class="form-floating mb-3">
                      <input
                        type="title"
                        class="form-control"
                        id="floatingInput title"
                        name="title"
                        onChange={(e) => settitle(e.target.value)}
                        value={title}
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Title</label>
                      </div>
                      <div class="form-floating mb-3">
                      <textarea
                        type="description"
                        class="form-control"
                        id="floatingTextarea2 description"
                        name="description"
                        
                        style={{height: "100px"}}
                        onChange={(e) => setdescription(e.target.value)}
                        value={description}
                        placeholder="name@example.com"
                      />
                      <label for="floatingTextarea2">Description</label>
                      </div>
                      <div class="form-floating mb-3">
                      <input
                        type="author"
                        class="form-control"
                        id="floatingInput author"
                        name="author"
                        onChange={(e) => setauthor(e.target.value)}
                        value={author}
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Author</label>
                      </div>
                      <button className="btn btn-outline-dark mb-3">Submit</button>
                      <div className="message">{msg ? <p>{msg}</p> : null}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
