import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NewsComp from "./NewsComp";
import {  Routes, Route } from "react-router-dom";


const Academics = () => {
  let navigate = useNavigate();
  useEffect(() => {});

  const HandleNews = (e) => {
    e.preventDefault();
    navigate("academics/news");
  };
  const  = (e) => {
    e.preventDefault();
    navigate("academics/news");
  };

  return (
    <div>
      <div class="d-flex">
        <div class="p-2 bg-dark h-100 w-25 d-inline-block">
          <div class="list-group">
            <Link
              to="#"
              class="list-group-item list-group-item-action my-3 py-2 rounded active"
              aria-current="true"
              onClick={HandleNews}
            >
              News
            </Link>
            <Link
              to="n"
              class="list-group-item list-group-item-action rounded my-3 py-2"
            >
              Notes
            </Link>
            <Link
              to="#"
              class="list-group-item list-group-item-action rounded my-3 py-2"
            >
              Live Lecture
            </Link>
            <Link
              to="#"
              class="list-group-item list-group-item-action rounded my-3 py-2"
            >
              Updates
            </Link>
            <Link class="list-group-item list-group-item-action rounded my-3 py-2">
              Time Table
            </Link>
          </div>
        </div>
        <div class="p-2 flex-grow-1">Flex item</div>
      </div>

      <Routes>
        <Route path="/academics">
          <Route path="news" element={<NewsComp />}></Route>
          <Route path="video" element={<SubVideo />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Academics;
