import React, { useState } from 'react'
import Header from '../components/Header'
import Input from '../components/Input'
import { Outlet,Link } from "react-router-dom";
function StartupPage() {
  const [count,setCount] = useState(0);
  const [userName,setUserName] = useState("Paul");

  const doStuff = () => {
    setCount(count+1);
    console.log(count);
  }

  return (
    <div className='StartupPage'>
        <Header userName={userName} imageSrc="" showImage={false} />
        <Input 
          id="loginInput" 
          placeholder="What's your name?" 
          showUserName={false}
          onChange={(e)=> setUserName(e.target.value)}
          onButtonClick={() => console.log(userName)}
        />
    </div>
  )
}

export default StartupPage