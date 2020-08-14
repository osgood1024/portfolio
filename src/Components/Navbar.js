import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
import {useLocation}from 'react-router-dom'


export default function Navbar(){
    const navStyle={
        color: 'white',
        textDecoration: 'none'
    };
    const loc= useLocation().pathname

    return (
        <div className="nav">
            <Link to = '/'className = {`${loc === '/' ? 'curr' : ''}mover`} style = {navStyle} 
            ><h3>Logo</h3>
            </Link>
           
            <Link to = '/projects' className = {`${loc === '/' ? 'curr' : ''}mover`} style = {navStyle} >
                Project
            </Link>
            <Link to = '/about'className = {`${loc === '/' ? 'curr' : ''}mover`} style = {navStyle} >
                About
            </Link>
            <a href = '/resume.pdf' rel="noopener" target="_blank" className='mover' style = {navStyle} >
                Resume
            </a>
        
        </div>
       
    )
}