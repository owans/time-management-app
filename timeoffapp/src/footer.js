import React from 'react';
import '../src/App.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class Footer extends React.Component{
    render(){
        return(
            <div>
                <footer className="flex-footer">
                       &copy; 2019, OwaTimer.
                </footer>
            </div>
        )
    }
}