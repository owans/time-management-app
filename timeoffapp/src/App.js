import React, { Component } from 'react';
import Home from './home';
import Main from './main';
import Login from './login';

class App extends Component {
  render() {
    return (
      <div>
        <Home/>
        <Login/>
        <Main/>
      </div>
    );      
  }
}

export default App;
