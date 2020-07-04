import React, { Component } from "react";
import axios from 'axios'

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      number: ""
    };
  }

  handleFirstnameChange = event => {
    this.setState({
      firstname: event.target.value
    });
  };

  handleLastnameChange = event => {
    this.setState({
      lastname: event.target.value
    });
  };

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  handleNumberChange = event => {
    this.setState({
      number: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    const data={
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      number: this.state.number
    }
    console.log(data)
    axios.defaults.withCredentials = true;
    axios
      .post('http://localhost:5000/newStudent', data)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  };

  render() {
    const { firstname, lastname, email, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Firstname </label>
          <input
            type="text"
            value={firstname}
            onChange={this.handleFirstnameChange}
          />
        </div>
        <div>
          <label>Lastname </label>
          <input
            type="text"
            value={lastname}
            onChange={this.handleLastnameChange}
          />
        </div>
        <div>
          <label>Email </label>
          <input type="email" value={email} onChange={this.handleEmailChange} />
        </div>
        <div>
          <label>Mobile Number </label>
          <input
            type="number"
            value={number}
            onChange={this.handleNumberChange}
          />
        </div>
        <button type="submit">Enroll</button>
      </form>
    );
  }
}

export default Form;
