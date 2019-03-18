import React, {Component} from 'react';
import EmployeeHeader from './employeeheader';
import Footer from './footer';
import '../src/App.css';


class Supervision extends Component{
    render(){
        return(
            <div>
                <EmployeeHeader/>
                <Footer/>
            </div>
        )
    }
}

export default Supervision;