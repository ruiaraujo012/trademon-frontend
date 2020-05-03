import React, { Component } from "react";
import "./App.css";

import { Button, Box } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { TopBar } from "../topBar/TopBar";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class App extends Component {
  state = {
    openLoginModal: false,
  };

  handleLogin = () => {
    localStorage.setItem("access_token", "Some.Token");
    // Remove after having a modal
    window.location.reload(false);
  };

  handleLogout = () => {
    localStorage.removeItem("access_token");
  };

  render() {
    // const { isUserLoggedIn } = this.state;
    return (
      <div className="App">
        <TopBar onLogin={this.handleLogin} onLogout={this.handleLogout} />

        <Box mt={10}>
          <h4 className="m-2">Hello World!</h4>
          <Box mb={2}>
            <Button variant="outlined" color="primary">
              Hello World
            </Button>
          </Box>
          <Alert severity="success" variant="filled">
            Hello World
          </Alert>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            molestias eius excepturi ea, ducimus optio, voluptas quas quia,
            voluptatum quisquam incidunt architecto expedita maiores deserunt.
            Beatae cum odit cumque tempora.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            aperiam est excepturi molestiae velit quibusdam inventore debitis
            facilis dicta neque, provident culpa. Consectetur odit vel quos
            sapiente nesciunt nihil tempora.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            aperiam est excepturi molestiae velit quibusdam inventore debitis
            facilis dicta neque, provident culpa. Consectetur odit vel quos
            sapiente nesciunt nihil tempora.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            aperiam est excepturi molestiae velit quibusdam inventore debitis
            facilis dicta neque, provident culpa. Consectetur odit vel quos
            sapiente nesciunt nihil tempora.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            aperiam est excepturi molestiae velit quibusdam inventore debitis
            facilis dicta neque, provident culpa. Consectetur odit vel quos
            sapiente nesciunt nihil tempora.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            aperiam est excepturi molestiae velit quibusdam inventore debitis
            facilis dicta neque, provident culpa. Consectetur odit vel quos
            sapiente nesciunt nihil tempora.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            aperiam est excepturi molestiae velit quibusdam inventore debitis
            facilis dicta neque, provident culpa. Consectetur odit vel quos
            sapiente nesciunt nihil tempora.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            aperiam est excepturi molestiae velit quibusdam inventore debitis
            facilis dicta neque, provident culpa. Consectetur odit vel quos
            sapiente nesciunt nihil tempora.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            aperiam est excepturi molestiae velit quibusdam inventore debitis
            facilis dicta neque, provident culpa. Consectetur odit vel quos
            sapiente nesciunt nihil tempora.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            aperiam est excepturi molestiae velit quibusdam inventore debitis
            facilis dicta neque, provident culpa. Consectetur odit vel quos
            sapiente nesciunt nihil tempora.
          </p>
        </Box>
      </div>
    );
  }
}

export default App;
