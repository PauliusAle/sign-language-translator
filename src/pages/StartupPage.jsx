import React from "react";
import Header from "../components/Header";
import LoginForm from "../components/login/LoginForm";
//Page for Login. Contains header and LoginForm
function StartupPage() {
  return (
    <div className="page-container">
      <Header />

      <div className="login-text-field">
        <LoginForm />
      </div>
    </div>
  );
}

export default StartupPage;
