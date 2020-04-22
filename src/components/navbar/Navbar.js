import React, { Component } from "react";

import "./Navbar.css";
import logo from "../../images/profile-nbg.png";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-dark">
          <a className="navbar-brand text-light nav-title" href="/">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block"
              alt="Logo"
            />
            PoGoTrades
          </a>
          <i className="fas fa-sign-in-alt fa-lg icon-color" />
        </nav>
      </div>
    );
  }
}

export default Navbar;
