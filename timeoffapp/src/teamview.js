import React, {Component} from 'react';
import EmployeeHeader from './employeeheader';
import TeamviewBody from './teamviewbody';
import Footer from './footer';


const Welcome = `You're in Teams`;

class TeamView extends Component{
    render(){
        return(
            <div>
                <EmployeeHeader/>
                <p>{Welcome}</p>
                <TeamviewBody/>
                <Footer/>
            </div>
        )
    }
}

export default TeamView;