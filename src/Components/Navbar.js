import React, {useState} from 'react';
import {NavLink} from 'react-router-dom' ;
import {FaBars, FaTimes} from 'react-icons/fa';
import {MobileIcon,NavItem, NavMenu} from './Navbar_elements'


 const Navbar = () => {

  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

    return (

      
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark shadow-lg " >

        <NavLink
              exact
              to="/"
              className="nav-item nav-link mover "
              activeClassName="nav-item nav-link active"
              style={{padding:'0 0 0 2.5rem'}}
              >
         <span className="navbar-brand mb-0 h1">
            Osgood Gunawan
        </span>
        </NavLink>
      
    


        {/* <MobileIcon onClick={handleClick}>  */}
        
          <MobileIcon
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
            {click ? <FaTimes /> : <FaBars/>}
          </MobileIcon>
       

        {/* <div className={click ? 'nav-menu active' : 'navbar-collapse nav-menu collapse'} id="navbarNavAltMarkup"  > */}
          
          <NavMenu className="navbar-nav ml-auto" onClick={handleClick} click={click}>
            <NavItem>
              <NavLink
                exact
                to="/Projects"
                className="nav-item nav-link mover"
                activeClassName="nav-item nav-link active "
                onClick={closeMobileMenu}
                style={{padding:'1.3rem 4.5rem 1.3rem 0'}}
                >
      
                Projects
                  
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                exact
                to="/About"
                className="nav-item nav-link mover "
                activeClassName="nav-item nav-link active"
                onClick={closeMobileMenu}
                style={{padding:'1.3rem 4.5rem 1.3rem 0'}}
                
                >
                About Me
              </NavLink>
            </NavItem>
           
            <a href = '/resume.pdf' rel="noopener" target="_blank" className="nav-item nav-link mover " 
              activeClassName="nav-item nav-link active" style = {{textDecoration: 'none', padding:'1.3rem 4.5rem 1.3rem 0'}} onClick={closeMobileMenu}> 
             Resume 
            </a>
            </NavMenu>
        

        {/* </div> */}
       
      </nav>
        
     
    )
}

export default Navbar ;