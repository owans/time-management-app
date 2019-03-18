import React from 'react';

export default class TeamviewBody extends React.Component{
    render(){
        return(
            
        <div>
              <div className="d-flex justify-content-between container m-3">
                <h6 className="text-primary">Approved Request</h6>
                </div>

                <table class="table font">
                <thead>
                <tr>
                    <th scope="col">Employee</th>
                    <th scope="col">Type</th>
                    <th scope="col">Deducted</th>
                    <th scope="col">Date</th>
                    <th scope="col">Approved By</th>
                    <th scope="col">Remark</th>
                    <th scope="col">Status</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                <td>Owanate Amachree</td>      
                <td>Maternity</td>
                <td>10 Days</td>
                <td>2021-1-15 To 2021-1-25</td>
                <td>Kunle</td>
                <td>Good</td>
                <td>Approved</td>
                </tr>
                <tr>
                <td>Ibiere boyle</td>
                <td>Vacation</td>
                <td>7 Days</td>
                <td>2019-3-15 To 2019-3-21</td>
                <td>Mayowa</td>
                <td>Good</td>
                <td>Approved</td>
                </tr>
                <tr>
                <td>Opuine Amachre</td>    
                <td>Wedding Purpose</td>
                <td>14 Days</td>
                <td>2019-5-1 To 2019-5-14</td>
                <td>Kunle</td>
                <td>Good</td>
                <td>Approved</td>
                </tr>
                </tbody>
                </table>
                    <div>
                        <div className="d-flex justify-content-between container m-3">
                        <h6 className="text-primary">Leave Request to Approve</h6>
                        </div>

                        <div>
                        <table class="table">
                        <thead>
                        <tr>
                        <th scope="col">Employee</th>
                        <th scope="col">Department</th>
                        <th scope="col">Request Date</th>
                        <th scope="col">Leave Period</th>
                        <th scope="col">Type</th>
                        <th scope="col">Number Of Days</th>
                        <th scope="col">Available Days</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                        <td>Owanate Amachree</td>
                        <td>Finance</td>
                        <td>2020-12-20</td>
                        <td>2021-1-14 To 2021-1-24</td>
                        <td>Maternity</td>
                        <td>10</td>
                        <td>2</td>
                        <td><button type="button" class="btn btn-danger">Reject</button></td>
                        <td><button type="button" class="btn btn-danger">Pending</button></td>

                        </tr>
                        <tr>
                        <td>Ibiere Boyle</td>
                        <td>HR</td>
                        <td>2019-2-19</td>
                        <td>2019-4-10 To 2019-4-24</td>
                        <td>Vacation</td>
                        <td>14</td>
                        <td>7</td>
                        <td><button type="button" class="btn btn-danger">Reject</button></td>
                        <td><button type="button" class="btn btn-danger">Pending</button></td>
                        </tr>
                        <tr>
                        <td>Opuine Amachree</td>
                        <td>Personnel</td>
                        <td>2019-6-2</td>
                        <td>2019-8-14 To 2019-8-17</td>
                        <td>Marriage Purposes</td>
                        <td>3</td>
                        <td>Nil</td>
                        <td><button type="button" class="btn btn-danger">Reject</button></td>
                        <td><button type="button" class="btn btn-success">Approved</button></td>
                        </tr>
                        </tbody>
                        </table>

                        </div>
                            </div>
                        </div>
                        )
                    }
                }