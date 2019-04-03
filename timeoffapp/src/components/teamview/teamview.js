import React, {Component} from 'react';
import EmployeeHeader from '../common/employeeheader';
import TeamviewBody from '../teamview/teamviewbody';
import Footer from '../footer/footer';


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