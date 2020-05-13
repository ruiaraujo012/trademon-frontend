import React from "react";
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

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleLogoutMenuClose}>
        <Box mr={1}>Logout</Box>
        <ExitToAppOutlined />
      </MenuItem>
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
          <AccountCircleOutlined />
        </IconButton>
        <p>Profile</p>
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
          <AccountCircleOutlined />
        </IconButton>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton
          aria-label="show more"
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <ViewHeadlineOutlined />
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

  const accessToken = localStorage.getItem("access_token");

  if (accessToken !== null && accessToken !== undefined && localStorage !== "")
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <Button href="/" className="custom-button-link">
              <img src={logo} width="30" height="30" alt="Logo" />
              Trademon
            </Button>
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
          <Button href="/" className="custom-button-link">
            <img src={logo} width="30" height="30" alt="Logo" />
            Trademon
          </Button>
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
