import React,{Component} from 'react';
import './employee.css';
import './App.css';
import TeamView from './teamview';
import Supervision from './supervision';
import Abscence from './abscence';
import Home from './home';
import Calendar from 'react-calendar';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Employee extends Component{
    constructor (props){
        super(props);
        this.state = {
            date: new Date(),
        }
    }
    onChange = date => this.setState({date});

    render(){
        return(
            <Router>
        <div>
          <header>
            <nav className="navbar">
                {/* <li className="logo"><Link to="/" component={Home} style={{textDecoration:"none"}}>OwaTimer</Link></li> */}
                <ul className="nav-links">
                {/* <li className="nav-item"><Link  className="link" to="/employee/" component={Employee} style={{textDecoration: "none"}}>Dashboard</Link></li> */}
                <li className="nav-item"><Link className="link" to="/teamview/" component={TeamView} style={{textDecoration:"none"}}>TeamView</Link></li>
                <li className="nav-item"><Link className="link" to="/supervision/" component={Supervision} style={{textDecoration:"none"}}>Supervision</Link></li>
                <li className="nav-item"><Link className="link" to="/abscence/" component={Abscence} style={{textDecoration:"none"}}>New Abscence</Link></li>
                <li className="nav-item"><Link className="link" to="/home/" component={Home} style={{textDecoration:"none"}}>LogOut</Link></li>
                </ul>
            </nav>
        </header>
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

                <div className="calendar-grid">
                <Calendar
                onChange={this.onChange}
                value={this.state.date} 
                />
                <Calendar
                onChange={this.onChange}
                value={this.state.date} 
                />
                </div>

                <div className="container-fluid" id="container">
                    <span>All Absences</span>
                    <div className="btn-group btn-group-sm">
                    {this.props.buttons}
                </div>
                </div>
        </div>
        </div>
      </Router>
     )
    }
}       
                    

                       
export default Employee;