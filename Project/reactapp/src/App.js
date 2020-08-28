import React from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';

class App extends React.Component {

  constructor(props){
    super (props);
    this.state = {
      title: 'Portfolio',
      headerLinks: [
        {title: 'Home', path: '/' },
        {title: 'About', path: 'about' },
        {title: 'Contact', path: '/contact' }
      ],
      home: {
        title:'Group Portfolio',
        subTitle: 'Current Projects',
        text: 'Anyone who has never made a mistake has never tried anything new'
      },
      about: {
        title:"About Me",
        
      },
      contact: {
        title:"Contact Me",
        
      }
      

    }
  }
  render (){
    return (
    <Router>
<Container className ='p-0' fluid = {true}>
  <Navbar className = 'border-bottom' bg='transparent' expand='lg'>
    <Navbar.Brand>Our Projects</Navbar.Brand>
    <Navbar.Toggle aria-controls='navar-toggle'/>
    <Navbar.Collapse id='navbar-toggle'>
      <Nav className= 'ml-auto'>
<Link className = 'nav-link' to='/'>Home</Link>
<Link className = 'nav-link' to='/about'>About</Link>
<Link className = 'nav-link' to='/contact'>Contact</Link>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <Route path='/' exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
  <Route path='/about' render={() => <AboutPage title={this.state.about.title} />} />
  <Route path='/contact' render={() => <ContactPage title={this.state.contact.title} />} />
<Footer  />
</Container>
    </Router>
    );
  }
} 
export default App;