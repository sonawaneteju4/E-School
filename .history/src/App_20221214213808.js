import "./App.css";
import About from "./component/About";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Media from "./component/Media";
import SubMedia from "./component/SubMedia";


function App() {
  return (
    <>
      
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/media/*" element={<Media />}></Route>
            <Route exact path="/gallery" element={<SubMedia />}></Route>
          </Routes>
        </BrowserRouter>
      
    </>
  );
}

export default App;
