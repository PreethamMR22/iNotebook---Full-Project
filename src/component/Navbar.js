import React from 'react'
import { Link ,useLocation} from 'react-router-dom'

import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  let navigate=useNavigate();
  let location=useLocation();
  const handleLogout=()=> {
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <div>
   <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="google.com">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/'?"active" :""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname===`/about`?"active":""}`} to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="google.com" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="google.com">Action</Link></li>
            <li><Link className="dropdown-item" to="google.com">Another action</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="google.com">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
     
     
     {!localStorage.getItem('token')  ? <form className="d-flex" role="search">
      <Link className="btn btn-primary " to="/login" role="button">Login</Link>
      <Link className="btn btn-primary " to="signup" role="button">SignUp</Link>
      </form> : <button className="btn btn-primary" onClick={handleLogout}> Logout</button>
    } 
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
