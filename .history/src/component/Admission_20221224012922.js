import React, { useState } from "react";
import "./Admission.css";

const subject = [
  { label: "Select an Option", value: "default" },
  { label: "Math", value: "Math" },
  { label: "Geo", value: "Geo" },
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
    status: "",
    city: "",
  });

  const {
    name,
    email,
    phone,
    gender,
    education,
    subject,
    college,
    status,
    city,
  } = admission;
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/api//", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": sessionStorage.getItem("token"),
        },
        body: JSON.stringify({
          name: admission.name,
          email: admission.email,
          phone: admission.phone,
          gender: admission.gender,
          education: admission.education,
          status: admission.status,
          subject: admission.subject,
          college: admission.college,
          city: admission.city,
        }),
      });
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
          status: "",
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
    <form onSubmit={handleSubmit}>
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
                  <form>
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
                            name="gender"
                            value={admission.gender}
                            onChange={onChange}
                            className="form-control form-control-lg"
                            id="birthdayDate"
                          />
                          <label htmlFor="birthdayDate" className="form-label">
                           Enter Your Gender
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-floating">
                          <input
                            type="email"
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
                            value={admission.phone}
                            onChange={onchange}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="phoneNumber">
                            Phone Number
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-floating col-12">
                        <select
                          className="form-select"
                          id="floatingSelect"
                          name="subject"
                          value={admission.subject}
                          onChange={onSelectValue}
                          aria-label="Floating label select example"
                          required
                        >
                          {subject.map((item) => (
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
                    </div>
                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        defaultValue="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Admission;
