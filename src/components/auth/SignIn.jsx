import React, { useState } from "react";

import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  FormControl,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import toastNotification from "utils/toastNotification";
import API from "utils/api";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    background: "linear-gradient(to right, #F09819, #FF512F)",
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = (props) => {
  const classes = useStyles();

  const [signinData, setSigninData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (prop) => (event) => {
    setSigninData({ ...signinData, [prop]: event.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (signinData.username === "" || signinData.password === "")
        throw new TypeError("Missing credentials");

      const { data } = await API.post("/users/login", {
        ...signinData,
      });

      localStorage.setItem("access_token", data.token);
      toastNotification(data.message, "success");

      props.history.push("/");
    } catch (err) {
      if (err instanceof TypeError) {
        // this.setState({ errorForm: true });
        toastNotification(err.message, "error");
      } else {
        let parsedError = Object.assign({}, err);
        parsedError = parsedError.response;

        if (parsedError !== undefined) {
          // this.setState({ errorForm: true });
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
          Sign in
        </Typography>
        <FormControl fullWidth>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={signinData.username}
            onChange={handleChange("username")}
          />

          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={signinData.password}
            onChange={handleChange("password")}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>

          <Grid container>
            <Grid item xs />
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </FormControl>
      </div>
    </Container>
  );
};

export default SignIn;
