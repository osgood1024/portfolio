import React from 'react';
import AbsoluteWrapper from '../Components/AbsoluteWrapper';
import '../App.css'
import ParticlesContainer from '../Components/ParticlesContainer';
import {Link} from 'react-router-dom';
import Footer from '../Components/Footer'


const Home =()=>{
 
    return (
        <AbsoluteWrapper >
               
            <div className="particles-js background-blue">
                
                <ParticlesContainer />
                <div className="btext">
                    <h1><strong>
                    Osgood Gunawan
                        </strong></h1>
                    <h2 className="mt-n1">
                        Software Engineer / UI & UX Designer
                    </h2>
                    <Link to ='/projects' className="boton">
                        Check out my projects
                    </Link>
                    
                </div>
           
                <Footer/>
            </div>
              
        </AbsoluteWrapper>
    )
}

export default Home;