import React from "react";
import styles from "./CalculatorDisplay.module.css";
function CalculatorDisplay({ inputVal,inputOperator }) {

  return (
    <div>
      <div>
        <input type="text" disabled value={inputVal} />
      </div>
    </div>
  );
}

export default CalculatorDisplay;
