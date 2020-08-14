import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Containers/Home';
import Projects from './Containers/Projects';
import About from './Containers/About';
import Footer from './Components/Footer'
import {Route,Switch} from 'react-router-dom';



class App extends Component{

  
  render(){
    return (
      <React.Fragment>
        <Navbar/>
          <Switch >
            <Route exact path="/" component={Home}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/about'component={About}/>
          </Switch>
        <Footer/>
      </React.Fragment>
    )}
}
export default App;


