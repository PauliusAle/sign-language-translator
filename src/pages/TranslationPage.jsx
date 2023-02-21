import React, { useState } from 'react'
import Header from '../components/Header';
import TranslationForm from '../components/translations/TranslationForm';
import TranslationOutput from '../components/translations/TranslationOutput';
import { useUser } from '../context/UserContext'
import withAuth from '../hoc/withAuth'


function TranslationPage() {
  const {user, setUser} = useUser();
  const [translationInput, setTranslationInput] = useState("");
  
  return (
    <div className = 'page-container'>
      <Header username= {user.username} link="/profile" linkText="Profile"/>
      <TranslationForm user= {user} setUser={setUser} setTranslationInput={setTranslationInput}/>
      <div>
        <TranslationOutput translationInput={translationInput} height="60px" width="60px"/>
      </div>
    </div>
  )
}

export default withAuth(TranslationPage) 