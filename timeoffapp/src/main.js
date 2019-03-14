import React, { Component } from 'react';
import '../src/index.css';
import '../src/App.css';
import Home from './home';
import SignUp from './signup';
import Login from './login';
import Employee from './employee';
import TeamView from './teamview';
import Supervision from './supervision';
import Abscence from './abscence';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';
class Main extends Component{
    render(){
    return (
      <Router>
        <div>
          <header>
            <nav className="navbar">
                <li className="logo" style={{textDecoration:"none"}}><Link to="/" component={Home}>OwaTimer</Link></li>
                <ul className="nav-links">
                <li className="nav-item" style={{textDecoration: "none"}}><Link to="/login" component={Login}>Login</Link></li>
                <li className="nav-item" style={{textDecoration: "none"}}><Link to="/employee" component={Employee}>Employee</Link></li>
                </ul>
            </nav>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/employee" component={Employee}/>
              <Route path="/teamview" component={TeamView} />
              <Route path="/supervision" component={Supervision} />
              <Route path="/abscence" component={Abscence}/>
            </Switch>
        </header>
        </div>
      </Router>
    );
  }
}

export default Main;