import React from 'react'

const PostMedia = () => {
  return (
    <div>
        <div className="">
        <form className=""
        //  onSubmit={handleSubmit}
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
                        // onChange={onChange}
                        // value={blog.title}
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Title</label>
                      </div>
                      <div class="form-floating mb-3">
                      <input
                        type="link"
                        class="form-control"
                        id="floatingInput link"
                        name="link"
                        // onChange={onChange}
                        // value={blog.title}
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Link</label>
                      </div>
                      <div class="form-floating mb-3">
                      <textarea
                        type="description"
                        class="form-control"
                        id="floatingTextarea2 description"
                        name="description"
                        
                        style={{height: "100px"}}
                        // onChange={onChange}
                        // value={blog.description}
                        placeholder="name@example.com"
                      />
                      <label for="floatingTextarea2">Description</label>
                      </div>
                      <div class="form-floating mb-3">
                      <input
                        type="coustomLink"
                        class="form-control"
                        id="floatingInput coustomLink"
                        name="coustomLink"
                        // onChange={onChange}
                        // value={blog.author}
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Coustom Link</label>
                      </div>
                      <button className="btn btn-outline-dark mb-3">Submit</button>
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
  )
}

export default PostMedia