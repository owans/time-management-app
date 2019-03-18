import React from 'react';
import LoginForm from './loginform';
import MainHeader from './mainheader';
import Footer from './footer';

export default class login extends React.Component{
  render(){
    return(
      <div>
        <MainHeader/>
        <LoginForm/>
        <Footer/>
      </div>
    )
  }
}