import React from 'react';
import '../styles/App.css';
import '../styles/employee.css';
import "bootstrap/dist/css/bootstrap.css";
import Calendar from 'react-calendar';
import {withRouter} from "react-router-dom";
import EmployeeHeader from '../common/employeeheader';
import Footer from '../footer/footer';
import env from "../../env";
import axios from 'axios';

const typeOfTimeOff = [
  {name: 'Vacation', days: 2},
  {name: 'Maternity Leave', days: 10},
  {name: 'Medical', days: 5},
  {name: 'Marriage', days: 7},
]


const requests = [
    {name: 'Sick Leave', date: '12/03/2019'},
    {name: 'Maternity Leave', date: '23/02/2019'},
    {name: 'Study Leave', date: '14/01/2019'},
]

const calendarDate = [
  new Date(2019 , 0, 9), new Date(2019, 1, 23), new Date(2018, 2, 25), new Date(2019, 3, 11)
]
const MoreCalendarDate = [
  new Date(2019 , 0, 9), new Date(2019, 1, 23), new Date(2018, 2, 25), new Date(2019, 3, 11),
  new Date(2019 , 4, 2), new Date(2019, 5, 13), new Date(2018, 6, 25), new Date(2019, 7, 21),
  new Date(2019 , 8, 16), new Date(2019, 9, 8), new Date(2018, 10, 30), new Date(2019, 11, 24)
]

<<<<<<< HEAD
class Dashboard extends React.Component{
=======
export default class Dashboard extends React.Component{
>>>>>>> 34a22b47b857502dd6cb2e72a1d2ae2886a446bf
  constructor(props){
    super(props);

    this.state = {
<<<<<<< HEAD
      loading: true,
=======
>>>>>>> 34a22b47b857502dd6cb2e72a1d2ae2886a446bf
      showMore: false,
      showMoreText: 'Show More',
      user: ""
  }
  
}

async componentDidMount(){
<<<<<<< HEAD
    try{
        const token = localStorage.getItem("owatimer-token");

        if(!token) return this.props.history.push("/signup");

        const res = await axios.get(`${env.api}/user/dashboard`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        this.setState({loading:false, user: res.data.data});
        console.log(this.state.user);
        
    }catch(err){
      if (localStorage.getItem("owatimer-token")) {
        localStorage.removeItem("owatimer-token");
      }
     this.props.history.push("/signup");
    }
}


=======
  try{
      const token = localStorage.getItem("owatimer-token");

      if(!token) return this.props.history.push("/signup");

      const res = await axios.get(`${env.api}/user/dashboard`, {
          headers:{
              Authorization: `Bearer ${token}`
          }
      })

      this.setState({user: res.data.data});
            console.log(this.state.user);
      
  }catch(err){
    if (localStorage.getItem("owatimer-token")) {
      localStorage.removeItem("owatimer-token");
    }
   this.props.history.push("/signup");
  }
}

>>>>>>> 34a22b47b857502dd6cb2e72a1d2ae2886a446bf
handeleShowMore = () => {
    this.setState({
        showMore: !this.state.showMore,
        showMoreText: 'Show Less'
    })
}
<<<<<<< HEAD
=======

    render(){
        return(
            <div>
                <EmployeeHeader/>
                    <div  className="justify-content-center container">
                        <h3 className='text-primary mb-4'>{`Welcome ${this.state.user.firstName}, ${this.state.user.lastName}`}</h3>                      
                    </div>
>>>>>>> 34a22b47b857502dd6cb2e72a1d2ae2886a446bf

render(){
    if (this.state.loading) return <p>loading...</p>
    return(
        <div>
            <EmployeeHeader/>
            <div  className="justify-content-center container">
                <h3 className='text-primary mb-4'>{`Welcome ${this.state.user.firstName}, ${this.state.user.lastName}`}</h3>                      
            </div>

            <div className="justify-content-center container">
                <h3 className="text-secondary ">Statistics</h3>
<<<<<<< HEAD
                <div className="row p mt-3 statistics">
                <div className="col-md-2 sta">
                <div className="card">
                <div className="card-header text-center bg-secondary text-light">Days Remaining</div>
                <div className="card-body">
                    <h1>8.5</h1>
                    <h6>Out of 21 in allowance</h6>
                </div> 
                </div>
                </div>

                <div className="col-md-3 sta">
                <div className="card">
                <div className="card-header text-center bg-secondary text-light">Used so far</div>
                <div className="card-body">
                    <ul className="list-group"> 
                        {
                            typeOfTimeOff.map((item , index) => {
                                return <div key={index}>
                                    <li  className="list-group-item"> {item.name} 
                                        <span className="badge badge-primary float-right ">{item.days}</span></li>
                                    </div>
=======
                    <div className="row p mt-3 statistics">
                    <div className="col-md-2 sta">
                    <div className="card">
                    <div className="card-header text-center bg-secondary text-light">Days Remaining</div>
                    <div className="card-body">
                        <h1>8.5</h1>
                        <h6>Out of 21 in allowance</h6>
                    </div> 
                    </div>
                    </div>

                    <div className="col-md-3 sta">
                    <div className="card">
                    <div className="card-header text-center bg-secondary text-light">Used so far</div>
                    <div className="card-body">
                        <ul className="list-group"> 
                            {
                                typeOfTimeOff.map((item , index) => {
                                    return <div key={index}>
                                        <li  className="list-group-item"> {item.name} 
                                            <span className="badge badge-primary float-right ">{item.days}</span></li>
                                        </div>
>>>>>>> 34a22b47b857502dd6cb2e72a1d2ae2886a446bf
                                })
                            }
                        </ul>
                        </div> 
                        </div>
                        </div>


                        <div className="col-md-4 sta">
                        <div className="card">
                            <div className="card-header bg-secondary text-center text-light">Available Types</div>
                            <div className="card-body">
                            <ul className="list-group"> 
                                {
                                requests.map(item => {
<<<<<<< HEAD
                                        return <div key={item.date}>
                                                <li className="list-group-item"> {item.name} 
                                                    <span className="badge badge-primary float-right ">{item.date}</span>
                                                </li>
                                            </div>
                                        })
=======
                                    return <div key={item.date}>
                                        <li className="list-group-item"> {item.name} 
                                            <span className="badge badge-primary float-right ">{item.date}</span></li>
                                        </div>
                                })
>>>>>>> 34a22b47b857502dd6cb2e72a1d2ae2886a446bf
                                }
                            </ul>
                            </div> 
                        </div>
                        </div>

                        <div className="col-md-3 sta">
                        <div className="card">
                            <div className="card-header text-center bg-secondary text-light">Details</div>
                            <div className="card-body text-center">
                            <i className="fa fa-user-circle-o fa-3x "></i>
                                <div className="mt-2">
                                    <h6>Name: {this.state.user.firstName}</h6>
                                    <h6>Department: {this.state.user.manager}</h6>
                                    <h6>Position: {this.state.user.department}</h6>
<<<<<<< HEAD
                                </div>
                                </div> 
=======
>>>>>>> 34a22b47b857502dd6cb2e72a1d2ae2886a446bf
                                </div>
                        </div>
                      </div>
                    </div>
                <h3 className="container text-secondary mt-4 mb-3 ">
                    Calendar  <button 
                    onClick={this.handeleShowMore} 
                    className="btn btn-secondary">{
                        !this.state.showMore ? 'Show More' : 'Show Less'
                    }</button> </h3>
                    <div className="container row m-auto">
                    { !this.state.showMore ?
                        calendarDate.map((item, index) => {
                            return <div key={index} className="col-md-3">
                            <Calendar 
                                value={item}
                                />
                            </div>  
                        }) : MoreCalendarDate.map((item, index) => {
                            return <div key={index} className="col-md-3 mb-2">
                            <Calendar
                                value={item}
                                />
                            </div>  
                        })
                    }
                    </div>   
                <div>
            <div className="d-flex justify-content-between ml-3 mt-5">
                <h3 className="head text-secondary container">All Absences</h3>
            </div>

            <div className="d-flex justify-content-center dashboard-absences mx-3">
            <table class="table container responsive table-sm">
            <thead>
                <tr>
                    <th scope="col">Types</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Dates</th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>
                    <th scope="col">Approved By</th>
                </tr>
            </thead>
                <tbody className="">
                    <tr>
                        <td>Study leave</td>
                        <td>10</td>
                        <td>2021-1-15 - 2021-1-25</td>
                        <td>Approved</td>
                        <td><button><i class="fas fa-trash-alt delete"></i></button></td>
                        <td>Kunle</td>
                    </tr>

                    <tr>
                        <td>Health</td>
                        <td>5</td>
                        <td>2019-3-22 - 2019-3-27</td>
                        <td>Pending</td>
                        <td><button><i class="fas fa-trash delete"></i></button></td>
                        <td>Mayowa</td>
                    </tr>

                    <tr>
                        <td>Holiday</td>
                        <td>10</td>
                        <td>2019-4-5 - 2019-4-15</td>
                        <td>Pending</td>
                        <td><button><i class="fas fa-trash delete"></i></button></td>
                        <td>Kunle</td>
                    </tr>
                    <tr>
      
                        <td>Time Off</td>
                        <td>14</td>
                        <td>2019-5-01 - 2019-5-15</td>
                        <td>Pending</td>
                        <td><button><i class="fas fa-trash delete"></i></button></td>
                        <td>Mayowa</td>
                    </tr>
                </tbody>
                </table>
                </div>
            </div>
 
            <Footer/>
        </div>
        )
    }
}

export default withRouter(Dashboard);