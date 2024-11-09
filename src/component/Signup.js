import { stringify } from 'ajv';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";  

const Signup = (props) => {

    
const [credential,setCredential]=useState({name:"",email:"",password:"",cpassword:""});
let navigate = useNavigate();

const handleChange=(e)=> {
    setCredential({name:e.target.id==="name"?e.target.value:credential.name,email:e.target.id==="email"?e.target.value:credential.email,password:e.target.id==="password"?e.target.value:credential.password,cpassword:e.target.id==="cpassword"?e.target.value:credential.cpassword})
}


const handleSubmit=async(e)=> {
    e.preventDefault();
    const {name,email,password,cpassword  }=credential;
    let proceed=true;
    if(password!==cpassword) {
        proceed=false;
    }
    
    const response=await fetch("http://localhost:5000/api/auth/createuser",{
        method:"POST",
        headers: {
            "Content-type":"application/json",
            
        },
        body:JSON.stringify({name,email,password})
    });
    
    const json=await response.json();
    console.log(json)

  if(proceed) {
    if(json.success) {
        //save the token of the user and then redirect
        localStorage.setItem('token',json.Token);
        props.showAlert("Account Created Successfully","success");
        navigate("/");
        }
         else props.showAlert("User Already Exists","warning");
  }  
   else  props.showAlert("Password and Confirm Password doesn't match","danger");

}



    
  return (
    <div className="container">
        
<form onSubmit={handleSubmit}>
<div className="form-group my-3">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" onChange={handleChange} id="name" name="name" placeholder="Your Name.." />
  </div>

    <div className="form-group my-3">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" onChange={handleChange} id="email" name="password" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
  <div className="form-group my-3">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" minLength={8} required onChange={handleChange} id="password" name="password" placeholder="Password" />
  </div>
  <div className="form-group my-3">
    <label htmlFor="cpassword">Confirm Password</label>
    <input type="password" className="form-control" minLength={8} required onChange={handleChange} id="cpassword" name="cpassword" placeholder="Confirm Password" />
  </div>
 
  <button type="submit" className="btn btn-primary my-3" >Submit</button>
</form>

      
    </div>
  )
}

export default Signup
