import React, {useState} from 'react';
// import '../App.css';
import {NavLink} from 'react-router-dom' ;
import {FaBars, FaTimes} from 'react-icons/fa';


 const Navbar = () => {

    
  const [click, setClick]=useState(false);
 
  const handleClick=()=> setClick(!click);
  
    return (

      
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark shadow-lg " >
        <NavLink
              exact
              to="/"
              className="nav-item nav-link mover "
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
          aria-haspopup='true'
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleClick}
          >
          {/* <span className="navbar-toggler-icon" /> */}
          {click ? <FaTimes />: <FaBars/>}
        </button>

        <div className={click ? 'nav-menu active' : 'navbar-collapse nav-menu collapse'} id="navbarNavAltMarkup"  >
        
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