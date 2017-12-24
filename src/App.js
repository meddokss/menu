import React, { Component } from 'react';
import './App.css';

import Menu from './Menu/index';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="test"></div>
          <Menu/>
          <div className="test"></div>
      </div>
    );
  }
}

export default App;
