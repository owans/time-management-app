import React, {Component} from 'react';
import manage from '../src/manage.svg';

class Home extends Component{
    render(){
        return (
                <div className="container">
                    <div className="bodyContainer">
                    <div class="text">
                        <h1>OwaTimer </h1>
                        <h2>Want to keep track of your leave,offs</h2>
                        <h3>Want to take that so desired vacation??</h3>
                        <p>Sign up to find out how</p>
                        <button type="submit" value="submit" style={{textDecoration:'none'}}>SignUp</button>
                    </div>      
                        
                        <div className="image">
                        <img src={manage} alt="body"/>
                        </div>
                        
                        
                    </div>

                    <footer className="flex-footer">
                       &copy; Copyrights 2019, OwaTimer.
                    </footer>
                </div>
        )
    }
}

export default Home;