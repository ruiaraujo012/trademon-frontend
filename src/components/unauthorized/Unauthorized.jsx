import React from "react";
import { Button, Grid } from "@material-ui/core";
import UnauthorizedImage from "images/401image.jpg";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  mainContent: {
    height: "90vh",
  },
  imageFormat: {
    borderRadius: "20px",
  },
});

const Unauthorized = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.mainContent}
    >
      <Grid item xs={1} />

      <Grid item container xs="auto" justify="center" spacing={2}>
        <Grid item xs={12}>
          <img
            src={UnauthorizedImage}
            alt="Not found"
            width="100%"
            className={classes.imageFormat}
          />
        </Grid>
        <Grid item container direction="column" xs={12} alignItems="center">
          <Grid item xs={3} />
          <Grid item xs="auto">
            <Button variant="outlined" color="primary" href="/signin">
              Sign in
            </Button>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </Grid>

      <Grid item xs={1} />
    </Grid>
  );
};

export default Unauthorized;
