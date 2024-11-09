import { stringify } from 'ajv';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";  

const Login = () => {

const [credential,setCredential]=useState({email:"",password:""});
let navigate = useNavigate();

const handleChange=(e)=> {
    setCredential({email:e.target.id==="email"?e.target.value:credential.email,password:e.target.id==="password"?e.target.value:credential.password})
}


const handleSubmit=async(e)=> {
    e.preventDefault();
    const response=await fetch("http://localhost:5000/api/auth/login",{
        method:"POST",
        headers: {
            "Content-type":"application/json",
            
        },
        body:JSON.stringify({email:credential.email,password:credential.password})
    });
    
    const json=await response.json();
    console.log(json)
    if(json.success) {
        //save the token of the user and then redirect
        localStorage.setItem('token',json.Token);
        navigate.push("/home");
    }
    else alert("Invalid credential");
}
  return (
    <>
        <form onSubmit={handleSubmit}>
    <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" onChange={handleChange} id="email" name="password" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" onChange={handleChange}  id="password" name="password" placeholder="Password" />
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>


</>
  )
}

export default Login
