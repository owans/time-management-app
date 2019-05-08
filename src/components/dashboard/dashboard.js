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

const leaveType = [
  {name: 'Vacation', days: 2},
  {name: 'Maternity Leave', days: 10},
]
class Dashboard extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      loading: true,
      user: "",
      userInfo: "",
      allLeaveRequest: "",
      availableLeaveRequest: "",
      slicedRequest: ""
  }
  
}

convertDate = date => {
    return new Date(date).toLocaleDateString();
  };

  getStatusColor(status) {
    switch (status) {
      case "declined":
        return "badge-danger";
      case "approved":
        return "badge-success";
      default:
        return "badge-warning";
    }
  }

getAvailableRequest(requests) {
    if (requests) {
      const leave = requests.filter(item => item.status === "pending");
      this.setState({ availableLeaveRequest: leave });
    }
  }

async componentDidMount(){
    try{
        const token = localStorage.getItem("owatimer-token");

        if(!token) return this.props.history.push("/signup");

        const res = await axios.get(`${env.api}/user/dashboard`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        const leave = await axios.get(`${env.api}/request`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          const request = leave.data.data;
        const sliced = request.slice(-1);

        this.setState({loading:false, 
            user: res.data.data, 
            allLeaveRequest: request,
            slicedRequest: sliced
        });
        console.log(this.state.user);
        console.log(this.state.allLeaveRequest);
        
    }catch(err){
      if (localStorage.getItem("owatimer-token")) {
        localStorage.removeItem("owatimer-token");
      }
     this.props.history.push("/signup");
    }
}

render(){
    if (this.state.loading)
    return (
      <p>
        loading <i className="fa fa-spinner" />{" "}
      </p>
    );
    return(
        <div>
            <EmployeeHeader/>
            <div  className="justify-content-center container">
                <h3 className='text-primary mb-4'>{`Welcome ${this.state.user.firstName}, ${this.state.user.lastName}`}</h3>                      
            </div>

            <div className="justify-content-center container">
                <h3 className="text-secondary ">Statistics</h3>
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

                <div className="col-md-4 sta">
              <div className="card">
                <div className="card-header bg-secondary text-light">
                  Request history
                </div>
                <div className="card-body">
                  {this.state.slicedRequest.length > 0 ? (
                    <ul className="list-group">
                      {this.state.slicedRequest.map((item, index) => {
                        return (
                          <div key={index}>
                            <li className="list-group-item">
                              {item.leaveType}
                              <span className="badge badge-primary float-right ">
                                {this.convertDate(item.startdate)}
                              </span>
                            </li>
                          </div>
                        );
                      })}
                    </ul>
                  ) : (
                    <h6 className="mt-4 pb-4 text-center">
                      No Pending leave Request
                    </h6>
                  )}
                </div>
                </div>
                </div>

                <div className="col-md-4 sta">
                    <div className="card">
                    <div className="card-header bg-secondary text-center text-light">Available Types</div>
                    <div className="card-body">
                    <ul className="list-group"> 
                        {leaveType.map(item => {
                            return <div key={item.date}>
                                <li className="list-group-item"> {item.name} 
                                <span className="badge badge-primary float-right ">{item.date}</span>
                                </li>
                                </div>
                                })
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
                        </div>
                        </div> 
                        </div>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                        <h2 className="text-center mt-4 mb-3">Calendar</h2>
                    <div className="row align-content-center">
                        {this.state.allLeaveRequest.length > 0 ? (
                        this.state.allLeaveRequest.map((item, index) => {
                        return (
                            <div key={index} className="col-md-3 ">
                                <Calendar
                                value={[
                                new Date(item.startdate),
                                new Date(item.stopdate)
                                ]}
                                />
                            </div>
                        );
                    })
                ) : (
                        <h6>No Active Calender Please Fill A New Absence</h6>
                    )}
                </div>
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