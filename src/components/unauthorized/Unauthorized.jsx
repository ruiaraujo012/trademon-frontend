import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import UnauthorizedImage from "../../images/401image.jpg";

class Unauthorized extends React.Component {
  render() {
    return (
      <div>
        <img
          src={UnauthorizedImage}
          className="center-image"
          alt="Unauthorized"
          width="100%"
          style={{ borderRadius: "20px" }}
        />

        <p style={{ textAlign: "center" }}>
          <Button variant="outlined" color="primary">
            <Link to="/" className="custom-link">
              Go to Home
            </Link>
          </Button>
        </p>
      </div>
    );
  }
}
export default Unauthorized;
