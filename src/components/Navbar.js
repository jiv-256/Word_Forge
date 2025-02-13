import React from 'react'
import logo from './favicon-32x32.png'
import { Link } from 'react-router-dom'
// import PropType from 'prop-types'
export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`} >
  <div className="container-fluid">
  <img src={logo} class="img-fluid" alt="..."/>
    <Link className="navbar-brand" to="/home">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        
      </ul>
      <div className={`form-check form-switch text-${props.Mode==='light'?'dark':'light'}`}>
      <input className="form-check-input"onClick={props.toggledarkmode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
      </div>
      {/* <button className="btn btn-outline-success my-2 my-sm-0" onClick={lightmode} type="submit">{btntext}</button> */}
    
    </div>
  </div>
</nav>
  )
}
