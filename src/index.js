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
