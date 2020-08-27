import React from 'react';
import AbsoluteWrapper from '../Components/AbsoluteWrapper';
import '../App.css'
import { Container, Col, Image } from 'react-bootstrap';



const About =()=>{
    const mypic=require("../Pics/profile.jpg");
    return(
        <AbsoluteWrapper>
           
                <div className='about'>
                    <Container>
                        <Col xs={12} sm={8} smOffset={2}>
                            <Image src={mypic} className='about-profile-pic'/>
                        </Col>
                        <Col >
                            <h1>
                                <strong>
                                    About Me
                                </strong>
                            </h1>
                          <br/>
                            <p>
                            Hi there! I am Osgood Gunawan, a <b>Product /User Experience Designer/Software Engineer</b> who has been deeply passionate about 
                            creating experiences that build intersections of problem-solving, design thinking, and business values.
                            </p>
                            
                            <p>
                            My most recent worked was The <a href="https://theprojectzoo.netlify.app/"  rel="noopener noreferrer" target="_blank"><strong>Project Zoo</strong></a>, 
                            a website where you can find project ideas or share your projects with the platform. 
                            I created the whole application from scratch. You can read more about Project Zoo  
                            <a href="https://github.com/osgood1024/Project_Zoo_client_side"  rel="noopener noreferrer" target="_blank"><strong> <i> here</i> </strong></a>.
                            </p>

                            <p>
                            My essence of culture lies between Chinese, Indonesian, and Taiwanese. 
                            My cultural background experiences have taught me to live independently and embrace the diversity of people's experiences.
                            When I am free, you can find me playing basketball, running, dancing, playing chess, cooking, and reading books.
                            </p>

                            <p>
                            Thank you for taking the time to get to know a little bit about me! 
                            I am currently seeking a full-time job/ internship/ apprenticeship opportunity. 
                            If you need a dedicated intern/employee or just want to make a new friend feel free to reach out to <a href="mailto: osgood1024@gmail.com"  rel="noopener noreferrer" target="_blank"><strong> me</strong></a>! 
                            </p>

                            
                        </Col>

                    </Container>
                </div>
                <div className='fun_activity'>
                    <Container>
                        <Col>
                        <h1>
                            <b>
                                Fun Activity
                            </b>
                        </h1>
                        </Col>
                    </Container>
         
                </div>
        </AbsoluteWrapper>
        
    )
}

export default About