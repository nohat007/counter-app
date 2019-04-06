import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    // i can put the classes in the curly braces or
    // i can directly call the method on this
    // let classes = this.getClass();

    return (
      <React.Fragment>
        <span className={this.getClass()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  getClass() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    // this I destructured to but the value in count variable
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
