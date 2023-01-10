import React from "react";
// import { Link } from "react-router-dom";

const MediaComp = ({ media }) => {
  
  const SubCat = () =>{

    if(media.subCategory === "Video"){
      return(
        <div>{media.link}</div>
        )
      }

      }
  return (
    <>
      <div className="Container m-5 row row-cols-1 row-cols-md-2 g-4">
        {media.map((media) => 
        
         
          
             <div className=""  key={media.id}>
              <div className="col">
                <div className="card">
                  (SubCat()=>   {

                  })
                 <img src={media.link} className="card-img-top" height={400} width={200} alt="..." />
                 <div>{media.link}</div>
                  <div className="card-body">
                    <h5 className="card-title">{media.tittle}</h5>
                    <p className="card-text">{media.description}</p>
                  </div>
                </div>
              </div>
              </div>
            
          )
        }
      </div>
    </>
  );
};

export default MediaComp;
