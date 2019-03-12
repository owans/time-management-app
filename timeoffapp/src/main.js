import React, { Component } from 'react';
import Home from './home';
import SignUp from './signup';
import Login from './login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Main extends Component{
    render(){
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/" component={Home}>Home</Link>
            </li>
            <li>
              <Link to="/signup/" component={SignUp}>SignUp</Link>
            </li>

            <li>
              <Link to="/login/" component={Login}>Login</Link>
            </li>
          </ul>
  
          <hr /> 

          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default Main;