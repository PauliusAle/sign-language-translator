import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

//Higher order component for authorization,
//if user not null, returns the component wrapped with auth
//else navigates to login page.
const withAuth = (Component) => (props) => {
  const { user } = useUser();
  if (user !== null) {
    return <Component {...props} />;
  }
  return <Navigate to="/" />;
};

export default withAuth;
