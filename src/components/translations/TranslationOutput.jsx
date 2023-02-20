import React, {useState, useEffect} from 'react'

function TranslationOutput({input}) {
  const [outputValue, setOutputValue] = useState("");

  useEffect(() => {
    makeOutput()
  },[input]);

  const makeOutput = () => {
    setOutputValue(input.split("").filter(l=>l.match("([A-Za-z])"))
    .map((letter,index ) =>
    <img src={require('../../images/individual_signs/' + letter.toLowerCase() + '.png')} 
    key={index}
    alt="Not available!"
    height="60px" 
    width="60px"></img>));
  }

  return (
    <div>
        <p>{outputValue}</p>
    </div>
  )
}

export default TranslationOutput