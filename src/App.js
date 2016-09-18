import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listing from './components/Listing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="left fifty-p">
          <Listing />
        </div>
        <div className="right fifty-p">
          <Listing />
        </div>
      </div>
    );
  }
}

export default App;
