import './App.css';
import Navbar from './component/Navbar';

function App() {
  return (
   <>
   <NoteState>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route exact path="/" element={<Ho />}></Route>
              <Route exact path="/about" element={<About />}></Route>
            </Routes>
        </BrowserRouter>
      </NoteState>
   </>  );
}

export default App;
