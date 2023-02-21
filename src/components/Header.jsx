import React from 'react'
import { useUser } from '../context/UserContext'
import headerImage from '../images/Logo.png'
import helloImage from '../images/Logo-Hello.png'
import { Link } from 'react-router-dom'


function Header ({username, link, linkText}) {
  const {user} = useUser();
  return (
    <div className="header">
        <div className='header-element' id='header-logo'>
            <img
              src={user ? headerImage : helloImage} 
              alt="Not available."  
              height="70" 
              width="70"></img>
        </div>
        <div className='header-element'>
             <h1>Lost in translation</h1>
        </div>
        <div className='header-element' id='profile-link'>
            {user && <h1><Link className='link' to={link}>{linkText}</Link>▶{username} </h1>} 
        </div>
    </div>
  )
}

export default Header