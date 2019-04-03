import React from 'react';
import '../styles/App.css';
import {Link} from 'react-router-dom';

class MainHeader extends React.Component{
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
                            <Link className="nav-link" to="/login">Login</Link>
                          </li>
                          <li className="nav-item navbar-button text-center">
                            <Link className="nav-link " to="/signup">Signup</Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                
            
            {/* <nav className="navbar navbar-expand-lg">
                <Link to="/" style={{textDecoration:"none"}}>
                <li className="logo navbar-brand" >OwaTimer</li>
                </Link>

                <ul className="nav-links navbar-nav ml-auto">
                <Link to="/login" style={{textDecoration:"none"}}>
                <li className="nav-item nav-items text-center padtb5">Login</li>
                </Link>
                </ul>
            </nav>
             */}
            </div>
        )
    }
}

export default MainHeader;