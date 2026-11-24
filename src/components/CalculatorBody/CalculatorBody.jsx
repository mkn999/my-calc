import React, { useEffect } from "react";
import { useState } from "react";
import CalculatorButtons from "../CalculatorButtons/CalculatorButtons";
import styles from "./CalculatorBody.module.css";
import CalculatorDisplay from "../CalculatorDisplay/CalculatorDisplay";
import CalculatorNumbers from "../CalculatorNumbers/CalculatorNumbers";
const CalculatorBody = () => {
  const [number, setNumber] = useState(0);
  const [newNumber, setNewNumber] = useState(0);
  const [preNumber, setPrevNumber] = useState(0);
  const [operator, setOperator] = useState(null);
  // useEffect(() => {
  //   console.log("number", number);
  //   console.log("operator ", operator);
  //   console.log("old number", preNumber);
  //   console.log("new number ", newNumber);
  // }, [operator]);
  return (
    <div className={styles.CalculatorBody}>
      <CalculatorDisplay inputVal={number} inputOperator={operator} />
      <CalculatorButtons
        number={setNumber}
        inputVal={number}
        setoperator={setOperator}
        // newNumber={newNumber}
        setNumber={setNewNumber}
        oldNumber={preNumber}
        setoldNumber={setPrevNumber}
        operator={operator}
      />
    </div>
  );
};

export default CalculatorBody;
