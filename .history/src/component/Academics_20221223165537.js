import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NewsComp from "./NewsComp";
import {  Routes, Route } from "react-router-dom";
import Anotes from "./Anotes";


const Academics = () => {
  let navigate = useNavigate();
  useEffect(() => {});

  const HandleNews = (e) => {
    e.preventDefault();
    navigate("academics/news");
  };
  const HandleNotes = (e) => {
    e.preventDefault();
    navigate("academics/notes");
  };

  return (
    <div>
      <div class="d-flex">
        <div class="p-2 bg-dark h-100 w-25 d-inline-block">
          <div class="list-group">
            <Link
              to=""
              class="list-group-item list-group-item-action my-3 py-2 rounded active"
              aria-current="true"
              onClick={HandleNews}
            >
              News
            </Link>
            <Link
              to="#"
              class="list-group-item list-group-item-action rounded my-3 py-2"
              onClick={HandleNotes}
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
        <div class="p-2
         container">
      <Routes>
        <Route path="/academics" element={<Academics}>
          <Route path="news" element={<NewsComp />}></Route>
          <Route path="notes" element={<Anotes />}></Route>
        </Route>
      </Routes>

        </div>
      </div>

    </div>
  );
};

export default Academics;
