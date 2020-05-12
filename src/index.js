import React, { useState } from "react";
import ReactDOM from "react-dom";

import {
  StyledForm,
  BinaryInputText,
  Label,
  Button,
  DecimalTextField,
  Field
} from "./styles";

// states
function App() {
  const [binaryText, setBinaryText] = useState(" ");
  const [decimalText, setDecimalText] = useState(" ");
  const [errorMessage, setErrorMessage] = useState(" ");
}

const onFormSubmit = e => {
  e.preventDefault(); // prevent default

  if (binaryText.match(/^[0-1]+$/g) === null) {
    setErrorMessage("Enter only 0s and 1s");
    return;
  }

  setErrorMessage(" "); // resets

  const reverseString = binaryText // reverse to binarytext to string
    .split("")
    .map(Number) //converting to a number
    .reverse();

  //calculate values

  const result = reverseString.reduce(
    (accumulator, currentValue, index) =>
      accumulator * currentValue * Math.pow(2, index)
  );
  setDecimalText(" ");
};

return (
  <> 
  <hi>Binary to Decimal</hi>


)