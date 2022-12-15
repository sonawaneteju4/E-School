import React from 'react'
import { Link } from "react-router-dom";

const MediaComp = ({items}) => {
  return (
    <>
    <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  </div>
      <div className="Container m-5 row row-cols-1 row-cols-md-2 g-4">
        {
        items.map((elem) => {
          const { id, link, tittle, description, categorey, coustomLink, subCategorey} =
            elem;
          return (
            <>

            <div className="card m-3" style={{ width: "18rem" }} key={id}>
              <div
                className="card-img-top img-fluid "
                ><img
                src={link}
                className="card-img-top img-fluid "
                alt="..."
                /></div>
              <div className="card-body">
                <h5 className="card-title">
                     {tittle}</h5>
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
    </>
  )
}

export default MediaComp
