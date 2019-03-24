import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };
class LoginForm extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          email: null,
          password: null,
          invalidError : false,
          formErrors: {
            email: "",
            password: ""
          }
        };
      }
    
      handleSubmit = e => {
        e.preventDefault();
    
        if (formValid(this.state)) {
          let user = {email: this.state.email, password: this.state.password}
          user = JSON.stringify(user)
          console.log(user)
          localStorage.setItem('currentUser', user)
          alert('you succesfully logged in')

        } else {
          this.setState({invalidError: true})
         
        }
      };
    
      handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
          case "email":
            formErrors.email = emailRegex.test(value)
              ? ""
              : "invalid email address";
            break;
          case "password":
            formErrors.password =
              value.length < 6 ? "minimum 6 characters required" : "";
            break;
          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
      };
    render() {
        const { formErrors } = this.state;
        return(
            <div>
                <div className="text-center">
                </div>
                <form className="container mb-5" onSubmit={this.handleSubmit} noValidate style={{padding: '2% 20%' }}>
                    <div className="">
                    <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control"
                          name="email"  noValidate onChange={this.handleChange}/>
                    {this.state.invalidError && (this.state.email === null) ? 
                    <p className="text-danger">* email is required</p> : '' }
                      {formErrors.email.length > 0 && (
                         <span className="text-danger">{formErrors.email}</span>
              )}
                   </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control"  
                                    name="password"
                                    noValidate
                                    onChange={this.handleChange}/>
                       {this.state.invalidError && (this.state.password === null) ? 
                    <p className="text-danger">* password is required</p> : '' }
                     {formErrors.password.length > 0 && (
                <span className="text-danger">{formErrors.password}</span>
              )}
                </div>
            
                <div className="container justify-content">
          <Link to="/signup">
            <small className="text-primary">Sign Up |</small>
          </Link>
          <Link to="/login">
          <small className="text-primary">| Forgot Password?</small>
          </Link>
            </div>

                  { formValid(this.state) ?    
                  <button onClick={this.handleSubmit} type="button" className="btn btn-primary text-light">
                       <Link  className="text-light" to="/dashboard">Login</Link>
                  </button>
                  :    <button type="submit" className="btn btn-primary text-light">Login</button>
                  }
            
                    </div>
                </form>
            </div>

        )
    }
}
export default LoginForm;
    