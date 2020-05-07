import React, { Component } from "react";

import { Box } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

import { TopBar } from "../topBar/TopBar";
import { LoginModal } from "../auth/LoginModal";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class App extends Component {
  state = {
    openLoginModal: false,
  };

  handleLogin = () => {
    this.setState({ openLoginModal: true });
  };

  handleLogout = () => {
    localStorage.removeItem("access_token");
  };

  handleLoginModalClose = () => {
    this.setState({ openLoginModal: false });
  };

  render() {
    const { openLoginModal } = this.state;

    return (
      <div className="App">
        <TopBar onLogin={this.handleLogin} onLogout={this.handleLogout} />

        <LoginModal
          open={openLoginModal}
          onClickClose={this.handleLoginModalClose}
        />

        <Box mt={10} width="70%" m="Auto">
          <Alert severity="info" variant="filled">
            <AlertTitle>Info</AlertTitle>
            This app still in construction...
          </Alert>
        </Box>
      </div>
    );
  }
}

export default App;
