import React from "react";
import { Link } from "react-router-dom";

const MediaComp = ({ media }) => {
  return (
    <>
      <div className="Container m-5 row row-cols-1 row-cols-md-2 g-4">
        {media.map((elem) => {
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
             <div className="">
              <div className="col" key={id}>
                <div className="card">
                  <img src={media.link} className="card-img-top" height={400} width={200} alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{media.t}</h5>
                    <p className="card-text">{description}</p>
                  </div>
                </div>
              </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MediaComp;
