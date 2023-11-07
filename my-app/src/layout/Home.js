import React from 'react'
import{NavLink,Outlet}from 'react-router-dom'
import myImage from './landing-image.png'
export default function Home() {
  return (
    <>
      <div className="header" id="header">
      <div className="container">
        <a href="/" className="logo">BraRM</a>
        <ul className="main-nav">
         
          <li> <NavLink to="/article" className="NavLink">Articles</NavLink></li>
          <li> <NavLink to="/skils" className="NavLink">Skills</NavLink></li>
          <li> <NavLink to="/galerry" className="NavLink">Gallery</NavLink></li>
          <li> <NavLink to="/features" className="NavLink">Features</NavLink></li>
          <li> <NavLink to="/other"className="NavLink">Other</NavLink></li>
          <li>
     
          </li>
        </ul>
      </div>
    </div>
    

    <div className="landing">
      <div className="container">
        <div className="text">
          <h1>Welcome, To Brahim Remaigui World</h1>
          <p>Here I'm gonna share you everything about my life. Books I'm reading, Games I'm Playing, Stories and Events</p>
        </div>
        <div className="image">
          <img decoding="async" src={myImage} />
        </div>
      </div>
      <a href="#articles" className="go-down">
        <i className="fas fa-angle-double-down fa-2x"></i>
      </a>
    </div>

    <Outlet></Outlet>
    </>

    
  )
}
