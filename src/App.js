import React, { useContext } from "react";
import { Switch, Route} from "react-router-dom";
import { __RouterContext } from 'react-router';
import { useTransition, animated } from "react-spring";
import About from "./Containers/About";
import Home from "./Containers/Home";
import Projects from "./Containers/Projects";
import Navbar from  './Components/Navbar';
import Footer from './Components/Footer'
import './App.css';
import ParticlesContainer from './Components/ParticlesContainer'
// import Particles from "react-particles-js";




const App = () => {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate(100%,0)' },
    enter: { opacity: 1, transform: 'translate(0%,0)' },
    leave: { opacity: 0, transform: 'translate(-50%,0)' },
  });

  return (
    <>  
    {/* <div className='page-container'>  */}
        {/* <div className='content-wrap'> */}
      <Navbar/>
        {/* <ParticlesContainer> */}

      <main >
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects}/>
            </Switch>
          </animated.div>
        ))}
      </main>
        {/* </ParticlesContainer> */}
          {/* </div> */}
         <footer>
            <Footer/>
         </footer>
          
    {/* </div>  */}
    </>
  );
};

export default App;


