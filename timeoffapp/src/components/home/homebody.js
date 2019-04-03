import React from 'react';
import '../styles/App.css';
import manage from '../home/manage.svg';
import {Link} from 'react-router-dom';

class HomeBody extends React.Component{
    render(){
        return(
                <div className="container">
                    <div className="bodyContainer">
                    <div className="text">
                        <h1>OwaTimer </h1>
                        <h2>want to keep track of your leave,offs</h2>
                        <h3>want to take that so desired vacation??</h3>
                    <Link to="/signup">
                        <button type="submit" style={{textDecoration:'none'}}>SignUp</button>
                    </Link>
                    </div>      
                        
                        <div className="image">
                        <img src={manage} alt="body"/>
                        </div>
                        
                        
                    </div>
                </div>
        )
    }
}

export default HomeBody;