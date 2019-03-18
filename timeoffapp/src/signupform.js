import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import {Link} from 'react-router-dom';


const emailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const nameRegex = RegExp(/^[a-zA-Z]+$/);

export default class SignUpForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      companyname: null,
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      confirmpassword: null,
      iagree: null,
      formerrors:{
        companyname: "",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
        iagree: ""
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
      case "companyname":
        formerrors.companyname = value.length < 3 && value.length > 0 ?
        "Minimum 3 character required" : "";
      break;

      case "firstname":
        formerrors.firstname = nameRegex.test(value) && value.length > 0 ?
        "" : "Alphabets Only";
      break;

      case "lastname":
        formerrors.lastname = nameRegex.test(value) && value.length > 0 ?
        "" : "Alphabets Only";
      break;

      case "email":
        formerrors.email = emailRegex.test(value) && value.length > 0 ?
        "" : "Enter a Valid Email";
      break;

      case "password":
        formerrors.password = value.length < 6 && value.length > 0 ?
        "Minimum 6 character required" : "";
      break;

      case "confirmpassword":
        formerrors.confirmpassword = this.state.confirmpassword !== this.state.password ?
        "Must match password" : "";
      break;

      default:
      break;
    }

    this.setState({formerrors, [name]: value}, () => console.log(this.state))

  }
  

  render() {
    const { formerrors } = this.state;

    return (
      <div>
        
        <form name="form" method="post" action="congratulations!" 
        onSubmit={this.handleSubmit}>
        
          <fieldset>
            <div className="container">
            
            <div className="form-group container">
            <h2 className="text-primary">Sign Up</h2>
            <div className="col form-group">
                <label htmlFor="companyname">
                <input type="text" className="form-control" 
                name="companyname" id="companyname" 
                placeholder="Company Name" onChange={this.handleChange} 
                required>
                </input>
                {formerrors.companyname.length > 0 && (
                  <span className="error-message">
                  {formerrors.companyname}</span>
                )}
                </label>
                </div>
              </div>


            <div className="form-group container">
                <div className="col form-group">
                  <label htmlFor="firstname">
                  <input type="text" className="form-control" 
                  name="firstname" id="firstname" placeholder="First Name" 
                  onChange={this.handleChange} required>
                  </input>
                  {formerrors.firstname.length > 0 && (
                  <span className="error-message">
                  {formerrors.firstname}</span>
                  )}
                  </label>
                </div>

              <div className="form-group">
              <div className="col form-group">
                <label htmlFor="lastname">
                <input type="text" className="form-control" name="lastname"
                id="lastname" placeholder="Last Name" 
                onChange={this.handleChange} required>
                </input>
                {formerrors.lastname.length > 0 && (
                  <span className="error-message">
                  {formerrors.lastname}</span>
                )}
                </label>
              </div>
              </div>
          </div>
            
              
            <div class="form-group container">
              <div class="col-5">
              <label for="start">
                <input type="date" class="form-control" placeholder="City"
                required>
                </input>
                </label>
              </div>
              <div class="col-5">
              <label for="tentacles">
                <input type="number" class="form-control" placeholder="Age"
                required>
                </input>
                </label>
              </div>
            </div>

          <div className="form-group container">
          <div className="col form-group">
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
          </div>

          <div className="form-group container">
            <div className="col form-group">
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

            <div className="col form-group">
              <label htmlFor="confirmpassword">
              <input type="password" className="form-control" 
              name="confirmpassword"
              placeholder="Confirm Password"
              onChange={this.handleChange} required>
              </input>
              {formerrors.confirmpassword.length > 0 && (
                <span className="error-message">
                {formerrors.confirmpassword}</span>
              )}
              </label>
            </div>
          </div>
          <div className="form-group container">
          <div className="col form-group">
            {/* <Link to="/login"> */}
            <button type="submit" className="btn btn-primary mr-1
            btn-lg">
            Submit
            </button> 
            {/* </Link>      */}
          </div>
            </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}