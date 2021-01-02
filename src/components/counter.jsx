import React, { Component } from "react";

class Counter extends Component {
  state = {
    counters: [
      { id: 1, value: 9 },
      { id: 2, value: 2 },
      { id: 3, value: 7 },
      { id: 4, value: 2 },
      { id: 5, value: 4 },
      { id: 6, value: 2 },
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

  render() {
    return (
      <ul>
        {this.state.counters.map((counter) => (
          <li key={counter.id}>
            <span className="badge badge-pill badge-success counter">
              {counter.value}
            </span>
            <button
              onClick={() => this.handleIncrement(counter)}
              className="btn btn-secondary"
            >
              +
            </button>
            <button
              onClick={() => this.handleDecrement(counter)}
              className="btn btn-secondary"
            >
              -
            </button>
            <button className="btn-primary btn">Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Counter;
