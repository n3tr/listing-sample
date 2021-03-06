import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListingAExp from './containers/ListingAExp'
import ListingBExp from './containers/ListingBExp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="left fifty-p">
          <ListingAExp />
        </div>
        <div className="right fifty-p">
          <ListingBExp />
        </div>
      </div>
    );
  }
}

export default App;
