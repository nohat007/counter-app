import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    bag: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.bag.filter(c => c.id !== counterId);
    this.setState({ bag: counters });
    // if bag was called counters i couldve just passed
    //counters as an object in the setState
  };

  handleReset = () => {
    const nCounters = this.state.bag.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ bag: nCounters });
  };

  handleIncrement = counter => {
    const aCounter = [...this.state.bag];
    const index = aCounter.indexOf(counter);
    aCounter[index] = { ...counter };
    aCounter[index].value++;
    this.setState({ bag: aCounter });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.bag.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.bag}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
