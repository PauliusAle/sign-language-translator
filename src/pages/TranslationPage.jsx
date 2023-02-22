import React, { useState } from "react";
import Header from "../components/Header";
import TranslationForm from "../components/translations/TranslationForm";
import TranslationOutput from "../components/translations/TranslationOutput";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";

//Page for Translations - contains header, translation form(input), and translation output.
function TranslationPage() {
  //Creating user object here and sending it as props - Design choice for learning purposes.
  const { user, setUser } = useUser();
  //Translation input that is set in the TranslationForm and sent for translation and display to TranslationOutput.
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
        outputId="translation-output"
        translationInput={translationInput}
        height="60px"
        width="60px"
      />
    </div>
  );
}

export default withAuth(TranslationPage);
