import React from 'react';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import {Link} from 'react-router-dom';

export default class Footer extends React.Component{
    render(){
        return(
            <div>
                <footer className="flex-footer">
                       {/* <div>
                       <Link to="https://twitter.com/missowans"><i className="fab fa-twitter"></i></Link>
                       <Link to="https://facebook.com/amachree.ruth1"><i className="fab fa-facebook-f"></i></Link>
                       <Link to='https://github.com/owans'><i className="fab fa-github"></i></Link>
                       </div> */}
                       &copy; 2019. OwaTimer. 
                </footer>
            </div>
        )
    }
}