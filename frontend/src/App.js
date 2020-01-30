import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    response: '',
    user: '',
    details:'',
  };

  callApi = async () => {
    console.log(this.state.user);
    const response = await fetch(`https://api.github.com/users/${this.state.user}/repos`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);


    this.setState({
      details: body[0].owner
    });
  }
  changeField(fieldName, event) {
    var field = {};
    field[fieldName] = event.target.value;
    this.setState(field);
  }

  render() {
    return (
      <div>
        <form>
          <input value={this.state.user} name="user" id="user" type="text" onChange={this.changeField.bind(this, 'user')} />
          <div className="App">
            <p className="App-intro">{this.state.response}</p>
          </div>
          <button type="button" onClick={this.callApi}>Conectar</button>
        </form>
        <p>{this.state.details}</p>
      </div>
    );
  }
}

export default App;