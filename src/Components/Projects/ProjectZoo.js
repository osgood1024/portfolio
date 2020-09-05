import  React from 'react' ;
import AbsoluteWrapper from '../AbsoluteWrapper' ;
import './Project.css' ;
import { Container, Col } from 'react-bootstrap';
import Footer from '../Footer';


const ProjectZoo =()=> {
    return (
        <AbsoluteWrapper>
            <div className='container_project'>
                <img src={"./Welcome.png"} alt={'animation'} id={'welcome'} />
                <br/>
                <a href="https://theprojectzoo.netlify.app/" rel="noopener noreferrer" target="_blank" className="button">
                   <b>
                   WEBSITE
                   </b> 
                </a>
            </div>
            <br/>
            <Container>
                <Col>
                <h2>About:</h2>
                <hr/>
                    <p>
                    This is a website where you can find project ideas or share your projects with the platform. 
                    The concept of this project came from my problem. I had difficulty or lack of resources to find new project topic ideas to work on. 
                    For that reason, I decided to create a website where people can browse around to check other people's projects 
                    or contribute their projects to the site.
                    </p>
                </Col>
                <img src={'./PZ/home2.png'} alt={'homepage'} className='photo '/>
                </Container>

                <br/>
                <br/>

                <Container>
                <Col>
                    <h2 style={{textAlign:'center'}}>Tech Stack:</h2>
                    <hr/>
                    <li>
                       <a href='https://github.com/osgood1024/Project_Zoo_client_side' rel="noopener noreferrer" target="_blank">
                       React Front End
                        </a> 
                    </li>
                    <li>
                        <a href='https://github.com/osgood1024/Project_Zoo_server_side' rel="noopener noreferrer" target="_blank">
                            Ruby on Rails Back End
                        </a>
                    </li>
                </Col>
                <br/>
                <div style={{textAlign:'center'}}>
                    <a href="https://www.youtube.com/watch?v=bXpsp-2DubA" rel="noopener noreferrer" target="_blank" className="button">
                        <b>
                            Video Demo
                        </b> 
                    </a>
                </div>
                </Container>
                <br/>
                <br/>

            <Footer/>
        </AbsoluteWrapper>

    )
}

export default ProjectZoo
