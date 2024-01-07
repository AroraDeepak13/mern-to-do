import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import "./Register.css"
import axios from "axios"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"




function Register()
{
    const navigate = useNavigate() 

    const [user, setUser] = useState({
        name:"",
        password : "",
        re_enterpassword : ""
    });
    function handleChange(event)
    {
        const {name, value} = event.target;

        setUser({
            ...user,
            [name] : value
           
        })
    }
    function register()
    {
        const {name, password, re_enterpassword} = user
        if(name && password && re_enterpassword && (password===re_enterpassword)){
            axios.post("http://localhost:9002/register",user)
            .then(res => {alert(res.data.message)
                navigate("/login")
            })

        }
        else
        {
            alert("invalid")
        }
        
    }

    return (
        
        <div className = "register">
        <h1>Register</h1>
        {/* {console.log("user",user)} */}
        <input type = "text"  name = "name" value ={user.name} placeholder = "Enter your username"  onChange={handleChange}></input>
        <input type = "password" name = "password" value ={user.password} placeholder = "Enter your password" onChange={handleChange}></input>
        <input type = "password" name = "re_enterpassword" value ={user.reenterpassword} placeholder = "Re - Enter your password" onChange={handleChange}></input>
        <div className = "button" onClick = {register}>Register</div>
        <div>or</div>
        <div className = "button" onClick={()=>{navigate("/login")}} >Login</div>
      </div>
   
     
    );
}
export default Register;