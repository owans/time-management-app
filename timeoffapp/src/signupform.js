import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  const onlyLetterRegex = RegExp(/^[A-Za-z]+$/)
  
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
      }
    
      handleSubmit = e => {
        e.preventDefault();
    
        if (formValid(this.state)) {
          console.log(`
            --On Submission--
           Company Name: ${this.state.companyName}
            First Name: ${this.state.firstName}
            Last Name: ${this.state.lastName}
            Email: ${this.state.email}
            Password: ${this.state.password}
          `);
          alert('Congratulations, you successfully registered')
        } else {
          this.setState({invaildError: true})
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
            formErrors.password =
              value.length < 6 ? "minimum 6 characaters required" : "";
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
                <div className="">
                </div>
                <form className="container mb-5" onSubmit={this.handleSubmit} noValidate style={{padding: '2% 20%' }}>
                    <div className="">
                    <div className="form-group">
                    <label >Company Name</label>
                    <input type="text" className="form-control" 
                          name="companyName"  noValidate onChange={this.handleChange}/>
                    {this.state.invaildError && (this.state.companyName === null) ? 
                    <p className="text-danger">* Please input name of company</p> : '' } 
                    {(<span className="text-danger">{formErrors.companyName}</span>)}
                   </div>
                   <div className="form-group">
                    <label >First Name</label>
                    <input type="text" className="form-control" 
                          name="firstName"  noValidate onChange={this.handleChange}/>
                        {this.state.invaildError && (this.state.firstName === null) ? 
                    <p className="text-danger">* Please input your first name</p> : '' } 
                      {formErrors.firstName.length > 0 && (
                         <span className="text-danger">{formErrors.firstName}</span>)}
                   </div>
                   <div className="form-group">
                    <label >Last Name</label>
                    <input type="text" className="form-control" 
                          name="lastName"  noValidate onChange={this.handleChange}/>
                    {this.state.invaildError && (this.state.lastName === null) ? 
                    <p className="text-danger">* Your last name is needed</p> : '' } 
                      {formErrors.lastName.length > 0 && (
                         <span className="text-danger">{formErrors.lastName}</span>
              )}
                   </div>
                    <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control" placeholder="you@email.com"
                          name="email"  noValidate onChange={this.handleChange}/>
                    {this.state.invaildError && (this.state.email === null) ? 
                    <p className="text-danger">* please input a valid email</p> : '' } 
                      {formErrors.email.length > 0 && (
                         <span className="text-danger">{formErrors.email}</span>
              )}
                   </div>



                    <div className="form-group">
                    <label >Department</label>
                    <input type="text" className="form-control" 
                          name="department"  noValidate onChange={this.handleChange}/>
                    {this.state.invaildError && (this.state.department === null) ? 
                    <p className="text-danger">* Please input department</p> : '' } 
                      {formErrors.department.length > 0 && (
                         <span className="text-danger">{formErrors.department}</span>
              )}
                   </div>

                      <div className="form-group">
                    <label >Date-Of-Birth</label>
                    <input type="date" className="form-control"   
                          name="dob"  noValidate onChange={this.handleChange}/>
                    {this.state.invaildError && (this.state.dob === null) ? 
                    <p className="text-danger">* Please input date of birth</p> : '' } 
                      {formErrors.dob.length > 0 && (
                         <span className="text-danger">{formErrors.dob}</span>
              )}
                   </div>

                  <div className="form-group">
                    <label >Manager's name</label>
                    <input type="text" className="form-control"
                          name="manager"  noValidate onChange={this.handleChange}/>
                    {this.state.invaildError && (this.state.manager === null) ? 
                    <p className="text-danger">* Please fill in your manager's name</p> : '' } 
                      {formErrors.manager.length > 0 && (
                         <span className="text-danger">{formErrors.manager}</span>
              )}
              
                   </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" 
                                    name="password"
                                    noValidate
                                    onChange={this.handleChange}/>
                    {this.state.invaildError && (this.state.password === null) ? 
                    <p className="text-danger">* Please fill in password. Be careful!</p> : '' } 
                     {formErrors.password.length > 0 && (
                <span className="text-danger">{formErrors.password}</span>
              )}
                </div>
                <div className="form-group">
                    <label >Country</label>
                    <select className="form-control" id="sel1">
                        <option>Nigeria</option>
                    </select>
                    </div>
                    <div className="form-group">
                    <label >Time-Zone</label>
                    <select className="form-control" id="sel1">
                        <option>West Africa/ Lagos</option>
                    </select>
                    </div>
            
                { formValid(this.state) ? 
                <button className="btn btn-primary ">
                <Link className="text-light" to="/dashboard">Register</Link></button> :
                      <button type="submit" className="btn btn-primary">Register</button>
                }
             
                    </div>
                </form>
            </div>

        )
    }
}
export default SignUpForm;