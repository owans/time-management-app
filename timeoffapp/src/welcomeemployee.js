import React from 'react';
import '../src/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import profile from '../src/profile.svg';


export default class Welcome extends React.Component{
    render(){
        return(
            <div class="container welcome-container">
                <div class="row">
                    <div class="col">
                        <div className="user-photo">
                        <img src={profile} alt="user"></img>
                        </div>
                    </div>
                    <div class="w-100"></div>
                    {/* <div class="col">
                        
                    </div> */}
                </div>
            </div>
        )
    }
}