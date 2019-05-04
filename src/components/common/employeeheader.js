import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import './App.css';
import '../styles/employee.css';
import {Link} from 'react-router-dom';
import Footer from '../footer/footer';
import Welcome from '../welcomeemployee/welcomeemployee';
class EmployeeHeader extends React.Component{
  constructor(props){
    super(props);


    this.logOut = this.logOut.bind(this);
  }

  logOut () {
    localStorage.removeItem("owatimer-token");
  
    this.props.history.push("/login"); 
  }

    render(){
        return(
            <div>

              <nav className="navbar navbar-expand-lg fixed-top">
                <Link className="navbar-brand" to="/">Owatimer</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"/>
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
                      <Link className="nav-link   btn-absence" to="/abscence">New Absence</Link>
                    </li>
                    <li className="nav-item nav-items text-center padtb5">
                      <Link onClick={this.logOut} className="nav-link" to="/login">Logout</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            <Welcome/>
      
          <Footer/>
        </div>
       )
    }
}
export default EmployeeHeader;