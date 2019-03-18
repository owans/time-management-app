import React, { Component } from 'react';
import Calendar from 'react-calendar';
import '../src/employee.css';
import 'bootstrap/dist/css/bootstrap.css';
 
export default class Mycalendar extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
      <h3 className="text-secondary">Your Calendar days</h3>
      <div className="calendar-grid">
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
      </div>
    );
  }
}