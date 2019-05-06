import React from 'react';
import LoginForm from '../login/loginform';
import MainHeader from "../common/mainheader";
import {withRouter} from "react-router-dom";

class login extends React.Component{
  render(){
    return(
      <div>
        <MainHeader/>
        <LoginForm/>
      </div>
    )
  }
}

export default withRouter(login)