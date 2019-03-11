import React, {Component} from 'react';
import './App.css';
import {Link, BrowserRouter as Router} from'react-router-dom';
import SignUp from './signup';


class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            SignUp: []
        };
        this.handleClick=this.handleClick.bind(this);
        }

        handleClick = (e) => {
            e.preventDefault();
            this.setState({
              SignUp: ""
            });

    }

    render(){
        return (
                <div className="App">
                    <header className="App-header">
                    <div className="App-logo">
                    <ul>
                        
                        <Router path="exact /" component={Home}>
                        <li><Link to="/" style={{textDecoration:'none'}}>OwaTimer</Link></li>
                        </Router>
                    </ul>
                    </div>

                    <div className="App-login">
                        <ul>
                            
                            <Router path="/" component={SignUp}>
                            <li><Link to="/" style={{textDecoration:'none'}}>LogIn</Link></li>
                            </Router>
                        
                        </ul>
                    </div>
                        
                    </header>

                    <div className="App-details">
                        <h1>OwaTimer </h1>
                        <h2>Open Source, OwaTimer manages your staff leave,offs etc</h2>
                        <h3>It works for small and medium-sized businesses</h3>
                        <p>Endorsed by the levelUp Academy Team of Professionals</p>
                        <Router path="/signup" component={SignUp}>
                        <button type="submit" value="submit" onClick={this.handleClick}><Link to='/signup' style={{textDecoration:'none'}}>SignUp</Link></button>
                        
                        </Router>
                        { this.state.handleClick}
                    </div>

                    <footer className="flex-footer">
                       &copy; Copyrights 2019, OwaTimer.
                    </footer>
                </div>
        )
    }
}

export default Home;