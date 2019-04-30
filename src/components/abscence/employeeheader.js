import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';
import './employee.css';
import {Link} from 'react-router-dom';
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
            </div>
        )
    }
}
export default EmployeeHeader;