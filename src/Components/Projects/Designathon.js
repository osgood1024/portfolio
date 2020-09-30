import React from 'react';
import AbsoluteWrapper from '../AbsoluteWrapper';
import { Container, Col } from 'react-bootstrap';
import Footer from '../Footer';
import './Project.css' ;

function Designathon() {
    return (
        <AbsoluteWrapper>
        <div className='container_project'>
            <img src={"../Designathon/design_screen.png"} alt={'picture'} className={'photo'} style={{width:'70%'}} />
        </div>
            <Container>
                <Col>  
            <h1><b>Pepper Canyon Designathon</b></h1>
                <br/>
                <br/>
                <p>Timeline: 2 days</p>

                <p>Role: Designer, Planner, UX designer, project management and presented final product</p> 

                <p>Tool: Figma</p>

                <p>Team: Jiarui Han, Mingxuan Fan, Dian Yu, Kaiyun Fu, Yiwen Hou</p>    
                
                <br/>

                <h2>Background</h2>
                <hr/>
                    <p>
                    In 2019 April 6 and 7, the University California of San Diego held a first-ever design hackathon. There were over 200+ students, neighbors, designers, technologists, planners, media-makers, and 
                    future users come together for the Paper Canyon Mobility Hub Designathon,
                    an event developing proposals that will support the transformation Pepper Canyon Trolley Station at UCSD campus, currently under construction, into a dynamic, multimodal mobility hub. 
                    I was a part of a team of 6 UCSD students (4 UX designers and two computer science students).
                    For two days of competition, every team needs to present their final products to the judges, shareholders, and stakeholders of the Pepper Canyon Station.

                    The goal of the designathon is to explore and expand mobility between the trolley station and the campus at large. Projects will include ideas and proposals for urban plans, tech and data solutions, and services and programs that support mobility and experiences at the station and the surrounding UC San Diego campus. 
                    </p>
                </Col>

                <div className='click'>
                    <a href="https://sites.google.com/ucsd.edu/peppercanyondesignathon/home" rel="noopener noreferrer" target="_blank" className="button"  >
                        <b>
                            Learn More
                        </b> 
                    </a>
                </div>

                <br/>
                <Col>
                <h2><u><b>Problem Statement</b></u></h2>
                <br/>
                <p className='boxBorder'>
                 Today college students don’t have the time to eat breakfast due to having an early class and rushing to lecture.
                 With the Pepper Canyon station in the future, these issues remain unsolved. 
                 Its relatively far distance from the station to most of the classrooms on campus. 
                 For this reason, our team focused on technology and data solutions to solve this dilemma.
                 </p>
                </Col>

                <div className='container_project'>
                     <img src={"../Designathon/map.png"} alt={'picture'} className={'photo'} style={{width:'80%'}} />
                 </div>

                 <Col>
                 <h2>User research</h2>
                 <hr/>
                 <p>
                 Our target users are students who live off-campus and individual disabilities who need to grab a quick bite of food and rush to their final destination as fast as possible. 
                 We mainly want to focus on the majority demographic of our data, which people who live off-campus are far more population than individual disabilities; therefore, we conducted a survey on people who live off-campus.
                 With the support of slack and social media platforms used as our survey, we found the majority of people have the problem of not getting breakfast in the morning:
                 <b>“ 54.1% never eat breakfast and 16.2 % eat breakfast once a week due to no time making breakfast and rushing to classrooms.”</b>
                 </p>
                 <div className='container_project'>
                     <img src={"../Designathon/user_research.png"} alt={'picture'} className={'photo'} style={{width:'80%'}} />
                 </div>
                <div>
                Here, our team conducted a survey on various reasons for not having breakfast before the morning class. 
                There are about 78.8 % of people who live off-campus says they have no time for eating breakfast and 23.3 %. 
                people don’t have the habit of eating breakfast in the morning.
                </div>
                 </Col>
                <br/>
                <br/>
                 <Col>
                 <h2>Solution</h2>
                 <hr/>
                 <p>
                    From the survey and research, we can see that most people who live off-campus dont have the time to eat breakfast and hustling 
                    to lecture directly without even thinking about their daily eating habits.With opening Pepper Canyons station,
                    we believe a food’s app combines with pick-up shuttle are the solutions to solve these problems.  
                </p>
                <p>
                    The food’s app (Foodie) is an app for students who live off-campus, visitors, and passengers that want to order food 
                    and use the shuttle after arriving at the Pepper Canyon station. Users can save the amount of time by pre-ordering food at home or 
                    on the way to the trolley station. Once users arrived at the station, the shuttle will pick and drop users to a nearby station,
                    which close by the classrooms area. At the same time, the food will be ready in the shuttle to provide users to eat. 
                    They are two types of users for the app, one for the guest and one for the restaurants’ owners. 
                    We mapped out an end-to-end interactive user journey with the application for user and restaurant.
                 </p>
                 </Col>
                 <br/>
                 <br/>
                 <Col>
                <h2>User Flow (Useer Journey)</h2>
                <hr/>
                 <div className='container_project'>
                     <img src={"../Designathon/user_flow.png"} alt={'picture'} className={'photo'} />
                 </div>
                </Col>
                <br/>
                <Col>
                <br/>
                    <h2 style={{textAlign:'center'}}>Tech Stack:</h2>
                    <hr/>
                    <li>
                        Ruby on Rails 
                    </li>
                </Col>
                <br/>
            
                </Container>
                <br/>
                <br/>

            <Footer/>
        </AbsoluteWrapper>
    )
}

export default Designathon ;
