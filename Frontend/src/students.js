import React, { Component } from "react";
import axios from "axios";

class Students extends Component {
	constructor(props){
		super(props);
		this.state ={
			students: []
		}
	}

	componentDidMount(){
		axios.get('/getStudent')
		.then(response => {
			this.setState({students: response.data});
		})
		.catch(error =>{
			console.log(error);
		})
	}
  render() {
  	const { students } = this.state
    return (
      <div className= "container">
       <h2>Enrolled Students</h2>
       <div className= "inner">
       {
       	students.length ?
       	students.map(student => <div key={student.id}> {student.FirstName} </div>) :
       	null
       }
       </div>       
      </div>
    );
  }
}

export default Students;
