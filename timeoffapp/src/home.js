import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from'react-router-dom';

class Home extends Component{
    render(){
        return (
                <div className="App">
                    <header className="App-header">
                    <div className="App-logo">
                        <img src={logo} className="App-logo" alt="logo"></img>
                    </div>
                        <ul>
                            <li><Link to="" style={{textDecoration:'none'}}>Home</Link></li>
                            <li><Link to="" style={{textDecoration:'none'}}>TeamView</Link></li>
                            <li><Link to="" style={{textDecoration:'none'}}>LogIn</Link></li>
                        </ul>
                    </header>

                    <div className="App-details">
                        <h1>TimeOff.Management</h1>
                        <h2>Open Source, Simple yet powerful absence management software, for small and medium sized businesses</h2>
                        <p>Endorsed by hundreds of software developers</p>
                        <button type="submit" value="submit"><Link to='' style={{textDecoration:'none'}}>SignUp</Link></button>
                    </div>

                    <footer className="flex-footer">
                       &copy;Copyrights 2018, time.Management
                    </footer>
                </div>
        )
    }
}

export default Home;