import React from 'react'
import headerImage from '../images/Logo.png'

function Header ({username}) {
  return (
    <div className="header">
        <div className='header-element'>
            <img
              src={headerImage} 
              alt="Not available."  
              height="70" 
              width="70"></img>
        </div>
        <div className='header-element'>
             <h1>Lost in translation</h1>
        </div>
        <div className='header-element'>
             <h1>{username}</h1>
        </div>
    </div>
  )
}

export default Header