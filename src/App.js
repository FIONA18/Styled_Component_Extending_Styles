import "./styles.css";
import React, { useState } from "react";
import { PrimaryButton } from "./Components/PrimaryButton";
import { SecondaryButton } from "./Components/SecondaryButton";

export default function App() {
  var [btnName, getBtnName] = useState("");
  const OnButtonClick = (event) => {
    getBtnName(event.target.textContent);
  };
  return (
    <div className="App">
      <h1>Hello Fiona</h1>
      <h2>Start editing to see some magic happen!</h2>
      <PrimaryButton onClick={OnButtonClick}>Primary Button</PrimaryButton>
      <SecondaryButton onClick={OnButtonClick}>
        Secondary Button
      </SecondaryButton>
      {btnName.length > 0 && <p>{btnName} Clicked</p>}
    </div>
  );
}
