import React from "react";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
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
  AccountCircleTwoTone,
  ExitToAppTwoTone,
  ViewHeadlineTwoTone,
} from "@material-ui/icons";

import "./TopBar.css";
import logo from "../../images/profile-nbg.png";

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
}));

const style = {
  textDecoration: "none",
  color: "black",
};

export function TopBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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
      const decodedToken = jwtDecode(localStorage.getItem("access_token"));
      if (decodedToken.exp < Date.now() / 1000) {
        localStorage.removeItem("access_token");
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/profile" style={style}>
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      </Link>
      <Link to="/" style={style}>
        <MenuItem onClick={handleLogoutMenuClose}>
          <Box mr={1}>Logout</Box>
          <ExitToAppTwoTone />
        </MenuItem>
      </Link>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleTwoTone />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  const loggedOutMenu = (
    <div>
      <div className={classes.sectionDesktop}>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircleTwoTone />
        </IconButton>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton
          aria-label="show more"
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <ViewHeadlineTwoTone />
        </IconButton>
      </div>
    </div>
  );

  const loggedInMenu = (
    <div>
      <Button className="custom-button-link" onClick={props.onLogin}>
        Signin
      </Button>
    </div>
  );

  if (verifyToken())
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <Link to="/" style={style}>
              <Button className="custom-button-link">
                <img src={logo} width="30" height="30" alt="Logo" />
                Trademon
              </Button>
            </Link>
            <div className={classes.grow} />
            {loggedOutMenu}
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    );

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/" style={style}>
            <Button className="custom-button-link">
              <img src={logo} width="30" height="30" alt="Logo" />
              Trademon
            </Button>
          </Link>
          <div className={classes.grow} />
          {loggedInMenu}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default TopBar;
