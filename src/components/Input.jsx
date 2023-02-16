import React from 'react'
import Button from './Button'

function Input(props) {
  return (
    <div>
      <form>
        <input 
          type='text' 
          id={props.id} 
          placeholder={props.placeholder} 
          onChange={props.onChange}/>

        <Button 
          id="loginButton" 
          type='button' 
          text="Login" 
          onClick={props.onButtonClick}/>
      </form>
        
    </div>
  )
}

export default Input