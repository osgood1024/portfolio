import React from 'react';
import '../App.css';


const Footer = () =>{
    const email= require("../Pics/email.png");
    const github= require("../Pics/github.png");
    const linkedin=require("../Pics/linkedin.jpeg");
    const medium=require("../Pics/medium.png");


    return(
        <div className="main-footer">
            <div className="container">

                <h3 style={{color:'white'}}>Let's Connect!</h3>
                <br/>
                <a className="color" href="mailto: osgood1024@gmail.com">
                    <img className="icon" src={email} alt="Email"/>Email
                </a>
                <a className="color" href="https://www.linkedin.com/in/osgood-gunawan-973a5993/" target="_blank" rel="noopener noreferrer">
                   <img className="icon" src={linkedin} alt="LinkedIn"/>LinkedIn
                </a>
                <a className="color" href="https://github.com/osgood1024" target="_blank" rel="noopener noreferrer">
                    <img className="icon" src={github} alt="Github"/>Github
                </a>
                <a className="color" href="https://medium.com/@osgoodgunawan" target="_blank" rel="noopener noreferrer">
                    <img className="icon" src={medium} alt="Medium"/>Medium
                </a>
                </div>
                
         </div>
    )
}


export default Footer