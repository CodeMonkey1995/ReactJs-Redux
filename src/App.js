import React, { Component } from 'react';

import Counter from './containers/Counter';
import Login from './containers/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Login />
      </div>
    );
  }
}

export default App;
