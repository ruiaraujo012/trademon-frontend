import React, { Component } from "react";
import toastNotification from "../../utils/toastNotification";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
  Box,
  Grid,
} from "@material-ui/core";
import {
  Visibility,
  VisibilityOff,
  AccountBoxOutlined,
} from "@material-ui/icons";

import API from "../../utils/api";

const initialState = {
  signupData: {
    username: "",
    password: "",
  },
  passwordConfirmation: "",
  showPassword: false,
  errorForm: false,
  errorPassword: false,
};

export class SignupModal extends Component {
  state = { ...initialState };

  resetState = () => {
    this.setState({ ...initialState });
  };

  handleChange = (prop) => (event) => {
    switch (prop) {
      case "password":
      case "username":
        const signupData = Object.assign({}, this.state.signupData, {
          [prop]: event.target.value,
        });

        this.setState({ signupData });
        break;

      default:
        this.setState({ [prop]: event.target.value });
        break;
    }
  };

  handleClickLogin = async () => {
    try {
      const { data } = await API.post("/users/login", {
        ...this.state.signupData,
      });

      localStorage.setItem("access_token", data.token);
      toastNotification(data.message, "success");

      this.resetState();
      this.props.onClickClose();
    } catch (err) {
      let parsedError = Object.assign({}, err);
      parsedError = parsedError.response;

      if (parsedError !== undefined) {
        this.setState({ errorForm: true });
        const errorMessage = parsedError.data.message;
        toastNotification(errorMessage, "error");
      } else {
        toastNotification("Ups, error conecting to server.", "error");
      }
    }
  };

  handleClose = () => {
    this.setState({});
    this.props.onClickClose();
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  render() {
    const { open, onLogin } = this.props;
    const {
      signupData,
      showPassword,
      errorForm,
      errorPassword,
      passwordConfirmation,
    } = this.state;

    return (
      <div>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Signup</DialogTitle>

          <DialogContent>
            <Box m="Auto">
              <form>
                <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel htmlFor="outlined-adornment-username">
                    Username
                  </InputLabel>

                  <FilledInput
                    id="outlined-adornment-username"
                    value={signupData.username}
                    onChange={this.handleChange("username")}
                    error={errorForm}
                    endAdornment={
                      <InputAdornment position="end">
                        <AccountBoxOutlined />
                      </InputAdornment>
                    }
                  />
                </FormControl>

                <FormControl variant="outlined" fullWidth margin="normal">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>

                  <FilledInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    value={signupData.password}
                    onChange={this.handleChange("password")}
                    error={errorForm}
                    autoComplete="on"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={this.handleClickShowPassword}
                          onMouseDown={this.handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>

                <FormControl variant="outlined" fullWidth margin="normal">
                  <InputLabel htmlFor="outlined-adornment-passwordConfirmation">
                    Password
                  </InputLabel>

                  <FilledInput
                    id="outlined-adornment-passwordConfirmation"
                    type={showPassword ? "text" : "password"}
                    value={passwordConfirmation}
                    onChange={this.handleChange("passwordConfirmation")}
                    error
                    helperText="Passwords don't match"
                    autoComplete="on"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={this.handleClickShowPassword}
                          onMouseDown={this.handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </form>
            </Box>
          </DialogContent>

          <DialogActions>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Button size="small" color="secondary" onClick={onLogin}>
                Already have account? Login here.
              </Button>
            </Grid>

            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>

            <Button
              // onClick={this.handleClickLogin}
              color="primary"
              variant="outlined"
            >
              Signup
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default SignupModal;
