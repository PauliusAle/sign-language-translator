import React from "react";
import ProfileActions from "../components/profile/ProfileActions";
import Header from "../components/Header";
import ProfileTranslationHistory from "../components/profile/ProfileTranslationHistory";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
//Page for profile, contains header, actions (buttons) and translation history.
function ProfilePage() {
  //Creating user object here and sending it as props - Design choice for learning purposes.
  const { user, setUser } = useUser();

  return (
    <div className="page-container">
      <Header
        username={user.username}
        link="/translation"
        linkText="Translate"
      />
      <div>
        <ProfileActions user={user} setUser={setUser} />
      </div>
        <ProfileTranslationHistory translations={user.translations} />
    </div>
  );
}

export default withAuth(ProfilePage);
