import React from 'react';
import env from "../../env";
import axios from "axios";

export default class TeamviewBody extends React.Component{
    state = {
        user: "",
        request: [],
        loading: true
      };

      async componentDidMount() {
        try {
          const token = localStorage.getItem("owatimer-token");
    
          if (!token) return this.props.history.push("/login");
    
          const profile = await axios.get(`${env.api}/user/dashboard`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
    
          const requestBody = await axios.get(`${env.api}/request`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
    
          this.setState({
            user: profile.data.data,
            request: requestBody.data.data,
            loading: false
          });
          console.log(this.state.request);
          console.log(this.state.user);
        } catch (err) {
            console.log(err);
        }
      }
    
render(){
  const { user, request } = this.state;
    return(
      <div>
        <div className="container">
          <h5 className="text-danger text-center my-4">
            Pending requests to be approved
          </h5>
          {this.state.loading ? (
            <p>Automatically loads and updates requests if any</p>
          ) : (
            ""
          )}
          <table className="container table table-hover">
            <thead>
              <tr>
                <th scope="col">Employee</th>
                <th scope="col">Department</th>
                <th scope="col">Leave Type</th>
                <th scope="col">Leave Period</th>
                <th scope="col">Duration</th>
                <th scope="col">Leave Reason</th>
                <th scope="col" />
                <th scope="col" />
              </tr>
            </thead>
            
            <tbody>
              {request.map((item, index) => (
                <tr key={index}>
                  <td>{`${user.firstName} ${user.lastName}`}</td>
                  <td>{user.department}</td>
                  <td>{item.leaveType}</td>
                  <td>{`${item.startdate} To ${item.enddate}`}</td>
                  <td>{item.totaldays}</td>
                  <td>{item.requestmessage}</td>
                  <td>
                    <button className="btn btn-success mr-2">
                      Approve
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Decline</button>
                  </td>
                </tr>
              ))}
            </tbody>

            
          </table>
          <h5 className="text-success text-center my-4">
            Approved Request
          </h5>
          <table className="container table mb-5 py-3">
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
                <td>Software</td>
                <td>10 Days</td>
                <td>2020/1/10 To 2020/1/20</td>
                <td>Jim</td>
                <td>Good</td>
                <td>Approved</td>
              </tr>
              <tr>
                <td>Opubo Amachree</td>
                <td>Vacation</td>
                <td>30 Days</td>
                <td>2019/3/01 To 2019/3/30</td>
                <td>Mayowa</td>
                <td>Good</td>
                <td>Approved</td>
              </tr>
              <tr>
                <td>Opuine Amachree</td>
                <td>Sick Leave</td>
                <td>10 Days</td>
                <td>2019/5/1 To 2019/5/10</td>
                <td>Kunle</td>
                <td>Good</td>
                <td>Approved</td>
              </tr>
            </tbody>
          </table>
        </div>
                    
      </div>
    )
  }
}