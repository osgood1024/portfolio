import React from 'react';
import AbsoluteWrapper from '../AbsoluteWrapper';
import { Container, Col, Image } from 'react-bootstrap';
import Footer from '../Footer';
import ReactPlayer from 'react-player'
import './Project.css' ;

function Designathon() {
    const url='https://www.youtube.com/watch?v=hldC7aXFyFY&feature=emb_title'
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
                <div className="smallP">
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
                <h2>User Flow (User Journey)</h2>
                <hr/>
                     <img src={"../Designathon/user_flow.png"} alt={'picture'} className={'photo'} />
                </Col>
                <br/>

                <Col>
                <h2>Foodie App</h2>
                <hr/>
                <p>
                With foodie app, people can pre-order food before the day or order food in the trolley while riding on the way to Pepper Canyon station. 
                After ordering the food, the application will send a QR code for the user to unlock the locker in the mini-shuttle. 
                The food will be ready inside the locker once the user gets notification from the app. However, this mini-shuttle is only available for people who purchased the food.
                They are two ways of ordering the food, the foodie app, and inside the trolley where there is touch screen food menu on the tables /windows /walls. 
                It will be the same process after ordering food in the trolley.
                </p>
                <img src={"../Designathon/foodie.jpg"} alt={'picture'} className={'photo'} />

                <h2>Final Design</h2>
                
                <img src={"../Designathon/final_design1.png"} alt={'picture'} className={'photo'} />
                <div className='smallP'>
                First landing page asks if you utilize as a user or a restaurant for the app. Here is the final design for the user account.
                </div>
                <img src={"../Designathon/final_design2.png"} alt={'picture'} className={'photo'} />
                <div className='smallP'>
                User account landing pages continue.
                </div>
                <img src={"../Designathon/final_design3.png"} alt={'picture'} className={'photo'} />
                <div className='smallP'>
                New User (Create Account) landing pages
                </div>

                <img src={"../Designathon/final_design4.png"} alt={'picture'} className={'photo'} />
                <div className='smallP'>
                For the restaurant user
                </div>
                
                <div className='player-wrapper'>
                                <ReactPlayer 
                                    className='react-player'
                                    url={url}
                                    playing={true} 
                                    controls={true} 
                                    light={true} 
                                    width='100%'
                                    height='100%'
                                />
                 </div>
                </Col>
                <br/>
                 <br/>
                <div className="smallP">
                A quick video demo on foodie app 
                </div>

                <br/>
                <br/>

                <Col>
                <h2>Shuttle (mini bus)</h2>
                <hr/>
                <p>
                The shuttle is not just a regular shuttle. The event informed us of an open mindset of upcoming future technology. 
                With this in mind, our team came out with the closest emerging technology that is coming in the next couple of years, 
                which is the future self-driving technology of the automobile. Since there is a distance from Pepper Canyon station to 
                the majority of the lecture classroom; therefore, with the assisting of self-driving mini-shuttle, it could avoid students rushing to class. 
                </p>
                <p>
                The self-driving shuttle will drive from the restaurant area to the trolley station in Pepper Canyon Station. 
                After the passengers' hoop in the shuttle, the shuttle begins dropping off at the nearby station where most of the major lecture halls on campus will be.
                </p>
                <p>    
                On the way back to the Pepper Canyon Trolley Station, it drives through the restaurants' area. 
                The shuttle has a sliding door behind the locker, where the food is ready to switch in and out the cabinets. 
                From then, the shuttle proceeds to the Pepper Canyon Trolley Station and prepares to pick up the new passengers.
                </p>
                <p>    
                For the students with special needs, it has a smaller designated shuttle with similar functionality but equipped with the necessary accommodation.
                </p>

                <img src={"../Designathon/shuttle.png"} alt={'picture'} className={'photo'} style={{width:'50%'}}/>
                <img src={"../Designathon/shuttle2.png"} alt={'picture'} className={'photo'} />
                </Col>
                <br/>
                <br/>
                <Col>
                    <h2>Conclusion</h2>
                    <hr/>
                    <p>
                        Our purpose is to merge technology and human beings experience to solve the potential problem for pepper canyon station. 
                        From brainstorming and the collected data, we found our underlying user problems are rushing to classes and having no time for breakfast.
                        Such design we believe it could solve both demands at the same time. </p>
                    <p>
                        With the app and the self-driving shuttle, not only it satisfies the students with such needs but also encourages 
                        more people to have a healthier lifestyle by eating breakfast.
                    </p>

                </Col>
                <Col>
                     <img src={"../Designathon/take_away.JPG"} alt={'picture'} className={'photo take_away'}/>
                </Col>
                
                <Col>
                <br/>
                    <h2 >Take Away</h2>
                    <hr/>
                    <p>
                    Our team was one of the five teams that won the designathon and rewarded $1000 for having a unique concept. 
                    It was our first design hackathon, and all of us just met the day before the competition began. 
                    I believe it is similar in the job field. Working as a team individuals need to adapt and understand others.
                    We may not know each other well, but we are focused and have the same mindset toward our goal. 
                    The designathon was an opportunity for us to show our ideas to the future Pepper Canyon station and the UCSD communities.
                    One crucial skill that I learned in this competition is leadership. All of the members of our team are international students and not very fluent in speaking English; 
                    therefore, I volunteered my team to present in the final presentation. 
                    Not only I gained confidence in my presentation skills on stage but also being part of the history in our first ever design hackathon in University California of San Diego. 
                    The Pepper Canyon Designathon was a memorable event for me. After the designathon, I told myself to join more design competitions in the future as this was only the beginning of the journey.
                    </p>
                   
                </Col>
                
                </Container>
                <br/>
                <br/>
                <br/>
                <br/>

            <Footer/>
        </AbsoluteWrapper>
    )
}

export default Designathon ;
