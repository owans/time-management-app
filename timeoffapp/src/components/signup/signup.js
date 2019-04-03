import React from 'react';
import MainHeader from '../common/mainheader';
import SignUpForm from '../signup/signupform';
import Footer from '../footer/footer';
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