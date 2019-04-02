import React, { Component } from 'react';
import './index.css';
import './App.css';
// import 'jquery/dist/jquery.min';
// import 'popper.js/dist/popper.min';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Route, Switch} from 'react-router-dom';
import Home from './home';
import Login from './login';
import TeamView from './teamview';
import Abscence from './abscence';
// import Employee from './employee';
import SignUp from './signup';
import EmployeeHeader from './employeeheader';
import NotFound from './notfound';
import Dashboard from './dashboard';

class Main extends Component{
    render(){
    return (
      <React.Fragment>
        <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/signup" component={SignUp}></Route>
              <Route exact path="/employeeheader" component={EmployeeHeader}></Route>
              <Route exact path="/teamview" component={TeamView}></Route>
              <Route exact path="/abscence" component={Abscence}></Route>
              <Route exact path="/dashboard" component={Dashboard}></Route>
              <Route component={NotFound}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default Main;