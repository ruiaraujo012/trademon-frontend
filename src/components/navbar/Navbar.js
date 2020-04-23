import React, { Component } from "react";

import "./Navbar.css";
import logo from "../../images/profile-nbg.png";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-dark navbar-expand-md">
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
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
            {/* <span className="navbar-toggler-icon"></span> */}
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/home">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/link">
                  Link
                </a>
              </li>
            </ul>
            {/* <i className="fas fa-sign-in-alt fa-lg icon-color" /> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
