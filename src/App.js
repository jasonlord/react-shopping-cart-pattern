import React, { Component } from "react";

import Counter from "./components/counter";

import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
