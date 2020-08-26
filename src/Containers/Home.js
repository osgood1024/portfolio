import React from 'react';
import AbsoluteWrapper from '../Components/AbsoluteWrapper';
import '../App.css'
import ParticlesContainer from '../Components/ParticlesContainer';
import {Link} from 'react-router-dom';


const Home =()=>{
    // const myPic=require('../Pics/beach.jpg');

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
                    Check out my project
                </Link>
                
                </div>

            </div>

           
            {/* <img className="photo" src={myPic} alt="Osgood"/> */}

  
        </AbsoluteWrapper>


    )
}

export default Home;