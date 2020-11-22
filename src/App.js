import React from "react";
import { nature } from "./create-component";
import "./styles.css";

const DivTag = nature("div");

export default function App() {
  return (
    <DivTag className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </DivTag>
  );
}
