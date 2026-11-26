import React from "react";
// import EvalEngine from "../../helpers/evalengine";
import styles from "./Functions.module.css";

function Functions({ input, setInput }) {
  function rpm(array) {
    const precedence = {
      "-": 1,
      "+": 1,
      "*": 2,
      "/": 2,
    };

    const holdingStack = [];
    const output = [];

    for (let k in array) {
      if (array.length !== 0) {
        //check for (
        if (array[k] === "(") {
          holdingStack.push(array[k]);
        }
        //check for )
        else if (array[k] === ")" && holdingStack.length !== 0) {
          //while because it needs to loop till it finds (
          while (holdingStack[holdingStack.length - 1] !== "(") {
            output.push(holdingStack.pop());
          }
          holdingStack.pop();
        } else if (
          array[k] === "+" ||
          array[k] === "-" ||
          array[k] === "*" ||
          array[k] === "/"
        ) {
          while (
            holdingStack.length !== 0 &&
            holdingStack[holdingStack.length - 1] !== "(" &&
            precedence[holdingStack[holdingStack.length - 1]] >=
              precedence[array[k]]
          ) {
            output.push(holdingStack.pop()); //pop the last and push it
          }
          holdingStack.push(array[k]);
        } else {
          output.push(array[k]);
        }
      } else {
        console.log("Expression Empty");
      }
    }
    while (holdingStack.length !== 0) {
      output.push(holdingStack.pop());
    }

    // evaluation
    let estack = [];

    for (let b = 0; b < output.length; b++) {
      if (
        output[b] === "+" ||
        output[b] === "-" ||
        output[b] === "*" ||
        output[b] === "/"
      ) {
        if (estack.length >= 2) {
          //used to check if elements are there
          let op1 = estack.pop();
          let op2 = estack.pop();
          if (output[b] === "+") {
            estack.push(op1 + op2);
          } else if (output[b] === "-") {
            estack.push(op2 - op1);
          } else if (output[b] === "*") {
            estack.push(op1 * op2);
          } else if (output[b] === "/") {
            estack.push(op2 / op1);
          } else {
            console.log("Invalid operator");
          }
        }
      } else {
        estack.push(Number(output[b]));
      }
    }
    console.log("estack", estack);
    setInput(estack);
  }

  const operators = ["+", "-", "*", "/", "(", ")"];
  return (
    <div>
      {operators.map((n) => (
        <div key={n}>
          <button
            onClick={() => {
              setInput((prev) => [...prev, n]);
            }}
            className={styles.numberButtons}
          >
            {n}
          </button>
        </div>
      ))}
      <button
        onClick={() => {
          // console.log("performing logic",translator(input,setInput));
          rpm(input);
        }}
        className={styles.numberButtons}
      >
        =
      </button>
    </div>
  );
}

export default Functions;
