import React from "react";
import Header from "../components/Header";
import LoginForm from "../components/login/LoginForm";
//Page for Login. Contains header and LoginForm
function StartupPage() {
  return (
    <div className="page-container">
      <Header />
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
}

export default StartupPage;
