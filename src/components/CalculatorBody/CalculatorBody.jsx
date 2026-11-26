import React, { useEffect } from "react";
import { useState } from "react";
import CalculatorButtons from "../CalculatorButtons/CalculatorButtons";
import styles from "./CalculatorBody.module.css";
import CalculatorDisplay from "../CalculatorDisplay/CalculatorDisplay";
import CalculatorNumbers from "../CalculatorNumbers/CalculatorNumbers";
// import { translator } from "../helpers/translator";
// import { evalEngine } from "../helpers/evalengine";

const CalculatorBody = () => {
  const [number, setNumber] = useState(0);
  const [newNumber, setNewNumber] = useState(0);
  const [preNumber, setPrevNumber] = useState(0);
  const [operator, setOperator] = useState(null);
  const [expression, setExpression] = useState(null);
  const [array,setArray] = useState([]);
  // translator();
  // evalEngine();
  useEffect(() => {
    // console.log(expression);
    console.log("array->",array);

  }, [array]);
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
        expression={setExpression}
        array={setArray}
      />
    </div>
  );
};

export default CalculatorBody;
