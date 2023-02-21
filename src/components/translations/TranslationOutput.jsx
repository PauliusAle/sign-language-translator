import React, {useState, useEffect} from 'react'

function TranslationOutput({translationInput, height, width}) {
  
  const [outputValue, setOutputValue] = useState("");
  useEffect(() => {
    makeOutput(translationInput)
  },[translationInput]);

  const makeOutput = (input) => {
    setOutputValue(input.split("").filter(letter=> letter.match("([A-Za-z' '])"))
    .map((letter,index ) => letter === ' ' ?  '__' :
    <img src={require('../../images/individual_signs/' + letter.toLowerCase() + '.png')} 
    key={index}
    alt="Not available!"
    height={height} 
    width={width}></img>));
  }

  return (
    <>
      {outputValue}
    </>
  )
}

export default TranslationOutput