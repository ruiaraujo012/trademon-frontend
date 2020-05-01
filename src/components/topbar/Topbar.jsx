import React, { Component } from "react";

import { Navbar, Nav } from "react-bootstrap";

import "./Topbar.css";
import logo from "../../images/profile-nbg.png";

export class Topbar extends Component {
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
        <Navbar bg="dark" fixed="top" expand="md" collapseOnSelect={true}>
          <Navbar.Brand className="text-light custom-nav-title" href="/">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block"
              alt="Logo"
            />
            PoGoTrades
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="topbar" className="border border-light">
            <i className="fas fa-bars custom-icon-format" />
          </Navbar.Toggle>
          <Navbar.Collapse id="topbar">
            <Nav className="mr-auto">
              <Nav.Link className="text-light custom-nav-item" href="/trades">
                Teste
              </Nav.Link>
              <Nav.Link className="text-light custom-nav-item" href="/history">
                History
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {toggleAuthButton()}
        </Navbar>
      </div>
    );
  }
}

export default Topbar;
