import React from 'react';
import SignUpForm from '../signup/signupform';
import 'bootstrap/dist/css/bootstrap.css';

export default class SignUp extends React.Component{
  render(){
    return(
      <div>
        <SignUpForm/>
      </div>
    )
  }
}