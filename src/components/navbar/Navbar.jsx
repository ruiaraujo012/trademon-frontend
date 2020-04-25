import React, { Component } from "react";

import "./Navbar.css";
import logo from "../../images/profile-nbg.png";

export class Navbar extends Component {
  state = {
    isUserLoggedIn: false,
  };

  render() {
    const toggleAuthButton = () => {
      if (this.props.isUserLoggedIn) return signoutButton();
      return signinButton();
    };

    const signinButton = () => {
      return (
        <button
          className="btn btn-outlined-light custom-auth-button"
          onClick={() => this.props.onLogin()}
        >
          <i className="fas fa-sign-in-alt fa-lg custom-icon-format" />
        </button>
      );
    };

    const signoutButton = () => {
      return (
        <button
          className="btn btn-outlined-light custom-auth-button"
          onClick={() => this.props.onLogout()}
        >
          <i className="fas fa-sign-out-alt fa-lg custom-icon-format" />
        </button>
      );
    };
    return (
      <div>
        <nav className="navbar navbar-light bg-dark navbar-expand-md">
          <a className="navbar-brand text-light custom-nav-title" href="/">
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
            className="navbar-toggler border border-light"
            type="button"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars custom-icon-format" />
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a
                  className="nav-link custom-nav-item text-light"
                  href="/trades"
                >
                  Trades
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link custom-nav-item text-light"
                  href="/history"
                >
                  History
                </a>
              </li>
            </ul>

            {toggleAuthButton(false)}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
