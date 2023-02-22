import React, { useState, useEffect } from "react";
//Function for generating and displaying translation output of given input.
//Height, width and outputId sent as props for styling. Could be done with #outputId in css file
//but in this case, used for learning purposes.
function TranslationOutput({ translationInput, height, width, outputId }) {
  const [outputValue, setOutputValue] = useState("");

  //Rerenders component every time translation input has changed.
  useEffect(() => {
    makeOutput(translationInput);
  }, [translationInput]);

  //Function to create output
  const makeOutput = (input) => {
    setOutputValue( // sets output
      input//Takes input parameter
        .split("")//Splits it to array of chars.
        .filter((letter) => letter.match("([A-Za-z' '])"))//filters using regex
        .map((letter, index) =>//maps every letter that passed filter.
          letter === " " ? ( //Design choice - if space is used, create gap between hand signs.
            "\u00A0\u00A0\u00A0\u00A0" //4 small gaps
          ) : ( //if letter is not space
            <img //return image of hand sign.
              className="hand-sign-logo"
              src={require("../../images/individual_signs/" +letter.toLowerCase() + ".png")}//path to the image.
              key={index} //unique key.
              alt="Not available!" //if image not found
              height={height} //custom height
              width={width} //custom width
            ></img>
          )
        )
    );
  };

  return <p id={outputId}>{outputValue}</p>; // returns completed translation.
}
export default TranslationOutput;
