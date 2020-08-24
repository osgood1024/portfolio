import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Containers/Home';
import Projects from './Containers/Projects';
import About from './Containers/About';
import Footer from './Components/Footer';
import {Route,Switch,Link} from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'




class App extends Component{

  
  render(){
    return (
      // <React.Fragment>
      //   <Navbar/>
      //     <Switch >
      //       <Route exact path="/" component={Home}/>
      //       <Route path='/projects' component={Projects}/>
      //       <Route path='/about'component={About}/>
      //     </Switch>
      //   <Footer/>
      // </React.Fragment>
      <div style={{height: '150px', position: 'relative'}}>
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
    
    <Header transparent title= {<Link to = '/'> <h3>Logo</h3></Link>} style={{color: 'white'}}>
            <Navigation>
                {/* <Navbar/> */}
                <Link to="/projects"> Projects </Link>
                <Link to="/about"> About Me </Link>
                <a href = '/resume.pdf' rel="noopener" target="_blank" >Resume</a>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Content>
          <div className= "page-content"/>     
          <Switch >
             <Route exact path="/" component={Home}/>
             <Route path='/projects' component={Projects}/>
             <Route path='/about'component={About}/>
          </Switch>
        </Content>
        
    </Layout>
</div>


    )}
}
export default App;


