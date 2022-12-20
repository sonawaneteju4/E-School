import React from "react";
import BlogCont from "./BlogCont";

const Home = () => {
  return (
    <>
      <div className="container p-5">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner rounded">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src="/image/trip.jpeg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-light">Day With Nature</h5>
                <p className="text-light">
                  Fun in Nature, Enjoyment And Dinner In Open Sky
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="/image/yoga2.jpeg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-light">International Yoga Day</h5>
                <p className="text-light">
                  {" "}
                  Yoga gives us the lesson to cure what is fatal to be endured
                  and to endure what you cannot cure.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="image/card.jpeg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-light">Independence Day</h5>
                <p className="text-light">Independence Day Celebration</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="bg-secondary bg-gradient bg-opacity-25 rounded ">
        <div className="text-center fs-3 fw-bold p-2 ">
          Blog
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            class="bi bi-book"
            viewBox="0 0 16 16"
            className="p-1"
          >
            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
          </svg>
        </div>
        <BlogCont />
        <div className="text-center">
          <button className="btn btn-outline-dark">Show More</button>
        </div>
      </div>
      <div>
        
      </div>
    </>
  );
};

export default Home;
