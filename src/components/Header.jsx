import React from 'react'

function Header (props) {
  return (
    <div className="Header">
        <h1>Lost in translation</h1>
        {props.showImage && <img src={props.imageSrc} alt="Not available." ></img>}
        {props.showUserName && <p>{props.userName}</p>}
    </div>
  )
}

export default Header