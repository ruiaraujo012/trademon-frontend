import React, { Component } from "react";
import API from "../../utils/api";
import {
  Card,
  CardMedia,
  CardContent,
  Badge,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  Box,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import { EditTwoTone } from "@material-ui/icons";
import Yellow from "../../images/yellow.jpg";
import Blue from "../../images/blue.jpg";
import Red from "../../images/red.jpg";
import Unown from "../../images/unown.jpg";

export class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      image: Unown,
      userData: null,
    };
  }

  async componentDidMount() {
    try {
      const { data } = await API.get("/users/profile");
      this.setState({ userData: data });
      console.log("data :>> ", data);

      this.setTeamImage(data.teamName);

      this.setState({ loading: false });
    } catch (err) {
      console.log("err :>> ", err);
    }
  }

  setTeamImage = (teamName) => {
    switch (teamName) {
      case "Instinct":
        this.setState({ image: Yellow });
        break;
      case "Mystic":
        this.setState({ image: Blue });
        break;
      case "Valor":
        this.setState({ image: Red });
        break;

      default:
        this.setState({ image: Unown });
        break;
    }
  };

  render() {
    let loading = this.state.loading;

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

    return (
      <div>
        <Card>
          <CardContent>
            {!loading ? (
              <CardMedia
                component="img"
                alt="Team"
                height="300"
                image={this.state.image}
              />
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
                      badgeContent={`Level: ${this.state.userData.level}`}
                      color="primary"
                    >
                      {this.state.userData.username}
                    </Badge>
                  </h1>
                </Grid>
                <Grid item xl="auto">
                  <Tooltip title="Edit profile">
                    <IconButton
                      onClick={() => {
                        alert("Edit Profile");
                      }}
                    >
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
        {/* {this.state.userData &&
          Object.keys(this.state.userData).map((d) => {
            return <p>{this.state.userData[d]}</p>;
          })} */}
      </div>
    );
  }
}

export default UserProfile;
