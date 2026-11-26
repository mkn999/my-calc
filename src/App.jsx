import { useEffect, useState } from "react";
import CalculatorBody from "./components/CalculatorBody/CalculatorBody";
import Body from "./components/Body/Body";
import "./App.css";
function App() {
  return (
    <>
      {/* <h1>hello world</h1> */}
      <div className="AppParent"></div>
      {/* <CalculatorBody /> */}
      <Body />
    </>
  );
}

export default App;
