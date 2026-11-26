import React from "react";
import styles from "./CalculatorNumber.module.css";
function CalculatorNumbers({ inputVal, number, expression, array }) {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className={styles.numberContainer}>
      {digits.map((digi) => (
        <div key={digi} className={styles.NumberButtonContainer}>
          <button
            className={styles.numberButtons}
            onClick={() => {
              number(inputVal * 10 + digi);
              expression((prev) => [...(prev || []), inputVal]);
              // array((prev) => [...(prev || []), inputVal]);
              console.log("inputing value = ",inputVal);
              
            }}
          >
            {digi}
          </button>
        </div>
      ))}
    </div>
  );
}

export default CalculatorNumbers;
