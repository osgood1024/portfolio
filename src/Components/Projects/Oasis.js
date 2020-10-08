import React from 'react';
import AbsoluteWrapper from '../AbsoluteWrapper';
import './Project.css' ;
import { Container, Col, Row} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Footer from '../Footer';


function Oasis() {
    const url="https://www.youtube.com/watch?v=8ZyQO-jJTW4&feature=emb_title"
    return (
        <AbsoluteWrapper>
        <div className='container_project'>
            <img src={"../Oasis/first.png"} alt={'top'} className={'photo'} style={{width:'70%'}} />
        </div>
        <Container>
            <Col>
                <h1><b>Oasis</b></h1>
                <br/>
                <p>Timeline: ~2.5 months </p>
                <p>Role: UX designer, sketching, prototyping, wireframing, storyboarding </p>
                <p>Tool: Figma and Marvel. Built in HTML, CSS  and Javascript</p>
                <p>Team: Sergio Villazon, Sarah Ehsan, Jing Teo</p>
                <br/>
                <h2>Background</h2>
                <hr/>
                <p>We have all had that moment when we don't know what to do where to host our birthday events, workshops, photoshoot, and meeting. 
                    After speaking with a lot of students and individuals outside of campus, we noticed a user need for renting/reserving spaces.</p>
            </Col>
            <br/>
             <Col>
                <h2><u><b>Problem Statement</b></u></h2>
                <br/>
                <p className='boxBorder'>
                    Offering or reserving a space for an event should be easy and efficient, as well as seeking events to attend.
                 </p>
            </Col>
            <br/>
            <Col>
                <h2>Storyboarding</h2>
                <hr/>
                
                <Container>
                    <Row>
                    <Col xs={6} >
                        <img src={"../Oasis/Storyboard1.png"} alt={'first'} className={'photo'}  />
                        <div className="smallP">
                        <p>Storyboard #1</p>
                        The storyboard represents the need to offer their empty spaces. 
                        The user wants to make use of his empty apartment,
                        so he uses the Oasis to offer someone his place to host an event.
                        </div>
                    </Col>
                    <Col xs={6}>
                        <img src={"../Oasis/Storyboard2.png"} alt={'second'} className={'photo'}  />
                        <div className="smallP">
                        <p>Storyboard #2</p>
                        The storyboard represents the need to find a place to host a party because they have limited spaces to host a party. 
                        The user is trying to host a birthday party for her kids. 
                        She uses the Oasis to rent a place for a few hours to host the birthday party.
                        </div>
                    </Col>
                    <Col xs={6}>
                        <img src={"../Oasis/Storyboard3.png"} alt={'third'} className={'photo'} />
                        <div className="smallP" >
                        <p>Storyboard #3</p>
                        The storyboard represents the need to find events to attend. 
                        The user is an individual who is out of their element and seeking events to participate in their area.
                        They use Oasis to filter through events in their field and therefore attend as a result.
                        </div>
                    </Col>
                    </Row>
                </Container>
            </Col>
            <br/>
            <Col>
                <h2>Paper Prototype</h2>
                <hr/>
                <p>
                The next step in design process was building and testing a paper prototype of our storyboards.
                 We decided to merge the idea storyboard #1 and #2 for our paper prototype. 
                 It was unique experience for me because It was my first user testing with a paper prototype. 
                 Initially, it was hard for me not to focus on the little details in the paper prototype, but I eventually was able to look at the bigger picture of the UX design. 
                 Below is the video of the paper prototype in the user testing.
                </p>
                <br/>
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
                 <br/>
                 <p>Below is the paper prototype</p>
                 <img src={"../Oasis/paper_prototype.png"} alt={'paper_prototype'} className={'photo'} />
                 
                <p>Our finding in our user testing:</p>

                <p>Change format of “Advanced Search” on Prototype to be the more consistent with the usual search.</p>

                <div className="list">
                <li>Evaluator expressed their confusion when pressing “Advanced Search” because the layout was different than the initial   
                search that they took to - Change some tabs to pop-ups instead to take up less space.
                </li>

                <li>
                It was a design recommendation that the evaluator provided, to keep the user in the same page,
                so the experience remains consistent - Add appropriate error messages when an error occurs. 
                </li>

                <li>
                    Our prototypes did not have any error messages, and the evaluation recommended we should add some.
                </li>
                </div>
            </Col>
            <br/>

            <Col>
                <h2>Wireframes</h2>
                <hr/>
                <p>From the paper prototype, we determined to use the second pages of the paper prototype as our home page idea,
                 as we then began wireframing what would be our first real prototypes.</p>
                 <br/>
                 <Row>
                    <Col xs={6}>
                    <img src={"../Oasis/wireframe1.png"} alt={'first'} className={'photo'}  />
                    </Col>

                    <Col xs={6}>

                    <img src={"../Oasis/wireframe2.png"} alt={'second'} className={'photo'}  />

                    </Col>
                </Row>

            </Col>
            <br/>
            
            <Col>
                <h2>User Testing</h2>
                <hr/>
                <p>
                After finishing the wireframing, we began to user test our application. Before the user testing, 
                we wrote an instruction user testing plan to help avoid observer bias. After the trial finished, 
                we collected all the thoughts that the user had during their experience. 
                We want to get a good idea of what their overall thoughts were using the program and any points of confusion that they faced. 
                Below are the changes we would like to implement after the user testing:
                </p>
                <div className='list'>
                <li>
                <b>More prominent “Submit” button → </b>
                We noticed that participants lagged a bit when asked to proceed to the next page due to the button being small 
                and insignificant to the eye. It is something we would like to enhance by including a submit button that is larger 
                and more prominent by perhaps making it a different color. This is important because it’s a small yet significant factor 
                in the user’s checkout process.
                </li>
                
                <li>
                <b>Remove search bar → </b>
                Both participants expressed that the search bar at the button is unnecessary.
                We also found it to be unnecessary upon observing our participants as well. It gives user’s leeway to 
                type in events that aren’t included in our storage and thus confuse users which is why we would like to remove it as a whole. 
                We also have agreed that we have a right amount of events displayed for users to choose from.
                </li>
                <li>
                <b>Include venue details in confirmation screen (venue name, location, price, additional services added) → </b>
                We want to implement this in because it was brought up in testing and we also noticed that it was an unsettling part 
                of the experience. A majority of purchase websites always include details of the purchase in the confirmation screen which 
                is this something that most users are used to. We should remain consistent with expectations.
                </li>
                <li>
                <b>Include a “cancel booking” / “cancel listing space” button → </b>
                We want to implement a “cancel booking” button after checkout in case the user has made a mistake as 
                well leave them with options rather than having to resort to contacting Oasis to resolve the issue. 
                We would also like to implement this on the other side of the website when a user lists a space for space. 
                Users are humans and make mistakes which is why they should be able to recover from them in a timely and efficient manner! 
                </li>
                <li>
                <b>Implement a drop-down menu for choosing a city → </b>
                 We want to implement this after noticing that it was a bit awkward for participants to type in the city. 
                 There is also the fact that cities must be spelled with capital letters and we only offer three cities for now which 
                 is why a drop-down would be a lot more clear.
                </li>
                <li>
                <b>Make “favorites” and “trending” separate tabs on header → </b>
                Both users stated that they found it confusing to click on “favorites” when not logged in and become directed to “trending” 
                locations instead. We want to implement this comment by making them two separate tabs on the header so that users can browse 
                through popular/trending venues without being confused (since it’s listed as favorites right now). We think this would be a 
                good idea since it’s confusing as of now and needs clarification. They also informed us that it would be a nice option as a 
                means of browsing the website before being locked into filters.
                </li>
                <li>
                <b>Direct users directly to venues rather than filtering page first → </b>
                One of our participants suggested being directed to venues first instead and filtering within a pop-up rather than the
                filtering screen first. This is something we are considering for the redesign because some users may not want to filter 
                through but browse through venues to get a sense of the website first.
                </li>
                </div>
            </Col>
            <br/>
            <Col>
            <h2>Final Design</h2>
            <hr/>
            <p>
            Based on feedback from our user testing and wireframes we completed the first version of the Oasis web application. 
            We then began to code this version of the application and it is currently available to try and test online.
            Here is the final version of the application:
                    <a href="https://sergiov98.github.io/Oasis/index.html" rel="noopener noreferrer" target="_blank"   >
                        <b> Click here for final version</b> 
                    </a>
                
            </p>


                <Container>
                    <Row>
                    <Col xs={12} >
                        <img src={"../Oasis/final_design1.png"} alt={'first'} className={'photo'} />
                    </Col>
                    <Col xs={12}>
                        <img src={"../Oasis/final_design2.png"} alt={'second'} className={'photo'} />
                    </Col>
                    <Col xs={12}>
                        <img src={"../Oasis/final_design3.png"} alt={'third'} className={'photo'} />
                        
                    </Col>
                    </Row>
                </Container>
            </Col>
            <br/>
            <Col>
                <h2>Reflection</h2>
                <hr/>
                <p>
                Initially, I have begun the insight and inspiration behind the project. 
                Last summer 2018, when I was in Asia during the internship, my colleague was about to have her birthday party coming soon. 
                However, she didn’t know where to begin, due to her place is too small for a birthday celebration. 
                From then, the idea of offering or reserving a space for an event should be easy and efficient for everyone came to my mind instantly.
                Fast forward, I never thought my idea would be the main topic to execute in this project.
                This journey had been an amazing and memorable experience for me. There was a moment that we struggled and felt challenged,
                but throughout those obstacles, we were able to stick together as a group and worked toward a solution.
                The challenged taught us a lot with the design processes, methods, and front end development skills.
                This project not only was my first project working as a team but also the first project that I experience in the real world.
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

export default Oasis
