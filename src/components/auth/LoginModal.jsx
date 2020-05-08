import React, { Component } from "react";

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
} from "@material-ui/core";
import {
  Visibility,
  VisibilityOff,
  AccountBoxOutlined,
} from "@material-ui/icons";

const initialState = {
  loginData: {
    username: "",
    password: "",
  },
  showPassword: false,
};
export class LoginModal extends Component {
  state = { ...initialState };

  resetState = () => {
    this.setState({ ...initialState });
  };

  handleChange = (prop) => (event) => {
    switch (prop) {
      case "password":
      case "username":
        const loginData = Object.assign({}, this.state.loginData, {
          [prop]: event.target.value,
        });

        this.setState({ loginData });
        break;

      default:
        this.setState({ [prop]: event.target.value });
        break;
    }
  };

  handleClickLogin = async () => {
    await this.resetState();
    this.props.onClickClose();
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
    const { open } = this.props;
    const { loginData, showPassword } = this.state;

    return (
      <div>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login</DialogTitle>

          <DialogContent>
            <Box m="Auto">
              <form>
                <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel htmlFor="outlined-adornment-username">
                    Username
                  </InputLabel>

                  <FilledInput
                    id="outlined-adornment-username"
                    value={loginData.username}
                    onChange={this.handleChange("username")}
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
                    value={loginData.password}
                    onChange={this.handleChange("password")}
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
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>

            <Button
              onClick={this.handleClickLogin}
              color="primary"
              variant="outlined"
            >
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default LoginModal;
