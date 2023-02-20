import React from 'react'
import Header from '../components/Header'
import LoginForm from '../components/login/LoginForm';
function StartupPage() {
  //onSuccess?
  return (
    <div className='StartupPage'>
        <Header/>
        <h2>Login</h2>
        <LoginForm/>
    </div>
  )
}

export default StartupPage