import React from "react";
// import { Link } from "react-router-dom";

const MediaComp = ({ media }) => {
  if(media.subCategory === Video){
    return(
      <div>{media.subCategory}</div>
    )
  }
  else(media.subCategory === Image)
  return (
    <>
      <div className="Container m-5 row row-cols-1 row-cols-md-2 g-4">
        {media.map((media) => 
        
         
            <>
             <div className="">
              <div className="col" key={media.id}>
                <div className="card">
                  <div>{media.subCategory}</div>
                 <img src={media.link} className="card-img-top" height={400} width={200} alt="..." />
                 <div>{media.link}</div>
                  <div className="card-body">
                    <h5 className="card-title">{media.tittle}</h5>
                    <p className="card-text">{media.description}</p>
                  </div>
                </div>
              </div>
              </div>
            </>
          )
        }
      </div>
    </>
  );
};

export default MediaComp;
