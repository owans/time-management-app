import React, { Component } from 'react';
import '../src/components/styles/index.css';
import '../src/components/styles/App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import TeamView from './components/teamview/teamview';
import Abscence from './components/abscence/abscence';
import SignUp from './components/signup/signup';
import EmployeeHeader from './components/common/employeeheader';
import NotFound from './components/notfound/notfound';
import Dashboard from './components/dashboard/dashboard';

class App extends Component{
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

export default App;