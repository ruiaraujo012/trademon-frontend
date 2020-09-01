import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import jwtDecode from "jwt-decode";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import toastNotification from "utils/toastNotification";

import TopBar from "components/topBar/TopBar";
import LoginDialog from "components/auth/LoginDialog";
import SignupDialog from "components/auth/SignupDialog";
import HomePage from "components/homePage/HomePage";
import UserProfile from "components/userProfile/UserProfile";
import NotFoundPage from "components/notFoundPage/NotFoundPage";
import Unauthorized from "components/unauthorized/Unauthorized";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  pageContent: {
    background: "linear-gradient(to bottom, #ffefba, #ffffff)",
    height: "90vh",
  },
});

const App = () => {
  const classes = useStyles();
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const [openSignupDialog, setOpenSignupDialog] = useState(false);

  useEffect(() => {
    verifyToken();
  });

  // Methods & functions
  const verifyToken = () => {
    try {
      if (!localStorage.getItem("access_token")) return;
      const decodedToken = jwtDecode(localStorage.getItem("access_token"));
      if (decodedToken.exp < Date.now() / 1000) {
        localStorage.removeItem("access_token");
      }
    } catch (err) {
      toastNotification(err.message, "error");
    }
  };

  const handleLogin = () => {
    setOpenLoginDialog(true);
    setOpenSignupDialog(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
  };

  const handleSignup = () => {
    setOpenLoginDialog(false);
    setOpenSignupDialog(true);
  };

  const handleLoginDialogClose = () => {
    setOpenLoginDialog(false);
  };

  const handleSignupDialogClose = () => {
    setOpenSignupDialog(false);
  };

  // Small components
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

  return (
    <Router>
      <ToastContainer />

      <LoginDialog
        open={openLoginDialog}
        onClickClose={handleLoginDialogClose}
        onSignup={handleSignup}
      />

      <SignupDialog
        open={openSignupDialog}
        onClickClose={handleSignupDialogClose}
        onSignup={handleLogin}
      />

      <Grid container direction="column">
        <Grid item>
          <TopBar onLogin={handleLogin} onLogout={handleLogout} />
        </Grid>
        <Grid item container className={classes.pageContent}>
          <Grid item sm={2} />
          <Grid item xs={12} sm={8}>
            <Switch>
              <PublicRoute path="/" exact component={HomePage} />
              <AuthenticatedRoute path="/profile" component={UserProfile} />

              <PublicRoute path="/pageNotFound" component={NotFoundPage} />
              <PublicRoute path="/unauthorized" component={Unauthorized} />
              <Redirect to="/pageNotFound" />
            </Switch>
          </Grid>
          <Grid item sm={2} />
        </Grid>
      </Grid>
    </Router>
  );
};

export default App;
