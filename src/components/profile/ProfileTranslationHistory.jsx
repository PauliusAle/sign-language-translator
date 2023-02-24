import React from "react";
import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem";
//Component for showing translation history.
function ProfileTranslationHistory({ translations }) {
  //If any translations return max 10 translations, else null - used to avoid Errors.
  const translationList = translations
    ? translations
        .slice(0, 10)
        .map((item, index) => ( //map each item(string from API) in the list to LI element (ProfileTranslationHistoryItem)
          <ProfileTranslationHistoryItem key={index} translation={item} />
        ))
    : null;
  return (
    <div>
      {translationList.length === 0 ? ( //If no translations
        <h3> No translation history. </h3>
      ) : (
        <h3> Your {translationList.length} latest translations ( newest to oldest ) : </h3> //If any translations
      )}
      <ul className="ul-element">{translationList}</ul>{/*show translation list*/}
    </div>
  );
}

export default ProfileTranslationHistory;
