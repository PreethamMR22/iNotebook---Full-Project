import { stringify } from 'ajv';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";  

const Login = (props) => {

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
        props.showAlert("Logged in Successfully","success");
        navigate("/");
    }
    else props.showAlert("Invalid Credentials","danger");
}
  return (
    <>
        <form onSubmit={handleSubmit}>
    <div className="form-group my-3">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" onChange={handleChange} id="email" name="password" aria-describedby="emailHelp" placeholder="Enter email" />
     </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" onChange={handleChange}  id="password" name="password" placeholder="Password" />
  </div>

  <button type="submit" className="btn btn-primary my-3 " >Submit</button>
</form>


</>
  )
}

export default Login
