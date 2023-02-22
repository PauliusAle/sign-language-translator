import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="page-container">
      <h1>PageNotFound</h1>
      <Link to="/">Go to Login Page</Link>
    </div>
  );
}

export default PageNotFound;
