import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './employee.css';
import {Link} from 'react-router-dom';
import Footer from './footer';
import Welcome from './welcomeemployee';


const User = "Owans";
const WelcomeUser = `Welcome ${User}`

class EmployeeHeader extends React.Component{
    render(){
        return(
            <div>
            <nav className="navbar">
                <Link to="/" style={{textDecoration:"none"}}><li className="logo">OwaTimer</li></Link>
                <ul className="nav-links">
                
                <Link  to="/dashboard" className="link" style={{textDecoration:"none"}}><li className="nav-item">Dashboard</li></Link>
                <Link  to="/teamview" className="link" style={{textDecoration:"none"}}><li className="nav-item">TeamView</li></Link>
                <Link  to="/abscence" className="link" style={{textDecoration:"none"}}><li className="nav-item">New Abscence</li></Link>
                <Link  to="/login" className="link" style={{textDecoration:"none"}}><li className="nav-item">LogOut</li></Link>
                </ul>
            </nav>
            <Welcome/>
            <p>{WelcomeUser}</p>
            <Footer/>
            </div>
        )
    }
}
export default EmployeeHeader;