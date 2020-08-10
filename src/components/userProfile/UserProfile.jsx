import React, { Component } from "react";
import API from "../../utils/api";
import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  IconButton,
  Tooltip,
} from "@material-ui/core";
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
    console.log("CDM");
    try {
      const { data } = await API.get("/users/profile");
      this.setState({ userData: data });
      console.log("data", data);
      Object.keys(this.state.userData).map((d) => {
        console.log("d", d);
        console.log("this.state.userData[d] :>> ", this.state.userData[d]);
      });
      if (data.teamName === "instinct") this.setState({ image: Yellow });
      this.setState({ loading: false });
    } catch (err) {
      console.log("err :>> ", err);
    }
  }

  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <CardMedia
              component="img"
              alt="Team"
              height="300"
              image={this.state.image}
            />
            {!this.state.loading && (
              <div>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="space-between"
                  spacing={3}
                >
                  <Grid item xl="auto">
                    <h1>{this.state.userData.username}</h1>
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
                <p>Level: {this.state.userData.level}</p>
              </div>
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
