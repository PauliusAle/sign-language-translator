import React, { useState } from 'react'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm';
function StartupPage() {
  return (
    <div className='StartupPage'>
        <Header imageSrc="" showImage={false} />
        <LoginForm/>
    </div>
  )
}

export default StartupPage