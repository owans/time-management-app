import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const emailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export default class LoginForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: null,
      password: null,
      formerrors:{
        email: "",
        password: "",
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formerrors = this.state.formerrors;

    switch(name){
      case "email":
        formerrors.email = emailRegex.test(value) && value.length > 0 ?
        "" : "Enter a Valid Email";
      break;

      case "password":
        formerrors.password = value.length < 6 && value.length > 0 ?
        "Minimum 6 character required" : "";
      break;

      default:
      break;
    }

    this.setState({formerrors, [name]: value})

  }
  

  render() {
    const { formerrors } = this.state;

    return (
      <div className="container">
      
        <form name="form" method="post" action="Congratulations" 
        onSubmit={this.handleSubmit}>
          <fieldset>
            <div className="container">
          <div className="form-group container">
          <h2 className="text-primary">LogIn</h2>
            <label htmlFor="email">
            <input type="email" className="form-control" id="email"
            placeholder="you@email.com" name="email"
            onChange={this.handleChange} required>
            </input>
            {formerrors.email.length > 0 && (
              <span className="error-message">
              {formerrors.email}</span>
            )}
            </label>
          </div>

          
            <div className="form-group container">
              <label htmlFor="password">
              <input type="password" className="form-control" name="password" 
              placeholder="Password"
              onChange={this.handleChange} required>
              </input>
              {formerrors.password.length > 0 && (
                <span className="error-message">
                {formerrors.password}</span>
              )}
              </label>
            </div>

            <div className="container justify-content">
          <Link to="/signup">
            <small className="text-primary">Sign Up |</small>
          </Link>
          <Link to="/login">
          <small className="text-primary">| Forgot Password?</small>
          </Link>
            </div>

            <div className="container align-self-center">
            {/* <Link to='/dashboard'> */}
            <button type="submit" 
            className="my-1 btn btn-primary btn-lg">
            Login
            </button> 
            {/* </Link>      */}
          </div> 
            
            </div>
          </fieldset>

        </form>
      </div>
    )
  }
}
