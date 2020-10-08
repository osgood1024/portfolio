import React from 'react';
import AbsoluteWrapper from '../AbsoluteWrapper';
import { Container, Col } from 'react-bootstrap';
import './Project.css' ;
import Footer from '../Footer'



function MovieReview() {
    return (
        <AbsoluteWrapper>
       <div className='container_project'>
            <h1>Movie Review</h1>
            <br/>
                <img src={"./movie.png"} alt={'picture'} className={'photo'} style={{width:'70%'}} />
                <br/>
                <a href="https://github.com/osgood1024/Movie-Reviews" rel="noopener noreferrer" target="_blank" className="button">
                   <b>
                    Check here for more details 
                   </b> 
                </a>
            </div>
            <br/>
            <Container>
                <Col>
                <br/>
                <h2>About:</h2>
                <hr/>
                    <p>
                    A movie review website where users can check the review before watching the shows/movies or users can leave a review.
                    We do not own the movie copyright, every movies' data were pulling from movie DB API.
                    </p>
                </Col>
              <br/>
                <Col>
                <br/>
                    <h2 >Tech Stack:</h2>
                    <hr/>
                    <li>
                        Ruby on Rails 
                    </li>
                </Col>
                </Container>
                <br/>
                <br/>
                <br/>
            <Footer/>
    
        </AbsoluteWrapper>
    )
}

export default MovieReview
