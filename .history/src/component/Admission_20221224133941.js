import React, { useState } from "react";
import "./Admission.css";

const sub = [
  { label: "Select an Option", value: "default" },
  { label: "Math", value: "Math" },
  { label: "Geo", value: "Geo" },
];
const gen = [
  { label: "Select an Option", value: "default" },
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];
const Admission = () => {
  const [msg, setmsg] = useState();
  const [admission, setAdmission] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    education: "",
    subject: "",
    college: "",
    city: "",
  });

  const { name, email, phone, gender, education, subject, college, city } =
    admission;
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        "http://localhost:5000/api/admission/postadmision",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: admission.name,
            email: admission.email,
            phone: admission.phone,
            gender: admission.gender,
            education: admission.education,

            subject: admission.subject,
            college: admission.college,
            city: admission.city,
          }),
        }
      );
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        setAdmission({
          name: "",
          email: "",
          phone: "",
          gender: "",
          education: "",
          subject: "",
          college: "",

          city: "",
        });
        setmsg("Media Post successfully");
      } else {
        setmsg("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const onChange = (e) => {
    setAdmission({ ...admission, [e.target.name]: e.target.value });
  };
  const onSelectValue = (e) => {
    if (e.target.value === "default") {
      setAdmission({ ...admission, [e.target.name]: "" });
    } else {
      setAdmission({ ...admission, [e.target.name]: e.target.value });
    }
  };
  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                    Registration Form
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-floating">
                          <input
                            type="text"
                            name="name"
                            value={admission.name}
                            onChange={onChange}
                            id="floatingInput"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="firstName">
                            Full Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-floating">
                          <input
                            type="text"
                            name="college"
                            value={admission.college}
                            id="floatingInput"
                            onChange={onChange}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="lastName">
                            College Name
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-floating datepicker w-100">
                          <input
                            type="text"
                            name="city"
                            value={admission.city}
                            onChange={onChange}
                            className="form-control form-control-lg"
                            id="birthdayDate"
                          />
                          <label htmlFor="birthdayDate" className="form-label">
                            Current City
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        {" "}
                        <div className="form-floating datepicker w-100">
                          <input
                            type="text"
                            name="education"
                            value={admission.education}
                            onChange={onChange}
                            className="form-control form-control-lg"
                            id="birthdayDate"
                          />
                          <label htmlFor="birthdayDate" className="form-label">
                            Enter Your Current Education
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-floating">
                          <input
                            type="email"
                            name="email"
                            id="emailAddress"
                            value={admission.email}
                            onChange={onChange}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="emailAddress">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-floating">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={admission.phone}
                            onChange={onChange}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="phoneNumber">
                            Phone Number
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-floating col-md-6 mb-4 pb-2">
                        <select
                          className="form-select"
                          id="floatingSelect"
                          name="subject"
                          value={admission.subject}
                          onChange={onSelectValue}
                          aria-label="Floating label select example"
                          required
                        >
                          {sub.map((item) => (
                            <option key={item.value} value={item.value}>
                              {item.label}
                            </option>
                          ))}
                        </select>
                        <label
                          className="floatingSelect m-1"
                          htmlFor="phoneNumber"
                        >
                          Select Subject
                        </label>
                      </div>
                      <div className="form-floating col-md-6 mb-4 pb-2 ">
                        <select
                          className="form-select"
                          id="floatingSelect"
                          name="gender"
                          value={admission.gender}
                          onChange={onSelectValue}
                          aria-label="Floating label select example"
                          required
                        >
                          {gen.map((item) => (
                            <option key={item.value} value={item.value}>
                              {item.label}
                            </option>
                          ))}
                        </select>
                        <label
                          className="floatingSelect m-1"
                          htmlFor="phoneNumber"
                        >
                          Gender
                        </label>
                      </div>
                    </div>
                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="submit"
                        defaultValue="Submit"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      />
                    </div>
                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                              Modal title
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">...</div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" class="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                   
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admission;
