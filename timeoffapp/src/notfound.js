import React, {Component} from 'react';
import pagenotfound from '../src/pagenotfound.svg';

export default class NotFound extends Component{
    render(){
        return(
            <div>
                <h1 className="text-primary">Oops!</h1>
                <div>
                    <img src={pagenotfound} alt="not found"></img>
                </div>
            </div>
        )
    }
}