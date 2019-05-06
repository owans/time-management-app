import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import "../styles/employee.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import env from "../../env";
import axios from "axios";
import EmployeeHeader from "./employeeheader";
import Swal from 'sweetalert2';

const leaveType = [
  {name: 'Select Leave Type', day: 1},
  {name: 'Maternity Leave', days: 20},
  {name: 'Health', days: 10},
  {name: 'Marriage Purpose', days: 5},
  {name: 'Travel', days: 7},
  {name: 'Vacation', days: 5},
  {name: 'Others', days: 5},
]


let date = new Date();
date = `${date.getFullYear()}-0${date.getMonth() + 1 }-${date.getDate()}`

class Abscence extends Component{

    state = {
      user: "",
      fields: {},
      errors: {},
      leaveType: "",
      startdate: date,
      enddate: date,
      requestmessage: "",
      diffStartTimeStopTime: '0 Days',
      showError: false
    }

handleStartTime = e => {
  let startdateValue = e.target.value;
  this.setState({startdate: startdateValue})
  const start = startdateValue.replace(/-/g, '');
  const stop = this.state.enddate.replace(/-/g, '');
  let diff = start - stop
  diff = this.calculateDuration(diff)
  this.setState({diffStartTimeStopTime: `${diff}`})
  console.log(this.state.diffStartTimeStopTime)
}
handleStopTime = e => {
  let enddateValue = e.target.value;
  this.setState({enddate: enddateValue})
  const start = this.state.startdate.replace(/-/g, '');
  const stop = enddateValue.replace(/-/g, '');
  let diff = stop - start
  diff = this.calculateDuration(diff)
  this.setState({diffStartTimeStopTime: `${diff}`})
  console.log(diff)
}

async componentDidMount() {
  try {
    const token = localStorage.getItem("owatimer-token");

    if (!token) return this.props.history.push("/login");

    const res = await axios.get(`${env.api}/user/dashboard`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    this.setState({user: res.data.data });
  } catch (err) {
    if (localStorage.getItem("owatimer-token")) {
      localStorage.removeItem("owatimer-token");
        console.log(err.response);
    }
    this.props.history.push("/login");
  }
}

handeleLeavetype = e => {
  console.log(e.target.value)
  this.setState({leaveType: e.target.value})
}

handeleRequestMessage = e => {
  console.log(e.target.value)
  this.setState({ requestmessage: e.target.value })
}


hamdleFormSubmit = e => {
  e.preventDefault();
  if (this.state.leaveType !== '' && this.state.requestmessage !== '' && !this.state.diffStartTimeStopTime.includes('-') && this.state.diffStartTimeStopTime !== '0 Days') {
    console.log(this.state.diffStartTimeStopTime)
    Swal.fire('Form submitted sucessfully, please check teamview page for the list of requests made')
  } else {
    this.setState({ showError: true })
  }

  const body = {
    leaveType: this.state.leaveType,
    startdate: this.state.startdate,
    enddate: this.state.enddate,
    totaldays: this.state.diffStartTimeStopTime,
    requestmessage: this.state.requestmessage,
    employee: this.state.user._id
  };

  axios.post(`${env.api}/request/abscence`, body).then((data) =>{
    console.log(data);
  }).catch((error)=>{
    console.log(error)
  })

  this.setState({leaveType: "", startdate: date, enddate: date, diffStartTimeStopTime: "0 Days", requestmessage: ""}); 
} 

calculateDuration = (days) => {
  let not = undefined;
    let value = days
    let result = days
    let day , month, weeks
    if(value >= 30) {
      month = value / 30;
      month = Math.floor(month)
      value = value % 30
    }if (value >= 7) {
        day = value % 7;
        weeks = value / 7;
        weeks = Math.floor(weeks);
    } else {
      day = value
    }
    if(month !== not && (weeks === not && day === not) ) {
       result = `${month} Month`
    }
    if((month === not && day === 0) && weeks !== not ) {
       result = `${weeks} Week`
    }
    console.log(day)
    if(day !== not && (month === not && weeks ===not )) {
      result = `${day} day`
    }
    if(month !== not && weeks !== not && day !== not) {
      result = `${month} Month ${weeks} Week ${day} Day`
    }
      console.log(weeks)
    if(month !== not && weeks !== not && day === 0) {
      result = `${month} Month ${weeks} Week`
    }
    if(month !== not && weeks === not && day !== not ) {
      result = `${month} Month ${day} Day`
    }
    if (month === not && weeks && day) {
      result = `${weeks} Week ${day} Day`
    }
    return result
}

  render() {
    return (
        
      <React.Fragment>
      <EmployeeHeader/>
        <p>Fill A Request Form</p>
        <div className="container abscence">
        <form name="form" noValidate>
        <fieldset>
          <div className="form-container-request">
          <div className="form-group">
            <select className="form-control" name="leaveType" onClick={this.handeleLeavetype} id="exampleFormControlSelect1" required>
            {
              leaveType.map((item, index) => {
                return <option key={index}>{item.name}</option>
                })
            }
            </select>
                {
                     (this.state.leaveType === '' && this.state.showError) ? 
                     <small className="text-danger">*leave type is required</small> : 
                    ''
                }
          </div>

            <div className="d-flex">
            
              <div className="form-group">
              <label name="begin">Begin</label>
                <input type="date" id="start" name="startdate" min={date} value={this.state.startdate} onChange={this.handleStartTime} required>
                </input>
              </div>

              
              <div className="form-group"> 
              <label name="end">To</label> 
                <input type="date" value={this.state.enddate} onChange={this.handleStopTime}
                min={this.state.startdate}  id="end" name="enddate" required>
                </input>
              </div>

              
              <div className="form-group">
              <label name="duration">Duration</label>
              <input type="text" value={this.state.diffStartTimeStopTime.includes('-') ? '0 Days' : this.state.diffStartTimeStopTime } id="duration" name="duration" disabled/>
              {
                ((this.state.diffStartTimeStopTime === '0 Days' || this.state.diffStartTimeStopTime.includes('-')) 
                && this.state.showError) ? 
                <small className="text-danger">invalid, duration must be more than 0 Days</small> : '' 
            }              
              </div>

            </div>
                <div className="form-group">
                  <label name="exampleFormControlTextarea1">State a valid reason</label>
                    <textarea className="form-control" name="requestmessage" onChange={this.handeleRequestMessage} id="exampleFormControlTextarea1"
                      rows="3" required></textarea> 
                {
                  (this.state.requestmessage === '' && this.state.showError)
                  ?<small className="text-danger">Please provide a comment on the request type</small>
                  :''
                 }

                </div>

                <div>
                    <button type="submit" onClick={this.hamdleFormSubmit}
                    className="my-1 btn btn-primary btn-sm align-center">
                    Submit Form
                    </button> 
                </div>

                </div>
                </fieldset>
                </form>
                </div>
            
            </React.Fragment>
        )
    }
}

export default withRouter(Abscence);