import React, { Component } from "react";

class Counter extends Component {
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

  render() {
    // i can put the classes in the curly braces or
    // i can directly call the method on this
    // let classes = this.getClass();
    console.log("child", this.props);

    return (
      <div>
        <h4>Counter #{this.props.id}</h4>
        <span className={this.getClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
      // {this.renderTags()} was inside to render LI
    );
  }

  getClass() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    // this I destructured to but the value in value variable
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  // <span className={this.getClass()}>{this.formatCount()}</span> had em both in before
  // <button className="btn btn-secondary btn-sm">Increment</button>
}

export default Counter;
