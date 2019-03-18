import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import EmployeeHeader from './employeeheader';

const FillForm = `please fill out an absence form, if any. Thank You`;

class Abscence extends Component{
    constructor(props){
    super(props)

    this.state = {
      fields: {},
      errors: {}
    }
}
  render() {
    return (
        
      <div>
      <EmployeeHeader/>
        <p>{FillForm}</p>
        <div className="container">
        <form name="form" method="post" action="thanks for filling out the absence form">
        <fieldset>
          <div className="form-container-request rounded">

          <div class="form-group">
            <select class="form-control" id="exampleFormControlSelect1" required>
              <option value="">please select timeoff type</option>
              <option value="maternity">Maternity</option>
              <option value="timeoff">TimeOff</option>
              <option value="vacation">Holiday</option>
              <option value="sickleave">Health</option>
              <option value="others">Others</option>
            </select>
          </div>

            <div className="d-flex">
            
              <div className="form-group">
              <label for="start">From</label>
                <input type="date" id="start" name="trip-start" required>
                </input>
              </div>

              
              <div className="form-group"> 
              <label htmlFor="start">To</label> 
                <input type="date" id="start" name="trip-start" required>
                </input>
              </div>

              
              <div className="form-group">
              <label for="name">Duration in days</label>
              <input type="text" id="name" name="name" disabled>
              </input>
              </div>

            </div>

            

                <div className="form-group">
                <label for="exampleFormControlTextarea1">State a valid reason</label>
                <textarea className="form-control" id="exampleFormControlTextarea1"
                rows="3" required></textarea> 
                </div>

                <div>
                    <button type="submit" 
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