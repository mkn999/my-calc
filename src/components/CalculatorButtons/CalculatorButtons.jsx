import React from "react";
import styles from "./CalculatorButtons.module.css";
import CalculatorNumbers from "../CalculatorNumbers/CalculatorNumbers";
import CalculatorFunctions from "../CalculatorFunctions/CalculatorFunctions";
function CalculatorButtons({
  number,
  inputVal,
  setoperator,
  setoldNumber,
  oldNumber,
  operator,
  expression,
  array,
}) {
  console.log("old", oldNumber, "current", inputVal);

  return (
    <div>
      <CalculatorNumbers
        number={number}
        inputVal={inputVal}
        expression={expression}
        array={array}
      />
      <CalculatorFunctions
        setoperator={setoperator}
        setoldNumber={setoldNumber}
        inputVal={inputVal}
        number={number}
        oldNumber={oldNumber}
        operator={operator}
        expression={expression}
        array={array}
      />
    </div>
  );
}

export default CalculatorButtons;
