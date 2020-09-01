import React from 'react';
import AbsoluteWrapper from '../Components/AbsoluteWrapper';
import '../App.css'
import ProjectCard from '../Components/ProjectCard';
import Footer from '../Components/Footer';

// import {Grid} from "@material-ui/core";


const Projects = ()=>{
    return(

         <AbsoluteWrapper>
        
            <ProjectCard/>
            
             <Footer/>
        
        </AbsoluteWrapper>
    )
}

export default Projects