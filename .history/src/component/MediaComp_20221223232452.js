import React from "react";
// import { Link } from "react-router-dom";

const MediaComp = ({ media }) => {
  // const SubCat = () => {
  //   if (media.subCategory === "Video") {
  //     return (
  //       <div>
  //         {" "}
  //         <iframe
  //           width="560"
  //           height="315"
  //           src={media.link}
  //           title="YouTube video player"
  //           frameborder="0"
  //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //           allowfullscreen
  //         ></iframe>
  //       </div>
  //     );
  //   } else {
  //     <div>
  //       <img
  //         src={media.link}
  //         className="card-img-top"
  //         height={400}
  //         width={200}
  //         alt="..."
  //       />
  //     </div>;
  //   }
  // };
  return (
    <>
      <div className="Container m-5 row row-cols-1 row-cols-md-2 g-4">
        {media.map((media) => (
          <div className="" key={media.id}>
            <div className="col">
              <div className="card">
                {/* <img
                  src={media.link}
                  className="card-img-top"
                  height={400}
                  width={200}
                  alt="..."
                /> */}
                <div style={{width:"1000"}}>

                <iframe
                  // width="100"
                  // height="315"
                  src={media.link}
                  title="YouTube video player"
                  frameborder="0"
                  scrolling="no"
                  // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  // allowfullscreen
                  ></iframe>
                  </div>
                <div className="card-body">
                  <h5 className="card-title">{media.tittle}</h5>
                  <p className="card-text">{media.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MediaComp;
