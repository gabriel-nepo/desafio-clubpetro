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


  handleComponent() {
    if (this.state.active === 'users') {
      return <UsersTable />;
    }
    else if (this.state.active === 'details') {
      return <Details />;
    }
    else if (this.state.active === 'repositories') {
      return <Repositories />
    }
    else {
      return (
        <div>
          <img className="homepage" src={logo} alt="Detective Octocat"></img>
          <table className="table table-striped">
            <thead align="center">
              <tr>
                <th>Guide</th>
              </tr>
            </thead>
            <tbody>
              <tr align="center">
                <td>Users - List of GitHub users (ID,login)</td>
              </tr>
              <tr align="center">
                <td>Public Repositories - Search for a user and get his public repositories (ID,Name,URL)</td>
              </tr>
              <tr align="center">
                <td>Details - Search for a user and get his details (ID,Login,URL,Created At)</td>
              </tr>
            </tbody>
          </table>
        </div >
      )
    }
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <img src={logo} alt="Detective Octocat" height="42" width="42"></img>
          <Navbar.Brand href="#home" name="home" id="home" onClick={this.handleClick.bind(this)}>Detective Octocat</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link id="users" name="users" href="#users" onClick={this.handleClick.bind(this)}>Users</Nav.Link>
            <Nav.Link id="repositories" name="repositories" href="#repositories" onClick={this.handleClick.bind(this)}>Public Repositories</Nav.Link>
            <Nav.Link id="details" name="details" href="#details" onClick={this.handleClick.bind(this)}>Details</Nav.Link>
          </Nav>
        </Navbar>
        {this.handleComponent()}

      </div >
    );
  }
}
