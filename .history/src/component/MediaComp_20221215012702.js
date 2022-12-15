import React from "react";
import { Link } from "react-router-dom";

const MediaComp = ({ items }) => {
  return (
    <>
      <div className="Container m-5 row row-cols-1 row-cols-md-2 g-4">
        {items.map((elem) => {
          const {
            id,
            link,
            tittle,
            description,
            categorey,
            coustomLink,
            subCategorey,
          } = elem;
          return (
            <>
             <div class="row row-cols-1 row-cols-md-2 g-4"></div>
              <div className="col" key={id}>
                <div className="card">
                  <img src={link} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{tittle}</h5>
                    <p className="card-text">{description}</p>
                  </div>
                </div>
              </div>
              </
            </>
          );
        })}
      </div>
    </>
  );
};

export default MediaComp;
