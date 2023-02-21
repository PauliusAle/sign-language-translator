import React from 'react'
import ProfileTranslationHistoryItem from './ProfileTranslationHistoryItem'

function ProfileTranslationHistory({translations}) {

   const translationList = translations ? translations.slice(0,10)
    .map((item,index) => <ProfileTranslationHistoryItem key={index} translation={item}/>) : null;
 
  return (
    <section>
        {translationList.length === 0 
            ? <h5> No translation history. </h5> 
            : <h5> Your {translationList.length} latest translations: </h5>
        }
        <ul className='ul-element'>
            {translationList}
        </ul>
    </section>
  )
}

export default ProfileTranslationHistory