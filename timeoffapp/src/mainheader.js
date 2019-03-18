import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class MainHeader extends React.Component{
    render(){
        return(
            <div>
            <header>
            <nav className="navbar">
                <Link to="/" style={{textDecoration:"none"}}>
                <li className="logo" >OwaTimer</li>
                </Link>

                <ul className="nav-links">
                <Link to="/login" style={{textDecoration:"none"}}>
                <li className="nav-item">Login</li>
                </Link>

                <Link to="/employeeheader" style={{textDecoration:"none"}}>
                <li className="nav-item">Employee</li>
                </Link>
                </ul>
            </nav>
            </header>
            </div>
        )
    }
}

export default MainHeader;