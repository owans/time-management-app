import React, {Component} from 'react';
import './App.css';
// import {Link, BrowserRouter as Router, Route, /*Switch**/} from'react-router-dom';
// import SignUp from './signup';
// import Login from './login';
class Home extends Component{
    render(){
        return (
            
                <div className="container">
                    <header className="App-header">
                    <div className="App-logo">
                    <ul>
                        {/* <Route path="exact /" component={Home}/> */}
                        {/* <li><Link to="/" style={{textDecoration:'none'}}>OwaTimer</Link></li> */}
                        
                        
                    </ul>
                    </div>

                    <div className="App-login">
                        <ul>
                            
                            {/* <Route path="/login" component={Login}/> */}
                            {/* <li><Link to="login" style={{textDecoration:'none'}}>LogIn</Link></li> */}
                            
                        </ul>
                    </div>
                        
                    </header>

                    <div className="App-details">
                        <h1>OwaTimer </h1>
                        <h2>Open Source, OwaTimer manages your staff leave,offs etc</h2>
                        <h3>It works for small and medium-sized businesses</h3>
                        <p>Endorsed by the levelUp Academy Team of Professionals</p>
                        
                        
                        {/* <Route path="/signup" component={SignUp}/> */}
                        <button type="submit" value="submit" style={{textDecoration:'none'}}>SignUp</button>
                        {/* <button type="submit" value="submit"><Link to='/signup' style={{textDecoration:'none'}}>SignUp</Link></button> */}
                        
                    </div>

                    <footer className="flex-footer">
                       &copy; Copyrights 2019, OwaTimer.
                    </footer>
                </div>
        )
    }
}

export default Home;