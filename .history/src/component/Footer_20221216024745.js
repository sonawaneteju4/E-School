import React from 'react'
import { Link } from 'react-router-dom'
componentDidUpdate() {
    window.scrollTo(0, 0);
  }

const Footer = () => {
  return (
    
    <div> {/* Footer */}
    <footer className="text-center text-lg-start bg-dark text-muted">
      {/* Section: Social media */}
     
      {/* Section: Social media */}
      {/* Section: Links  */}
      <section className="bg-dark">
        <div className="container text-center text-md-start p-5">
          {/* Grid row */}
          <div className="row -3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3 text-secondary" />E- School
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                About Us
              </h6>
              <p>
                <Link to="media/gallery" className="text-reset">Gallery</Link>
              </p>
              <p>
                <Link to="/Result" className="text-reset">Result</Link>
              </p>
              <p>
                <Link to="/about" className="text-reset">More</Link>
              </p>
              <p>
                {/* <Link to="" className="text-reset">Laravel</Link> */}
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <Link to="media/video" className="text-reset">SubVideo</Link>
              </p>
              <p>
                <Link to="/gallery" className="text-reset">gallery</Link>
              </p>
              <p>
                <Link to="/blog" className="text-reset">Blog</Link>
              </p>
              <p>
                <Link to="/news" className="text-reset">News</Link>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3 text-secondary" /> New York, NY 10012, US</p>
              <p>
                <i className="fas fa-envelope me-3 text-secondary" />
                info@example.com
              </p>
              <p><i className="fas fa-phone me-3 text-secondary" /> + 01 234 567 88</p>
              <p><i className="fas fa-print me-3 text-secondary" /> + 01 234 567 89</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
      {/* Copyright */}
      <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
        © 2021 Copyright:
        <Link className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</Link>
      </div>
      {/* Copyright */}
    </footer>
    {/* Footer */}
  </div>
  )
}

export default Footer