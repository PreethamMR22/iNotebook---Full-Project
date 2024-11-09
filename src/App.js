
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Alert from "./component/Alert";
function App() {
  return (
    <div className="App">
      <NoteState>
      <Router>
        <Navbar />
        <Alert message="Hangama Hogaya"/>
        <div className="container" >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        </div>
      </Router>
      </NoteState>
    </div>
  );
}

export default App;
