
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Alert from "./component/Alert";
import Login from "./component/Login";
import Signup from "./component/Signup";
import { useState } from "react";

function App() {
  const [alert,setAlert]=useState(null);

    //to show the alert
    const showAlert=(message,type)=> {
      setAlert({
        msg:message,
        type:type,
      });
      setTimeout(()=> {
        setAlert(null);
      },2000)
    }
  return (
    <div className="App">
      <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container" >
        <Routes>
          <Route exact path="/" element={<Home showAlert={showAlert}/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element ={<Login showAlert={showAlert} />}></Route>
          <Route exact path="/signup" element ={<Signup showAlert={showAlert} />}></Route>
        </Routes>
        </div>
      </Router>
      </NoteState>
    </div>
  );
}

export default App;
