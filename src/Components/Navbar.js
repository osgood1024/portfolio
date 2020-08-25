import React from 'react';
// import '../App.css';
import {NavLink} from 'react-router-dom' ;

 const Navbar = () => {
 
    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow-lg">

        <NavLink
              exact
              to="/"
              className="nav-item nav-link mover"
              activeClassName="nav-item nav-link active"
            >
         <span className="navbar-brand mb-0 h1">
            Osgood Gunawan
        </span>
        </NavLink>
            
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <NavLink
              exact
              to="/Projects"
              className="nav-item nav-link mover"
              activeClassName="nav-item nav-link active"
            >
              Projects
            </NavLink>
            <NavLink
              exact
              to="/About"
              className="nav-item nav-link mover"
              activeClassName="nav-item nav-link active"
            >
              About Me
            </NavLink>
           
            <a href = '/resume.pdf' rel="noopener" target="_blank" className="nav-item nav-link mover"
              activeClassName="nav-item nav-link active" style = {{textDecoration: 'none'}} > 
            Resume 
            </a>
          </div>
        </div>
      </nav>
       
    )
}

export default Navbar ;