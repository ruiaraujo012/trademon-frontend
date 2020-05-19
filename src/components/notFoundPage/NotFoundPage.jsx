import React from "react";
import { Link } from "react-router-dom";
// import PageNotFound from "../../images/404.png";
import PageNotFound from "../../images/page404.png";
import "./NotFoundPage.css";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <img src={PageNotFound} className="centerImage" />
        <p style={{ textAlign: "center" }}>
          <Link to="/">Go to Home </Link>
        </p>
      </div>
    );
  }
}
export default NotFoundPage;
