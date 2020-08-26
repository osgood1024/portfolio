import React from 'react';
import AbsoluteWrapper from '../Components/AbsoluteWrapper';
import '../App.css'


const Home =()=>{
    const myPic=require('../Pics/beach.jpg');

    return (
        <AbsoluteWrapper >
            <img className="photo" src={myPic} alt="Osgood"/>
        </AbsoluteWrapper>


    )
}

export default Home;