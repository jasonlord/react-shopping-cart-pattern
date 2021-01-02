import React, { Component } from "react";

import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 9 },
      { id: 2, value: 2 },
      { id: 3, value: 7 },
      { id: 4, value: 2 },
      { id: 5, value: 4 },
      { id: 6, value: 2 },
      { id: 7, value: 39 },
      { id: 8, value: 2 },
      { id: 9, value: 75 },
      { id: 10, value: 22 },
      { id: 11, value: 42 },
      { id: 12, value: 22 },
    ],
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value--;

    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters: counters });
  };

  handleDelete = (counter) => {
    console.log("inside handle delete");
    const counters = this.state.counters.filter((m) => m.id !== counter.id);
    this.setState({ counters });
  };

  render() {
    return (
      <ul>
        {this.state.counters.map((counter) => (
          <Counter
            id={counter.id}
            value={counter.value}
            counter={counter}
            handleDelete={this.handleDelete}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
          />
        ))}
      </ul>
    );
  }
}

export default Counters;
