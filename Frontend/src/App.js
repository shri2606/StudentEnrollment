import React, { Component } from "react";
import "./styles.css";
import Form from "./Form";
import Students from "./students";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Students />
      </div>
    );
  }
}

export default App;
