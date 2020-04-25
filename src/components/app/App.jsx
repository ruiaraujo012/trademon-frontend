import React, { Component } from "react";
import "./App.css";

import Navbar from "../navbar/Navbar";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    isUserLoggedIn: false,
  };

  componentDidMount = () => {
    if (localStorage.getItem("userToken"))
      this.setState({ isUserLoggedIn: true });
  };

  handleLogin = () => {
    localStorage.setItem("userToken", "ABC");
    this.setState({ isUserLoggedIn: true });
  };

  handleLogout = () => {
    localStorage.removeItem("userToken");
    this.setState({ isUserLoggedIn: false });
  };

  render() {
    const { isUserLoggedIn } = this.state;
    return (
      <div className="App">
        <Navbar
          isUserLoggedIn={isUserLoggedIn}
          onLogin={this.handleLogin}
          onLogout={this.handleLogout}
        />
        <h4 className="m-2">Hello World!</h4>
      </div>
    );
  }
}

export default App;
