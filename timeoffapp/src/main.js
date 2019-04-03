import React, { Component } from 'react';
import '../src/components/styles/index.css';
import '../src/components/styles/App.css';
// import 'jquery/dist/jquery.min';
// import 'popper.js/dist/popper.min';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Route, Switch} from 'react-router-dom';
import Home from '../src/components/home/home';
import Login from '../src/components/login/login';
import TeamView from '../src/components/teamview/teamview';
import Abscence from '../src/components/abscence/abscence';
// import Employee from './employee';
import SignUp from '../src/components/signup/signup';
import EmployeeHeader from '../src/components/common/employeeheader';
import NotFound from '../src/components/notfound/notfound';
import Dashboard from '../src/components/dashboard/dashboard';

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