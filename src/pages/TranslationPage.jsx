import React from 'react'
import { storageRead } from '../utils/storage'

function TranslationPage() {
  
  return (
    <div>TranslationPage for {storageRead('translation-user').username}</div>
  )
}

export default TranslationPage