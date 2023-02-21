import React, { useState } from 'react'
import TranslationOutput from '../translations/TranslationOutput'

function ProfileTranslationHistoryItem({translation}) {
    const [show, setShow] = useState(false)
    const handleShowTranslation = () => {show ? setShow(false) : setShow(true) }

  return (
    <li className='li-element'>
      { translation}
      <button className="li-button" onClick={handleShowTranslation}>
        {show ? "Hide Translation" : "Show translation"}
      </button>
      {show && <TranslationOutput translationInput={translation} height="25px" width="25px"/>}
     </li>
  )
}

export default ProfileTranslationHistoryItem