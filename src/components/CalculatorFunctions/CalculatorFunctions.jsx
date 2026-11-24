import React from "react";
import styles from "./CalculatorFunctions.module.css";

export default function CalculatorFunctions({
  setoperator,
  setoldNumber,
  inputVal,
  number,
  oldNumber,
  operator,
}) {


  return (
    <div>
      {/* ADDITION */}
      <button
        className={styles.numberButtons}
        onClick={() => {
          console.log(operator);

          if (operator === "-") {
            setoperator("+");
            setoldNumber((prev) => prev - Number(inputVal));
            number(0);
          } else {
            setoperator("+");
            setoldNumber((prev) => prev + Number(inputVal));
            number(0);
          }
        }}
      >
        +
      </button>
      {/* SUBTRACTION */}
      <button
        className={styles.numberButtons}
        onClick={() => {
          if (operator === "+") {
            setoldNumber((prev) => prev + Number(inputVal));
            number(0);
            setoperator("-");
          } else {
            setoperator("-");
            if (oldNumber === 0) {
              setoldNumber(inputVal);
            } else {
              setoldNumber((prev) => prev - Number(inputVal));
            }
            number(0);
          }
        }}
      >
        -
      </button>
      {/* <button
        className={styles.numberButtons}
        onClick={() => {
          if (operator === "+") {
            setoldNumber((prev) => prev + Number(inputVal));
            number(0);
            setoperator("*");
          } else if (operator === "-") {
            setoperator("+");
            setoldNumber((prev) => prev - Number(inputVal));
            number(0);
          } else {
            setoperator("*");
            if (oldNumber === 0) {
              setoldNumber(inputVal);
            } else {
              setoldNumber((prev) => prev * Number(inputVal));
            }
            number(0);
          }
        }}
      >
        *
      </button> */}
      {/* CLEAR SCREEN */}
      <button
        className={styles.numberButtons}
        onClick={() => {
          number(0);
          setoldNumber(0);
          setoperator(null);
        }}
      >
        Clear Result
      </button>
      {/* EQUALS */}
      <button
        className={styles.numberButtons}
        onClick={() => {
          {
            console.log(operator);
          }
          switch (operator) {
            case "+":
              number(oldNumber + inputVal);
              setoldNumber(0);
              setoperator(null);
              break;
            case "-":
              number(oldNumber - inputVal);
              setoldNumber(0);
              setoperator(null);
              break;
            case "*":
              number(oldNumber * inputVal);
              setoldNumber(0);
              setoperator(null);
              break;
            default:
              console.log("out of bounds");
          }
          // number(oldNumber + inputVal);
        }}
      >
        =
      </button>
    </div>
  );
}
