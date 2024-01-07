import React ,{useState}from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import {Link} from "react-router-dom"
import Home from "./Components/Home/Home"
import Login from "./Components/Login/login"
import Register  from "./Components/Register/Register"
import "./App.css"

function App(){
  const [user, setUser] = useState({})
  return (
    <div className = "App">
    <Router>
      <Routes>
        <Route exact path = "/" element = {
          user && user._id ? <Home /> : <Login setUser ={setUser} />
        } />
        <Route path = "/login" element = {<Login setUser ={setUser} />} />
        <Route path = "/register" element = {<Register />} />
      </Routes>
    </Router>
    
    </div>
    
  );
}

export default App
