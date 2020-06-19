import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: 'alejandrotoigo'
  }

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    const titleStyle = {
      textDecorationLine: 'underline'
    }

    return (
      <div className="App">
        <h1 style={titleStyle}>React practice basic syntax</h1>
        <UserInput  username={this.state.username} 
                    change={this.changeUsernameHandler.bind(this)}/>

        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    )
  };
}

export default App;
