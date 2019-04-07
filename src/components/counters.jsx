import React, { Component } from "react";
import Counter from "./counter";
class counters extends Component {
  state = {
    bag: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.bag.map(cnt => (
          <Counter key={cnt.id} />
        ))}
      </div>
    );
  }
}

export default counters;
