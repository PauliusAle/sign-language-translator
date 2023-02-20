import React, {useEffect} from 'react'
import ProfileTranslationHistoryItem from './ProfileTranslationHistoryItem'

function ProfileTranslationHistory({translations}) {

   const translationList = translations ? translations.slice(0,10)
    .map((item,index) => <ProfileTranslationHistoryItem key={index} translation={item}/>) : null;
 
  return (
    <section>
        <h5> Your 10 latest translations:</h5>
        <ul>
            {translationList}
        </ul>
    </section>
  )
}

export default ProfileTranslationHistory