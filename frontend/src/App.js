import React, { Component } from 'react';
import logo from './octocat.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';
import UsersTable from './components/UsersTable';
import Details from './components/Details';
import Repositories from './components/Repositories';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      active: 'home'
    }
    
  }

  handleClick(event) {
    this.setState({
      active: event.target.name
    })
  }

  componentDidMount() {
    
  }
  
  handleComponent(){
    if(this.state.active === 'home'){
      return <UsersTable/>;
    }
    else if(this.state.active === 'details'){
      return <Details/>;
    }
    else{
      return <Repositories/>
    }
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <img src={logo} alt="Smiley face" height="42" width="42"></img>
          <Navbar.Brand href="#home">Detective Octocat</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link id="home" name="home" href="#home" onClick={this.handleClick.bind(this)}>Users</Nav.Link>
            <Nav.Link id="repositories" name="repositories" href="#repositories" onClick={this.handleClick.bind(this)}>Public Repositories</Nav.Link>
            <Nav.Link id="details" name="details" href="#details" onClick={this.handleClick.bind(this)}>Details</Nav.Link>
          </Nav>
        </Navbar>
        {this.handleComponent()}

      </div >
    );
  }
}
