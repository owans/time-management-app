import React, {Component} from 'react';
import manage from '../src/manage.svg';

class Home extends Component{
  onSubmit = () => {
    this.props.history.push('/signup');
  }

    render(){
        return (
                <div className="container">
                    <div className="bodyContainer">
                    <div className="text">
                        <h1>OwaTimer </h1>
                        <h2>want to keep track of your leave,offs</h2>
                        <h3>want to take that so desired vacation??</h3>
                        {/* <p>Sign up to find out how</p> */}
                        <button type="submit" value="submit" onClick={this.onSubmit} style={{textDecoration:'none'}}>SignUp</button>
                    </div>      
                        
                        <div className="image">
                        <img src={manage} alt="body"/>
                        </div>
                        
                        
                    </div>

                    <footer className="flex-footer">
                       &copy; 2019, OwaTimer.
                    </footer>
                </div>
        )
    }
}

export default Home;