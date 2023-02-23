import React from "react";
import UserProvider from "./UserContext";

//Function that lets all components passed as children use the user state.
function AppContext({ children }) {
  return <UserProvider>{children}</UserProvider>;
}

export default AppContext;
