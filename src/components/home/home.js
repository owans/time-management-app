import React, {Component} from 'react';
import MainHeader from '../common/mainheader';
import HomeBody from '../home/homebody';
import Footer from '../footer/footer';
import '../styles/App.css';
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