import React, { useState } from "react";
import Header from "../components/Header";
import TranslationForm from "../components/translations/TranslationForm";
import TranslationOutput from "../components/translations/TranslationOutput";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";

function TranslationPage() {
  const { user, setUser } = useUser();
  const [translationInput, setTranslationInput] = useState("");

  return (
    <div id="translation-page">
      <Header username={user.username} link="/profile" linkText="Profile" />
      <TranslationForm
        user={user}
        setUser={setUser}
        setTranslationInput={setTranslationInput}
      />
      <TranslationOutput
        id="translation-output"
        translationInput={translationInput}
        height="60px"
        width="60px"
      />
    </div>
  );
}

export default withAuth(TranslationPage);
