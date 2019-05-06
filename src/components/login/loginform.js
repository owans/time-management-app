import React from 'react';
import '../styles/App.css';
import {Link, withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import env from "../../env";
import axios from "axios";
import Swal from "sweetalert2";

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  
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

        this.doesFormHaveErrors = this.doesFormHaveErrors.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


      componentDidMount(){
        const token = localStorage.getItem("owatimer-token");

        if(token) return this.props.history.push("/dashboard");
    }

    doesFormHaveErrors(){
      const errors = Object.values(this.state.formErrors).reduce((prev, curr) => {
        return curr ? prev + 1 : prev;
      }, 0)

      return !!errors;
    }

    showError(){
      this.setState({invalidError: true})

      setTimeout(() => this.setState({invalidError: false}),2000)
    }
    
      async handleSubmit (e) {

        e.preventDefault();
    
        try{
          if(this.doesFormHaveErrors()) 
          return this.showError();

            let user = {email: this.state.email, password: this.state.password}
           
            // const res = await axios.post(`${env.api}/user/login`, user)

            const res = await axios.post('http://localhost:5002/user/login', user)

            const token = res.data.data.token;

            localStorage.setItem("owatimer-token", token);

            this.props.history.push("/dashboard");

            Swal.fire(
              "Login Successful"
            );

        }catch(err){
          console.log("An error occurred", err.response);
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
            <div className="login-container">
                {
                  // eslint-disable-next-line jsx-a11y/accessible-emoji
                  this.state.invalidError && <p className="custom-toast">oops😒an error occurred</p>
                }
                <form className="container mb-5" onSubmit={this.handleSubmit} noValidate style={{padding: '2% 20%' }}>
                  <div className="">
                      <div className="form-group">
                        <label >Email address</label>
                          <input type="email" className="form-control"
                          name="email"  noValidate onChange={this.handleChange}/>
                          {this.state.invalidError && (this.state.email === null) ? 
                          <small className="text-danger">* email is required</small> : '' }
                          {formErrors.email.length > 0 && (
                          <span className="text-danger">{formErrors.email}</span>)}
                      </div>
                      <div className="form-group">
                        <label >Password</label>
                          <input type="password" className="form-control"  
                          name="password"
                          noValidate
                          onChange={this.handleChange}/>
                          {this.state.invalidError && (this.state.password === null) ? 
                          <small className="text-danger">* password is required</small> : '' }
                          {formErrors.password.length > 0 && (
                          <span className="text-danger">{formErrors.password}</span>)}
                      </div>
            
                      <div className="container justify-content">
                        <Link to="/signup">
                          <small className="text-primary">Sign Up |</small>
                        </Link>
                        <Link to="/login">
                          <small className="text-primary">| Forgot Password?</small>
                        </Link>
                      </div>

                  
                      <button  
                        onClick={this.handleSubmit}
                        type="submit"
                        className={`btn ${this.doesFormHaveErrors() ? 
                        "btn-secondary": 
                        "btn-primary"} 
                        text-light`}>
                        Login
                      </button>
                  </div>
                </form>
            </div>

        )
    }
}

export default withRouter(LoginForm);
    