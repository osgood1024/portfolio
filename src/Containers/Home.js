import React from 'react';
import AbsoluteWrapper from '../Components/AbsoluteWrapper';
import '../App.css'
import ParticlesContainer from '../Components/ParticlesContainer'


const Home =()=>{
    // const myPic=require('../Pics/beach.jpg');

    return (
        <AbsoluteWrapper >
            
                <ParticlesContainer />
                <h1>Code yard</h1>
           
            {/* <img className="photo" src={myPic} alt="Osgood"/> */}

  
        </AbsoluteWrapper>


    )
}

export default Home;