import React, { Component } from "react";

import Counter from "./components/counter";
import Counters from "./components/counters";

import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Counters />
      </div>
    );
  }
}

export default App;
