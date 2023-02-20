import React, { useState } from 'react'
import Header from '../components/Header';
import TranslationForm from '../components/translations/TranslationForm';
import TranslationOutput from '../components/translations/TranslationOutput';
import { useUser } from '../context/UserContext'
import { Link } from 'react-router-dom'
import withAuth from '../hoc/withAuth'

function TranslationPage() {
  const {user, setUser} = useUser();
  const [input, setInput] = useState("");
  
  return (
    <div>
      <Header username= {user.username}/>
      <TranslationForm user= {user} setUser={setUser} setInput={setInput}/>
      <TranslationOutput translationInput={input}/>
      <Link to="/profile">Go to profile!</Link>
    </div>
  )
}

export default withAuth(TranslationPage) 