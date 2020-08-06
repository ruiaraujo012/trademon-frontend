import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import NotFoundImage from "../../images/404image.jpg";
import "../generic/generic.css";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <img
          src={NotFoundImage}
          className="center-image"
          alt="Not found"
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
export default NotFoundPage;
