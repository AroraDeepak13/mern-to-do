import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import "./Login.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Link} from "react-router-dom"
import axios from "axios"
import {useNavigate} from "react-router-dom"


function Login(props)
{
    const navigate = useNavigate() 
    const [user, setUser] = useState({
        name:"",
        password : "",
        
    });
    function handleChange(event)
    {
        const {name, value} = event.target;

        setUser({
            ...user,
            [name] : value
           
        })
    }
    function login()
    {
        axios.post("http://localhost:9002/login", user)
        .then(res =>{
            alert("Login Successfull")
            props.setUser(res.data.user)
            navigate("/")
        })

    }
    return (
         <div className = "login">
          <h1>Login</h1>
          <input type = "text"name = "name" value = {user.name} onChange={handleChange} placeholder = "Enter your username"></input>
          <input type = "password" name = "password" value = {user.password} onChange={handleChange} placeholder = "Enter your password"></input>
          <div className = "button" onClick={login}>Login</div>
          <div>or</div>
          <div className = "button" onClick={()=>{navigate("/register")}}>Register</div>
        </div>
     
    );
}
export default Login;