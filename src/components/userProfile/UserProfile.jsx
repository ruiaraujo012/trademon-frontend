import React, { Component } from "react";
import API from "../../utils/api";
import { Card, CardMedia, CardContent } from "@material-ui/core";

export class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { userData: null };
  }

  async componentDidMount() {
    const { data } = await API.get("/users/profile");
    this.setState({ userData: data });
    console.log("data", data);
    Object.keys(this.state.userData).map((d) => {
      console.log("d", d);
      console.log("this.state.userData[d] :>> ", this.state.userData[d]);
    });
  }

  render() {
    return (
      <div>
        <h1>User Profile</h1>
        <Card>
          <CardContent>
            <CardMedia component="img" alt="Team" height="140" image="" />
          </CardContent>
        </Card>

        {this.state.userData &&
          Object.keys(this.state.userData).map((d) => {
            return <p>{this.state.userData[d]}</p>;
          })}
      </div>
    );
  }
}

export default UserProfile;
