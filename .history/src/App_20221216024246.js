import "./App.css";
import About from "./component/About";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Media from "./component/Media";
import SubMedia from "./component/SubMedia";
import Result from "./component/Result";
import Academics from "./component/Academics";
import Footer from "./component/Footer";


function App() {
  return (
    <>
      
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/result" element={<Result />}></Route>
            <Route exact path="/academics" element={<Academics />}></Route>
            <Route exact path="/*" element={<Media />}></Route>
            <Route exact path="/gallery" element={<SubMedia />}></Route>
            <Route  path="*" element={<Navigate to="/gallery" />}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      
    </>
  );
}

export default App;
