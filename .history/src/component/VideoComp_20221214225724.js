import React from 'react'
import { Link } from 'react-router-dom';


const VideoComp = ({items}) => {
  return (
    <div className="Container m-5 row row-cols-1 row-cols-md-2 g-4">
        {
        items.map((elem) => {
          const { id, link, tittle, description, categorey, coustomLink, subCategorey} =
            elem;
          return (
            <>
            <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <div
                className="card-img-top img-fluid "
                >{link}</div>
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  </div>
            <div className="card m-2" style={{ width: "18rem" }} key={id}>
             
              <div className="card-body">
                <h5 className="card-title"> {tittle}</h5>
                <p className="card-text">
                 {description}
                </p>
                <Link to={coustomLink} className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
                </>
          );
        })}
      </div>
  )
}

export default VideoComp