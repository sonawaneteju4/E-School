import React,{useState} from "react";
import "./Admission.css"

const subject = [
  {label:"Select an Option", value: "default"},
  {label:"Math" , value:"Math" },
  {label:"Geo" , value:"Geo" }
]
const Admission = () => {
  const [msg, setmsg] = useState();
    const [media, setMedia] = useState({title: "", description: "", link: "",coustomLink:"",subCategory:"",category:"" })

    
    const {name, description, link, coustomLink,subCategory,category} = media
    let handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:5000/api/media/postmedia",{
                method: "POST",
                headers: {
                    'Content-Type':"application/json",
                    'auth-token' : sessionStorage.getItem('token') 
                },
                body: JSON.stringify({
                  title: media.title,
                  description: media.description,
                  link: media.link,
                  coustomLink: media.coustomLink,
                  subCategory:media.subCategory,
                  category:media.category,
                }),
            });
            let resJson = await res.json();
            console.log(resJson)
      if (res.status === 200) {
        setMedia({title: "", description: "", tag: ""})
        setmsg("Media Post successfully");
      } else {
        setmsg("Some error occured");
      }
        } catch (err) {
            console.log(err);
        }
    }
    const onChange = (e)=>{
        setMedia({...media, [e.target.name]: e.target.value})
    }
    const onSelectValue = (e)=>{
      if(e.target.value === "default"){
        setMedia({...media, [e.target.name]: ""})
      }
      else{
        setMedia({...media, [e.target.name]: e.target.value})
      }
    }
  return (
<section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration" style={{borderRadius: '15px'}}>
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-floating">
                          <input type="text" id="floatingInput" onChange={onchange} className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="firstName">Full Name</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-floating">
                          <input type="text" id="floatingInput" onChange={onchange} className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="lastName">College Name</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-floating datepicker w-100">
                          <input type="text" className="form-control form-control-lg" id="birthdayDate" onChange={onchange} />
                          <label htmlFor="birthdayDate" className="form-label">Current City</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Gender: </h6>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" onChange={onchange} type="radio" name="inlineRadioOptions" id="femaleGender" defaultValue="option1" defaultChecked />
                          <label className="form-check-label" htmlFor="femaleGender">Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" onChange={onchange} name="inlineRadioOptions" id="maleGender" defaultValue="option2" />
                          <label className="form-check-label" htmlFor="maleGender">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio"onChange={onchange} name="inlineRadioOptions" id="otherGender" defaultValue="option3" />
                          <label className="form-check-label" htmlFor="otherGender">Other</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-floating">
                          <input type="email" id="emailAddress" onChange={onchange} className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="emailAddress">Email</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-floating">
                          <input type="tel" id="phoneNumber" onChange={onchange} className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-floating col-12">
                      
                        <select
                          className="form-select"
                          id="floatingSelect"
                          name="subCategory"
                          value={media.subCategory}
                          onChange= {onSelectValue}
                          aria-label="Floating label select example"
                          required
                        >
                         {subject.map(item =>(
                           <option key={item.value} value={item.value}>{item.label}</option>
                           ))}
                        </select>
                           <label className="floatingSelect m-1" htmlFor="phoneNumber">Select Subject</label>
                        
                      </div>
                    </div>
                    <div className="mt-4 pt-2">
                      <input className="btn btn-primary btn-lg" type="submit" defaultValue="Submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Admission;
