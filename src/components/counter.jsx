import { throwStatement } from "@babel/types";
import React, { Component } from "react";

class Counter extends Component {
  state = {};

  render() {
    return (
      <li key={this.props.id}>
        <span className="badge badge-pill badge-success counter">
          {this.props.value}
        </span>
        <button
          onClick={() => this.props.handleIncrement(this.props.counter)}
          className="btn btn-secondary"
        >
          +
        </button>
        <button
          onClick={() => this.props.handleDecrement(this.props.counter)}
          className="btn btn-secondary"
          disabled={this.props.value === 0 ? "disabled" : ""}
        >
          -
        </button>
        <button
          onClick={() => this.props.handleDelete(this.props.counter)}
          className="btn-primary btn"
        >
          Delete
        </button>
      </li>
    );
  }
}

export default Counter;
