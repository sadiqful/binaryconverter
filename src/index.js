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

function App() {
  const [binaryText, setBinaryText] = useState("");
  const [decimalText, setDecimalText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
}

const onFormSubmit = e => {
  e.preventDefault();

  if (binaryText.match(/^[0-1]+$/g) === null) {
    setErrorMessage("Enter only 0s and 1s");
    return;
  }

  setErrorMessage("");
};
