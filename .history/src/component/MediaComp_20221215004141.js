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
                ><img
                src={l}
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
