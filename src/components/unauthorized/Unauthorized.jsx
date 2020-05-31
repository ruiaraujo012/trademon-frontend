import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import PageNotFound from "../../images/page404.png";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        {/* <img src={PageNotFound} className="center-image" alt="Not found" /> */}
        <p style={{ textAlign: "center" }}>
          You don't have permission to access this page.
          {/* <Button variant="outlined" color="primary">
            <Link to="/" className="custom-link">
              Go to Home
            </Link>
          </Button> */}
        </p>
      </div>
    );
  }
}
export default NotFoundPage;
