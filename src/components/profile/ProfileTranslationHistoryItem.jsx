import React, { useState } from "react";
import TranslationOutput from "../translations/TranslationOutput";

//Component for displaying 1 translation history passed as prop. 
function ProfileTranslationHistoryItem({ translation }) {

  const [show, setShow] = useState(false); //used for show/hide translation
  const handleShowTranslation = () => {  //used for show/hide translation
    show ? setShow(false) : setShow(true);
  };

  //Creates LI Element (will be used in UL)
  return (
    <li className="li-element">
      {translation} {/* Translation that is passed as prop */}
      <button //Rest is extra for better UX. Button that allows showing/hiding translation of each translation in the UL.
        className="li-button"
        onClick={handleShowTranslation}
        type="button"
      >
        {show ? "Hide translation" : "Show translation"}
      </button>
      {show && ( 
        <TranslationOutput
          translationInput={translation}
          height="24px"
          width="24px"
        />
      )}
    </li>
  );
}

export default ProfileTranslationHistoryItem;
