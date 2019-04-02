import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';
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

<nav className="navbar navbar-expand-lg fixed-top">
  <Link className="navbar-brand" to="/">Owatimer</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <i className="fas fa-bars"></i>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item nav-items text-center padtb5">
        <Link className="nav-link" to="/dashboard">Dashboard</Link>
      </li>
      <li className="nav-item nav-items text-center padtb5">
        <Link className="nav-link" to="/teamview">Teamview</Link>
      </li>
      <li className="nav-item nav-items text-center padtb5">
        <Link className="nav-link btn-absence" to="/abscence">New Absence</Link>
      </li>
      <li className="nav-item nav-items text-center padtb5">
        <Link className="nav-link" to="/login">Logout</Link>
      </li>
    </ul>
  </div>
</nav>


            {/* <nav className="navbar  navbar-expand-lg">
                <Link to="/" style={{textDecoration:"none"}}><a href="/" className="logo navbar-brand">OwaTimer</a></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
                <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav-links navbar-nav ml-auto">
                <Link  to="/dashboard" className="link" style={{textDecoration:"none"}}><li className="nav-item nav-items text-center padtb5">Dashboard</li></Link>
                <Link  to="/teamview" className="link" style={{textDecoration:"none"}}><li className="nav-item nav-items text-center padtb5">TeamView</li></Link>
                <Link  to="/abscence" className="link" style={{textDecoration:"none"}}><li className="nav-item nav-items text-center padtb5">New Abscence</li></Link>
                <Link  to="/login" className="link" style={{textDecoration:"none"}}><li className="nav-item nav-items text-center padtb5">LogOut</li></Link>
                </ul>
                </div>
            </nav> */}
            <Welcome/>
            <p>{WelcomeUser}</p>
            <Footer/>
            </div>
        )
    }
}
export default EmployeeHeader;