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

export class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      userData: null,
    };
  }

  async componentDidMount() {
    const { data } = await API.get("/users/profile");
    this.setState({ userData: data });
    console.log("data", data);
    Object.keys(this.state.userData).map((d) => {
      console.log("d", d);
      console.log("this.state.userData[d] :>> ", this.state.userData[d]);
    });
    this.setState({ loading: false });
  }

  render() {
    return (
      <div>
        <h1>User Profile</h1>
        <Card>
          <CardContent>
            <CardMedia
              component="img"
              alt="Team"
              height="200"
              image="/images/yellow.jpg"
            />
            {!this.state.loading && (
              <div>
                <Grid container direction="row" alignItems="center" spacing={3}>
                  <Grid item xs>
                    <h1>{this.state.userData.username}</h1>
                  </Grid>
                  <Grid item xs={1}>
                    <Tooltip title="Edit profile">
                      <IconButton>
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
