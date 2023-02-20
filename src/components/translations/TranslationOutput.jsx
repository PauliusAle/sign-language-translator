import React, {useState, useEffect} from 'react'

function TranslationOutput({translationInput}) {
  const [outputValue, setOutputValue] = useState("");

  useEffect(() => {
    makeOutput(translationInput)
  },[translationInput]);

  const makeOutput = (input) => {
    setOutputValue(input.split("").filter(letter=> letter.match("([A-Za-z' '])"))
    .map((letter,index ) => letter === ' ' ? '__' :
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