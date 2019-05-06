import React from 'react';
import '../styles/App.css';
import '../styles/index.css';
import {withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import env from "../../env";
import axios from "axios";
import Swal from "sweetalert2";


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  const onlyLetterRegex = RegExp(/^[A-Za-z]+$/)

class SignUpForm extends React.Component{
    constructor(props) {
        super(props);
        this.errorSate = {
          companyNameError: false
        }
    
        this.state = {
          companyName: null,
          firstName: null,
          lastName: null,
          email: null,
          department: null,
          dob: null,
          country: null,
          timezone: null,
          manager: null,
          password: null,
          invaildError: false,
          formErrors: {
            companyName: '',
            firstName: "",
            lastName: "",
            email: "",
            department: '',
            dob: '',
            manager: '',
            password: ""
          }
        };

        this.doesFormHaveErrors = this.doesFormHaveErrors.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
    
    async handleSubmit (e) {

      e.preventDefault();
  
      try{
        if(this.doesFormHaveErrors()) 
        return this.setState({invalidError: true});

          let user = {
            companyName: this.state.companyName,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            department: this.state.department,
            dob: this.state.dob,
            country: this.state.country,
            timezone: this.state.timezone,
            manager: this.state.manager,
            password: this.state.password,
          }
         
          const res = await axios.post(`${env.api}/user/signup`, user)

          const token = res.data.data.token;

          localStorage.setItem("owatimer-token", token);

          this.props.history.push("/dashboard");

          Swal.fire(
            "Registration Successful"
          )

      }catch(err){
        console.log("An error occured", err.response);
      }
    };
  

      handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
            case "companyName":
            formErrors.companyName =  value.length < 3 || !onlyLetterRegex.test(value)
            ? "alphabet only"
            : "";
          break;
          case "firstName":
              formErrors.firstName =  value.length < 3 || !onlyLetterRegex.test(value)
              ? "alphabet only"
              : "";
            break;
          case "lastName":
          formErrors.lastName =  value.length < 3 || !onlyLetterRegex.test(value)
          ? "alphabet only"
          : "";
          break;
          case "email":
            formErrors.email = emailRegex.test(value)
              ? ""
              : "invalid email address";
            break;
        case "department":
        formErrors.department =  value.length < 3 || !onlyLetterRegex.test(value)
          ? "alphabet only"
          : "";
        break;  
        case "dob":
        formErrors.dob =  value.length < 3
        ? "date of birth must be up to 3 characters (alphabet only)"
        : "";
        break;
        case "manager":
        formErrors.manager =  value.length < 3 || !onlyLetterRegex.test(value)
        ? "alphabet only"
        : "";
      break;
          case "password":
            formErrors.password = value.length < 6 ? "minimum 6 characters required" : "";
            break;
          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
      };
    render() {
      const { formErrors } = this.state;
        return(
          <div className="signup-container">
            <form className="container mb-5" onSubmit={this.handleSubmit} noValidate style={{padding: '2% 20%' }}>
              <div className="">
              <div className="form-group">
              <label >Company Name</label>
                <input type="text" 
                  className="form-control" 
                  name="companyName"  noValidate 
                  onChange={this.handleChange}/>
                  {this.state.invaildError && (this.state.companyName === null) ? 
                  <small className="text-danger">* Please input name of company</small> : '' } 
                  {(<span className="text-danger">{formErrors.companyName}</span>)}
              </div>
          <div className="form-group">
              <label >First Name</label>
                <input type="text" 
                  className="form-control" 
                  name="firstName"  noValidate 
                  onChange={this.handleChange}/>
                  {this.state.invaildError && (this.state.firstName === null) ? 
                  <small className="text-danger">* Please input your first name</small> : '' } 
                  {formErrors.firstName.length > 0 && (
                  <span className="text-danger">{formErrors.firstName}</span>)}
          </div>
          <div className="form-group">
              <label >Last Name</label>
                <input type="text" className="form-control" 
                name="lastName"  noValidate onChange={this.handleChange}/>
                {this.state.invaildError && (this.state.lastName === null) ? 
                <small className="text-danger">* Your last name is needed</small> : '' } 
                {formErrors.lastName.length > 0 && (
                <span className="text-danger">{formErrors.lastName}</span>)}
          </div>
          <div className="form-group">
              <label >Email address</label>
                <input type="email" className="form-control" placeholder="you@email.com"
                name="email"  noValidate onChange={this.handleChange}/>
                {this.state.invaildError && (this.state.email === null) ? 
                <small className="text-danger">* please input a valid email</small> : '' } 
                {formErrors.email.length > 0 && (
                <span className="text-danger">{formErrors.email}</span>)}
          </div>
          <div className="form-group">
              <label >Department</label>
                <input type="text" className="form-control" 
                name="department"  noValidate onChange={this.handleChange}/>
                {this.state.invaildError && (this.state.department === null) ? 
                <small className="text-danger">* Please input department</small> : '' } 
                {formErrors.department.length > 0 && (
                <span className="text-danger">{formErrors.department}</span>)}
          </div>

          <div className="form-group">
              <label >Date-Of-Birth</label>
                <input type="date" className="form-control"   
                name="dob"  noValidate onChange={this.handleChange}/>
                {this.state.invaildError && (this.state.dob === null) ? 
                <small className="text-danger">* Please input date of birth</small> : '' } 
                {formErrors.dob.length > 0 && (
                <span className="text-danger">{formErrors.dob}</span>)}
          </div>

          <div className="form-group">
              <label>Manager's name</label>
                <input type="text" className="form-control" name="manager"  noValidate 
                onChange={this.handleChange}/>
                {this.state.invaildError && (this.state.manager === null) ? 
                <small className="text-danger">* Please fill in your manager's name</small> : '' }
                {formErrors.manager.length > 0 && (<span className="text-danger">{formErrors.manager}</span>)}    
          </div>
          <div className="form-group">
              <label >Password</label>
                <input type="password" className="form-control" 
                name="password"
                noValidate
                onChange={this.handleChange}/>
                {this.state.invaildError && (this.state.password === null) ? 
                <small className="text-danger">* Please fill in password. Be careful!</small> : ''}
                {formErrors.password.length > 0 && (
                <span className="text-danger">{formErrors.password}</span>)}
          </div>
          <div className="form-group">
              <label >Country</label>
                <select className="form-control" name="country" id="sel1">
                  <option>Select</option>
                  <option>Nigeria</option>
                </select>
          </div>
          <div className="form-group">
              <label>Time Zone</label>
                <select className="form-control" name="timezone" id="sel2">
                  <option>Select</option>
                  <option>West Africa/Lagos</option>
                </select>
          </div>
                
          <button  
          onClick={this.handleSubmit}
          type="submit"
          disabled={this.doesFormHaveErrors()}
          className={`btn ${this.doesFormHaveErrors() ? "btn-secondary": "btn-primary"} text-light`}
          >
          SignUp
          </button>   
        </div>
      </form>
    </div>
    )
  }
}

export default withRouter(SignUpForm);