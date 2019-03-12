import React, { Component } from 'react';
import '../src/index.css';
import '../src/App.css';
import Home from './home';
import SignUp from './signup';
import Login from './login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Main extends Component{
    render(){
    return (
      <Router>
        <div>
          <header>
            <nav class="navbar">
                <li className="logo"><Link to="/" component={Home} style={{textDecoration:"none"}}>OwaTimer</Link></li>
                <ul class="nav-links">
                <li class="nav-item"><Link  className="link" to="/signup/" component={SignUp} style={{textDecoration: "none"}}>SignUp</Link></li>
                <li class="nav-item"><Link className="link" to="/login/" component={Login} style={{textDecoration:"none"}}>Login</Link></li>
                </ul>
            </nav>

              <Route exact path="/" component={Home} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
            
        </header>
        </div>
      </Router>
    );
  }
}

export default Main;