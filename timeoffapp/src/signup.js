import React from 'react';
import MainHeader from './mainheader';
import SignUpForm from './signupform';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.css';

export default class SignUp extends React.Component{
  render(){
    return(
      <div>
        <MainHeader/>
        <SignUpForm/>
        <Footer/>
      </div>
    )
  }
}