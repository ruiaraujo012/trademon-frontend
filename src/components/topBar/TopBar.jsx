import React, { useState } from "react";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

import toastNotification from "utils/toastNotification";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  MenuItem,
  Menu,
  Box,
} from "@material-ui/core";
import {
  AccountCircleOutlined,
  ExitToAppOutlined,
  ViewHeadlineOutlined,
} from "@material-ui/icons";

import logo from "images/profile-nbg.png";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  buttonLink: {
    fontWeight: "bold",
    fontSize: "medium",
    color: "white",
  },
}));

const TopBar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleLogoutMenuClose = () => {
    props.onLogout();
    handleMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const verifyToken = () => {
    try {
      if (!localStorage.getItem("access_token")) return false;
      const decodedToken = jwtDecode(localStorage.getItem("access_token"));
      if (decodedToken.exp < Date.now() / 1000) {
        localStorage.removeItem("access_token");
        return false;
      }
      return true;
    } catch (err) {
      toastNotification(err.message, "error");
      return false;
    }
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/profile" className={classes.link}>
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      </Link>
      <Link to="/" className={classes.link}>
        <MenuItem onClick={handleLogoutMenuClose}>
          <Box mr={1}>Logout</Box>
          <ExitToAppOutlined />
        </MenuItem>
      </Link>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton color="inherit">
          <AccountCircleOutlined /> User
        </IconButton>
      </MenuItem>
    </Menu>
  );

  const loggedOutMenu = (
    <div>
      <div className={classes.sectionDesktop}>
        <IconButton edge="end" onClick={handleProfileMenuOpen} color="inherit">
          <AccountCircleOutlined />
        </IconButton>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton onClick={handleMobileMenuOpen} color="inherit">
          <ViewHeadlineOutlined />
        </IconButton>
      </div>
    </div>
  );

  const loggedInMenu = (
    <div>
      <Button className={classes.buttonLink} href="/signin">
        Signin
      </Button>
    </div>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.link}>
            <Button className={classes.buttonLink}>
              <img src={logo} width="30" height="30" alt="Logo" />
              Trademon
            </Button>
          </Link>
          <div className={classes.grow} />
          {verifyToken() ? loggedOutMenu : loggedInMenu}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default TopBar;
