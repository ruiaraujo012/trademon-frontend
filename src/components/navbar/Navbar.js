import React, { Component } from "react";

import "./Navbar.css";
import logo from "../../images/profile-nbg.png";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-dark">
          <a className="navbar-brand text-white nav-title" href="/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            PoGoTrades
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
