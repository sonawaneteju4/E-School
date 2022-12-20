import React from 'react'
import BlogCont from './BlogCont'

const Home = () => {
  return (
    <>
      <div className='container p-5'>

      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner rounded">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="/image/trip.jpeg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='text-light'>Day With Nature</h5>
        <p className='text-light'>Fun in Nature, Enjoyment And Dinner In Open Sky</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="/image/yoga2.jpeg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='text-light'>International Yoga Day</h5>
        <p className='text-light'> Yoga gives us the lesson to cure what is fatal to be endured and to endure what you cannot cure.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="image/card.jpeg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='text-light'>Independence Day</h5>
        <p className='text-light'>Independence Day Celebration</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    <div className='bg-secondary bg-gradient rounded'>
    <div className='text-center fs-3 fw-bold p-2 bg-opacity-'>Blog</div>
      <BlogCont/>
    </div>


      </>
  )
}

export default Home
