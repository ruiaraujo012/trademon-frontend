import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import UnauthorizedImage from "../../images/401image.jpg";
import "../generic/generic.css";

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
