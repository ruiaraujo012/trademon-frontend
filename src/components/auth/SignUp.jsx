import React, { useState } from "react";
import {
  Container,
  Typography,
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
} from "@material-ui/core";

import { LockOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import toastNotification from "utils/toastNotification";
import API from "utils/api";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    background: "linear-gradient(to right, #F09819, #FF512F)",
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = (props) => {
  const classes = useStyles();

  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleChange = (prop) => (event) => {
    setSignupData({ ...signupData, [prop]: event.target.value });
  };

  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      // TODO: Change later to validate funtction
      if (
        signupData.username === "" ||
        signupData.password === "" ||
        signupData.email === ""
      )
        throw new TypeError("Missing credentials");

      if (
        // eslint-disable-next-line no-useless-escape
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          signupData.email
        )
      )
        throw new TypeError("Invalid email");

      if (signupData.password !== passwordConfirmation)
        throw new TypeError("Passwords don't match");

      const { data } = await API.post("/users/signup", {
        ...signupData,
      });

      toastNotification(data.message, "success");

      props.history.push("/signin");
    } catch (err) {
      if (err instanceof TypeError) {
        toastNotification(err.message, "error");
      } else {
        let parsedError = Object.assign({}, err);
        parsedError = parsedError.response;

        if (parsedError !== undefined) {
          const errorMessage = parsedError.data.message;
          toastNotification(errorMessage, "error");
        } else {
          toastNotification("Ups, error conecting to server.", "error");
        }
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Username"
            autoFocus
            value={signupData.username}
            onChange={handleChange("username")}
            autoComplete="username"
            inputProps={{
              form: {
                autocomplete: "off",
              },
            }}
          />

          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            value={signupData.password}
            onChange={handleChange("password")}
            autoComplete="new-password"
          />

          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            type="password"
            label="Password confirmation"
            value={passwordConfirmation}
            onChange={handlePasswordConfirmationChange}
            autoComplete="new-password"
          />

          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email"
            type="email"
            value={signupData.email}
            onChange={handleChange("email")}
            autoComplete="username email"
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
