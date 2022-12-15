import React from "react";
import { Link } from "react-router-dom";

const VideoComp = ({ items }) => {
  return (
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
            <div class="row">
              <div class="m-2">
                <div class="card  bg-light bg-gradient shadow p-3 mb-5 bg-body rounded">
                  <div class="card-body">
                    <div className="card-img-top img-fluid ">{link} </div>
                    <h5 class="card-title">{tittle}</h5>
                    <p class="card-text"> {description}</p>
                    <Link to={coustomLink} class="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default VideoComp;
