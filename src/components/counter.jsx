import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tag: ["nohat", "irvo", "nolly"]
  };

  //constructor() {
  //super();
  //this.handleIncrement = this.handleIncrement.bind(this);
  //}

  renderTags() {
    if (this.state.tag.length === 0) {
      return <h2>No tags</h2>;
    } else {
      return (
        <ul>
          {this.state.tag.map(ace => (
            <li key={ace}>{ace}</li>
          ))}
        </ul>
      );
    }
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    // i can put the classes in the curly braces or
    // i can directly call the method on this
    // let classes = this.getClass();

    return (
      <div>
        <span className={this.getClass()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
      // {this.renderTags()} was inside to render LI
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
  // <span className={this.getClass()}>{this.formatCount()}</span> had em both in before
  // <button className="btn btn-secondary btn-sm">Increment</button>
}

export default Counter;
