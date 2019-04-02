import React from 'react';
import '../src/App.css';
import '../src/employee.css';
import "bootstrap/dist/css/bootstrap.css";
import Calendar from 'react-calendar';
import EmployeeHeader from './employeeheader';
import Footer from './footer';

const Fullname = 'Owanate Amachree';

const calendarDate = [
  new Date(2019 , 0, 9), new Date(2019, 1, 23), new Date(2018, 2, 25), new Date(2019, 3, 11)
]
const MoreCalendarDate = [
  new Date(2019 , 0, 9), new Date(2019, 1, 23), new Date(2018, 2, 25), new Date(2019, 3, 11),
  new Date(2019 , 4, 2), new Date(2019, 5, 13), new Date(2018, 6, 25), new Date(2019, 7, 21),
  new Date(2019 , 8, 16), new Date(2019, 9, 8), new Date(2018, 10, 30), new Date(2019, 11, 24)
]
export default class Dashboard extends React.Component{
  state = {
    showMore: false,
    showMoreText: 'Show More'
}
handeleShowMore = () => {
    this.setState({
        showMore: !this.state.showMore,
        showMoreText: 'Show Less'
    })
}
    render(){
        return(
            <div>
                <EmployeeHeader/>
                    <div  className="justify-content-center container">
                        <h2 className='text-primary'>{Fullname}</h2>
                        
                    </div>


                    <div className="container">
                    <h3 className="text-secondary">Statistics</h3>
                    <div className="row p mt-5 statistics">
                        <div className="col-md-3 sta">
                        <div className="card">
                            <div className="card-header bg-secondary text-light">Days Remaining</div>
                            <div className="card-body">
                                <h1>8.5</h1>
                                <h6>Out of 21 in allowance</h6>
                            </div> 
                        </div>
                        </div>

                          <div className="col-md-3 sta">
                        <div className="card">
                            <div className="card-header bg-secondary text-light">Used so far</div>
                            <div className="card-body">
                                <h6>Sick leave</h6>
                                <h6>Study leave</h6>
                                <h6>Travel</h6>
                            </div> 
                        </div>
                        </div>


                          <div className="col-md-3 sta">
                        <div className="card">
                            <div className="card-header bg-secondary text-light">Available Types</div>
                            <div className="card-body">
                                <h6>Sick Leave:................3/10</h6>
                                <h6>Study Leave:..............2/10</h6>
                                <h6>Holiday:......................3/10</h6>
                            </div> 
                        </div>
                        </div>

                        <div className="col-md-3 sta">
                        <div className="card">
                            <div className="card-header bg-secondary text-light">Details</div>
                            <div className="card-body">
                                <h6>Supervisor: Kunle</h6>
                                <h6>Department: LevelUp Academy</h6>
                                <h6>Allowance in 2019:....3</h6>
                            </div> 
                        </div>
                        </div>
                      
                      
                      </div>
                    </div>
                    <h3 className="container text-secondary mt-4 mb-3 ">
                    Calendar  <button onClick={this.handeleShowMore} className="btn btn-secondary">{
                        !this.state.showMore ? 'Show More' : 'Show Less'
                    }</button> </h3>
                    <div className="row">
                   
                    { !this.state.showMore ?
                        calendarDate.map((item, index) => {
                            return <div key={index} className="col-sm-3 container">
                            <Calendar 
                                value={item}
                                />
                            </div>  
                        }) : MoreCalendarDate.map((item, index) => {
                            return <div key={index} className="col-sm-3 mb-2 container">
                            <Calendar
                                value={item}
                                />
                            </div>  
                        })
                    }
      

                    </div>
                        
                <div>
        <div className="d-flex justify-content-between ml-3">
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
      <td><button><i class="fas fa-trash-alt delete"></i></button></td>
      <td>Mayowa</td>
    </tr>

    <tr>
      <td>Holiday</td>
      <td>10</td>
      <td>2019-4-5 - 2019-4-15</td>
      <td>Pending</td>
      <td><button><i class="fas fa-trash-alt delete"></i></button></td>
      <td>Kunle</td>
    </tr>
    <tr>
      
      <td>Time Off</td>
      <td>14</td>
      <td>2019-5-01 - 2019-5-15</td>
      <td>Pending</td>
      <td><button><i class="fas fa-trash-alt delete"></i></button></td>
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
