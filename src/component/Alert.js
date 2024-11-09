import React from 'react'

export default function Alert(props) {
    const capitalize=(str)=> {
       let lower=str.toLowerCase();
       return lower.charAt(0).toUpperCase() + lower.slice(1); 
    }
  return (
   
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
     {props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

  )
}