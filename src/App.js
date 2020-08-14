import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Containers/Home';
import Projects from './Containers/Projects';
import About from './Containers/About';
import Footer from './Components/Footer'
import {Route,Switch, useLocation} from 'react-router-dom';



class App extends Component{

  
  render(){
    const location = useLocation()

    return (
      <React.Fragment>
        <Navbar/>
          <Switch location={location}>
            <Route exact path="/" component={Home}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/about'component={About}/>
          </Switch>
        <Footer/>
      </React.Fragment>
    )}
}
export default App;


