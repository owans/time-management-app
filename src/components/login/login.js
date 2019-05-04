import React from 'react';
import LoginForm from '../login/loginform';
import MainHeader from "../common/mainheader";

export default class login extends React.Component{
  render(){
    return(
      <div>
        <MainHeader/>
        <LoginForm/>
      </div>
    )
  }
}