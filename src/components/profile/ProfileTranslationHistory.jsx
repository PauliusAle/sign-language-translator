import React from "react";
import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem";

function ProfileTranslationHistory({ translations }) {
  const translationList = translations
    ? translations
        .slice(0, 10)
        .map((item, index) => (
          <ProfileTranslationHistoryItem key={index} translation={item} />
        ))
    : null;

  return (
    <section>
      {translationList.length === 0 ? (
        <h3> No translation history. </h3>
      ) : (
        <h3> Your {translationList.length} latest translations: </h3>
      )}
      <ul className="ul-element">{translationList}</ul>
    </section>
  );
}

export default ProfileTranslationHistory;
