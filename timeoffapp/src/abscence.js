import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import EmployeeHeader from './employeeheader';

const FillForm = `please fill out an absence form, if any. Thank You`;

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
    constructor(props){
    super(props)

    this.state = {
      fields: {},
      errors: {},
      leaveType: '',
      startTime: date,
      stopTime: date,
      diffStartTimeStopTime: '0 Days',
      showError: false
    }
}

handleStartTime = e => {
  let startTimeValue = e.target.value;
  this.setState({startTime: startTimeValue})
  const start = startTimeValue.replace(/-/g, '');
  const stop = this.state.stopTime.replace(/-/g, '');
  let diff = start - stop
  diff = this.calculateDuration(diff)
  this.setState({diffStartTimeStopTime: `${diff}`})
  console.log(this.state.diffStartTimeStopTime)
}
handleStopTime = e => {
  let stopTimeValue = e.target.value;
  this.setState({stopTime: stopTimeValue})
  const start = this.state.startTime.replace(/-/g, '');
  const stop = stopTimeValue.replace(/-/g, '');
  let diff = stop - start
  diff = this.calculateDuration(diff)
  this.setState({diffStartTimeStopTime: `${diff}`})
  console.log(diff)
}
handeleLeavetype = e => {
  console.log(e.target.value)
  this.setState({leaveType: e.target.value})
}
hamdleFormSubmit = () => {
  if ((!this.state.diffStartTimeStopTime.includes('-') && this.state.diffStartTimeStopTime !== '0 Days') && 
      this.state.leaveType !== '-- Select Leave Type --') {
      console.log(this.state.diffStartTimeStopTime)
      alert('saved wait for approval')
  } else {
      this.setState({showError: true})
  } 
  if (this.state.diffStartTimeStopTime === '0 Days') {
      this.setState({showError: true})
  } 
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
    // result = `${month} Month ${weeks} Week ${day} Day`
    return result
}

  render() {
    return (
        
      <div>
      <EmployeeHeader/>
        <p>{FillForm}</p>
        <div className="container">
        <form name="form" method="post" action="thanks for filling out the abscence form">
        <fieldset>
          <div className="form-container-request">

          <div class="form-group">
            <select class="form-control" onClick={this.handeleLeavetype} id="exampleFormControlSelect1" required>
            {
                        leaveType.map((item, index) => {
                            return <option key={index}>{item.name}</option>
                        })
                    }
             
              {/* <option value="">please select timeoff type</option>
              <option value="maternity">Maternity</option>
              <option value="timeoff">TimeOff</option>
              <option value="vacation">Holiday</option>
              <option value="sickleave">Health</option>
              <option value="others">Others</option> */}
            </select>
            {
                    (this.state.leaveType !== 'Select Leave Type') ? '' : 
                    <p className="text-danger">choose a valid leave type</p>
                }
                {
                     (this.state.leaveType === '' && this.state.showError) ? 
                     <p className="text-danger">*leave type is required</p> : 
                    ''
                }
          </div>

            <div className="d-flex">
            
              <div className="form-group">
              <label for="begin">Begin</label>
                <input type="date" id="start" name="start" min={date} value={this.state.startTime} onChange={this.handleStartTime} required>
                </input>
              </div>

              
              <div className="form-group"> 
              <label htmlFor="end">To</label> 
                <input type="date" value={this.state.stopTime} onChange={this.handleStopTime}
                min={this.state.startTime}  id="end" name="end" required>
                </input>
              </div>

              
              <div className="form-group">
              <label for="name">Duration</label>
              <input type="text" value={this.state.diffStartTimeStopTime.includes('-') ? '0 Days' : this.state.diffStartTimeStopTime } id="duration" name="duration" disabled/>
              {
                ((this.state.diffStartTimeStopTime === '0 Days' || this.state.diffStartTimeStopTime.includes('-')) 
                && this.state.showError) ? 
                <span className="text-danger">invalid duration must be more than 0 Days</span> : '' 
            }              
              </div>

            </div>

            

                <div className="form-group">
                <label for="exampleFormControlTextarea1">State a valid reason</label>
                <textarea className="form-control" id="exampleFormControlTextarea1"
                rows="3" required></textarea> 
                </div>

                <div>
                    <button type="submit" onClick={this.hamdleFormSubmit}
                    className="my-1 btn btn-primary btn-lg">
                    Submit Form
                    </button> 
                </div>

                </div>
                </fieldset>
                </form>
                </div>
            
            </div>
        )
    }
}

export default Abscence;