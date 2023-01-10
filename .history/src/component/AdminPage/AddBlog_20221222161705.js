import React from "react";

const AddBlog = () => {
  return (
    <>
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
                      <h1 className="mb-5">E-School</h1>
                      <h3 className="mb-5">Sign in</h3>
                      <div class="form-floating mb-3">
                      <input
                        type="title"
                        class="form-control"
                        id="floatingInput title"
                        name="title"
                        // onChange={onChange}
                        // value={credentails.email}
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Title</label>
                      </div>
                      <div class="form-floating mb-3">
                      <input
                        type="description"
                        class="form-control"
                        id="floatingInput description"
                        name="description"
                        // onChange={onChange}
                        // value={credentails.email}
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Description</label>
                      </div>
                      <div class="form-floating mb-3">
                      <input
                        type="author"
                        class="form-control"
                        id="floatingInput description"
                        name="description"
                        // onChange={onChange}
                        // value={credentails.email}
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Description</label>
                      </div>
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
