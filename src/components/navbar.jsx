import React, { Component } from "react";
import Counters from "./counters";

// stateless functional component
//at runtime react passes props so i dont need the this
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill bagde-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

class NavBar extends Component {
  render() {}
}

export default NavBar;
