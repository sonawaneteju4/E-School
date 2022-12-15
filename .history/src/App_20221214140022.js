import './App.css';
import Navbar from './component/Navbar';

function App() {
  return (
   <>
   <NoteState>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />}></Route>
        
            </Routes>
        </BrowserRouter>
      </NoteState>
   </>  );
}

export default App;
