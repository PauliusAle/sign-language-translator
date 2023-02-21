import React, { useState } from 'react'
import Header from '../components/Header';
import TranslationForm from '../components/translations/TranslationForm';
import TranslationOutput from '../components/translations/TranslationOutput';
import { useUser } from '../context/UserContext'
import { Link } from 'react-router-dom'
import withAuth from '../hoc/withAuth'

function TranslationPage() {
  const {user, setUser} = useUser();
  const [translationInput, setTranslationInput] = useState("");
  
  return (
    <div>
      <Header username= {user.username}/>
      <TranslationForm user= {user} setUser={setUser} setTranslationInput={setTranslationInput}/>
      <div>
        <TranslationOutput translationInput={translationInput} height="50px" width="50px"/>
      </div>
      <Link to="/profile">Go to profile!</Link>
    </div>
  )
}

export default withAuth(TranslationPage) 