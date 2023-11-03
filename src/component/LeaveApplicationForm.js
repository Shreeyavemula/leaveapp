import React, { Component } from 'react';

class LeaveApplicationForm extends Component {
  constructor() {
    super();
    this.state = {
      leaveType: '',
      startDate: '',
      endDate: '',
      reason: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to the server or perform validation.
  };

  render() {
    return (
      <div className="container">
        <h1>Apply for Leave</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="leaveType">Leave Type</label>
            <input
              type="text"
              className="form-control"
              id="leaveType"
              name="leaveType"
              value={this.state.leaveType}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              name="startDate"
              value={this.state.startDate}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              className="form-control"
              id="endDate"
              name="endDate"
              value={this.state.endDate}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="reason">Reason</label>
            <textarea
              className="form-control"
              id="reason"
              name="reason"
              value={this.state.reason}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LeaveApplicationForm;
