import React from "react";
import { useUser } from "../context/UserContext";
import headerImage from "../images/Logo.png";
import helloImage from "../images/Logo-Hello.png";
import { Link } from "react-router-dom";

//Header component for all pages for consistent design and reusability.
//Made to show Link and Username when user is logged in.
function Header({link, linkText }) {
  const { user } = useUser();
  return (
    <div className="header">
      <div className="header-element" id="header-logo">
        <img
          src={user ? headerImage : helloImage}
          alt="Not available."
          height="70"
          width="70"
        ></img>
      </div>
      <div className="header-element">
        <h1 id="header-title">Lost in translation</h1>
      </div>
      <div className="header-element" id="profile-link">
        {user && (
          <h1>
            <Link className="link" to={link}>
              {linkText + "➤"}
            </Link>{" "}
            {user.username}{" "}
          </h1>
        )}
      </div>
    </div>
  );
}

export default Header;
