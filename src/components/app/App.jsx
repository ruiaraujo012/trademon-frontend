import React, { Component } from "react";
import "./App.css";

import { Button, Box } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class App extends Component {
  // state = {
  //   isUserLoggedIn: false,
  // };

  // componentDidMount = () => {
  //   if (localStorage.getItem("userToken"))
  //     this.setState({ isUserLoggedIn: true });
  // };

  // handleLogin = () => {
  //   localStorage.setItem("userToken", "ABC");
  //   this.setState({ isUserLoggedIn: true });
  // };

  // handleLogout = () => {
  //   localStorage.removeItem("userToken");
  //   this.setState({ isUserLoggedIn: false });
  // };

  render() {
    // const { isUserLoggedIn } = this.state;
    return (
      <div className="App">
        <h4 className="m-2">Hello World!</h4>
        <Box mb={2}>
          <Button variant="outlined" color="primary">
            Hello World
          </Button>
        </Box>
        <Alert severity="success" variant="outlined">
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
      </div>
    );
  }
}

export default App;
