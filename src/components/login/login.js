import React from 'react';
import LoginForm from '../login/loginform';
import MainHeader from "../common/mainheader";
<<<<<<< HEAD
import {withRouter} from "react-router-dom";
=======
>>>>>>> 34a22b47b857502dd6cb2e72a1d2ae2886a446bf

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