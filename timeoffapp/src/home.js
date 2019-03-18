import React, {Component} from 'react';
import MainHeader from './mainheader';
import HomeBody from './homebody';
import Footer from './footer';
import '../src/App.css';
import 'bootstrap/dist/css/bootstrap.css';


class Home extends Component{
    render(){
        return (
                <div>
                    <MainHeader/>
                    <HomeBody/>
                    <Footer/>
                </div>
        )
    }
}

export default Home;