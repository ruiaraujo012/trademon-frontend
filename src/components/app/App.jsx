import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import jwtDecode from "jwt-decode";
import { ToastContainer } from "react-toastify";

import { Box } from "@material-ui/core";

import "react-toastify/dist/ReactToastify.css";

import TopBar from "../topBar/TopBar";
import LoginModal from "../auth/LoginModal";
import SignupModal from "../auth/SignupModal";
import HomePage from "../homePage/HomePage";
import UserProfile from "../userProfile/UserProfile";
import NotFoundPage from "../notFoundPage/NotFoundPage";
import Unauthorized from "../unauthorized/Unauthorized";

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("access_token") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/unauthorized", state: { from: props.location } }}
        />
      )
    }
  />
);

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => <Component {...props} />} />
);

export class App extends Component {
  state = {
    openLoginModal: false,
    openSignupModal: false,
  };

  handleLogin = () => {
    this.setState({ openLoginModal: true });
    this.setState({ openSignupModal: false });
  };

  handleLogout = () => {
    localStorage.removeItem("access_token");
  };

  handleSignup = () => {
    this.setState({ openLoginModal: false });
    this.setState({ openSignupModal: true });
  };

  handleLoginModalClose = () => {
    this.setState({ openLoginModal: false });
  };

  handleSignupModalClose = () => {
    this.setState({ openSignupModal: false });
  };

  verifyToken = () => {
    try {
      const decodedToken = jwtDecode(localStorage.getItem("access_token"));
      if (decodedToken.exp < Date.now() / 1000) {
        localStorage.removeItem("access_token");
      }
    } catch (err) {}
  };

  componentDidMount() {
    this.verifyToken();
  }

  componentDidUpdate() {
    this.verifyToken();
  }

  render() {
    const { openLoginModal, openSignupModal } = this.state;

    return (
      <div className="App">
        <Router>
          <ToastContainer />

          <TopBar onLogin={this.handleLogin} onLogout={this.handleLogout} />

          <LoginModal
            open={openLoginModal}
            onClickClose={this.handleLoginModalClose}
            onSignup={this.handleSignup}
          />

          <SignupModal
            open={openSignupModal}
            onClickClose={this.handleSignupModalClose}
            onSignup={this.handleLogin}
          />

          <Box mt={10} m="10%">
            <Switch>
              <PublicRoute path="/" exact component={HomePage} />
              <AuthenticatedRoute path="/profile" component={UserProfile} />

              <PublicRoute path="/pageNotFound" component={NotFoundPage} />
              <PublicRoute path="/unauthorized" component={Unauthorized} />
              <Redirect to="/pageNotFound" />
            </Switch>
          </Box>
        </Router>
      </div>
    );
  }
}

export default App;
