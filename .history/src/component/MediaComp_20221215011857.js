import React from 'react'
import { Link } from "react-router-dom";

const MediaComp = ({items}) => {
  return (
    <>
      <div className="Container m-5 row row-cols-1 row-cols-md-2 g-4">
        {
        items.map((elem) => {
          const { id, link, tittle, description, categorey, coustomLink, subCategorey} =
            elem;
          return (
            <>

            <div className="card m-2" style={{ width: "18rem" }} key={id}>
              <div
                className="card-img-top img-fluid "
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                ><img
                src={link}
                className="card-img-top img-fluid "
                alt="..."
                /></div>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">{tittle}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div
                className="card-img-top img-fluid "
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                ><img
                src={link}
                className="card-img-top img-fluid "
                alt="..."
                /></div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

      </div>
    </div>
  </div>
</div>
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
