import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './employee.css';
import './App.css';
// import Calendar from './Mycalendar';
// import Table from './table';


class EmployeeBody extends Component{
    render(){
        return(
                <div className="grid">
                <h2>Mayowa's calendar for 2019</h2>
                <h4>Statistics</h4>
                <div className="grid-wrapper">
                <div>
                    <h1>8.5</h1>
                    <hr/>
                    <p>Out of 21 in allowance</p>
                </div>
                <div>
                    <h3>Used so far</h3>
                    <hr/>
                    <p>Sick leave</p>
                    <p>Maternity Leave</p>
                </div>
                <div>
                    <h3>Available Types</h3>
                    <hr/>
                    <p>Sick Leave: 3/10</p>
                    <p>Paternity leave: 2/10</p>
                    <p>Holiday:  3/10</p>
                </div>

                <div>
                    <h3>Details</h3>
                    <hr/>
                    <p>Supervisor: Kunle</p>
                    <p>Department: LevelUp Academy</p>
                    <p>Allowance in 2019: 3</p>
                </div>
                </div>
            </div>
        )
    }
}

export default EmployeeBody;