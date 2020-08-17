import React, { useState, useEffect } from "react";
import API from "../../utils/api";
import {
  InputLabel,
  FilledInput,
  FormControl,
  Card,
  CardMedia,
  CardContent,
  Badge,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Zoom,
  TextField,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import { EditTwoTone } from "@material-ui/icons";
import Yellow from "../../images/yellow.jpg";
import Blue from "../../images/blue.jpg";
import Red from "../../images/red.jpg";
import Unown from "../../images/unown.jpg";

const userData = {};

const UserProfile = () => {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(Unown);
  const [user, setUser] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [formErrors, setFormErrors] = useState({
    username: { error: false, message: "" },
    level: { error: false, message: "" },
    teamName: { error: false, message: "" },
  });

  useEffect(() => {
    getUserData();
  }, []); // Equals to componenteDidMount

  /**
   * Functions
   */

  const getUserData = async () => {
    try {
      const { data } = await API.get("/users/profile");
      setUser(data);
      console.log("data :>> ", data);

      setTeamImage(data.teamName);

      setLoading(false);
    } catch (err) {
      console.log("err :>> ", err);
    }
  };

  const setTeamImage = (teamName) => {
    switch (teamName) {
      case "Instinct":
        setImage(Yellow);
        break;
      case "Mystic":
        setImage(Blue);
        break;
      case "Valor":
        setImage(Red);
        break;

      default:
        setImage(Unown);
        break;
    }
  };

  const handleClickEdit = () => {
    // const hasError = this.validateForm();
  };

  // const validateForm = () => {
  //   const error = false;

  //   switch (key) {
  //     case value:
  //       break;

  //     default:
  //       break;
  //   }
  // };

  const handleClickOpenEditDialog = () => {
    setOpenEditDialog(true);
  };

  const handleClose = () => {
    setOpenEditDialog(false);
  };

  /**
   * Small components
   */

  const SkeletonContent = (
    <Box display="flex" alignItems="center">
      <Box width="100%">
        <Typography variant="h1">
          <Skeleton animation="wave" width="50%" />
        </Typography>
      </Box>
      <Box width="auto">
        <Skeleton animation="wave" variant="circle" width={40} height={40} />
      </Box>
    </Box>
  );

  const EditDialog = user && (
    <Dialog
      open={openEditDialog}
      TransitionComponent={Zoom}
      // onClose={handleClose}
    >
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogContent>
        <TextField
          label="Username"
          error={formErrors.username.error}
          helperText={formErrors.username.message}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleClickEdit} color="primary" variant="outlined">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <div>
      <>{EditDialog}</>
      <Card>
        <CardContent>
          {!loading ? (
            <CardMedia component="img" alt="Team" height="300" image={image} />
          ) : (
            <Skeleton animation="wave" variant="rect" height={300} />
          )}

          {!loading ? (
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="space-between"
              spacing={3}
            >
              <Grid item xl="auto">
                <h1>
                  <Badge
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    badgeContent={`Level: ${user.level}`}
                    color="primary"
                  >
                    {user.username}
                  </Badge>
                </h1>
              </Grid>
              <Grid item xl="auto">
                <Tooltip title="Edit profile">
                  <IconButton onClick={handleClickOpenEditDialog}>
                    <EditTwoTone />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          ) : (
            <>{SkeletonContent}</>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
