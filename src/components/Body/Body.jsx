import React, { useEffect, useState } from "react";
import Buttons from "../Buttons/Buttons";
import Display from "../Display/Display";
// import { translator } from "../helpers/translator";
import styles from "./Body.module.css";
function Body() {
  const [input, setInput] = useState([]);

  useEffect(() => {
    console.log(input);
  }, [input]);
  return (
    <div className={styles.CalculatorBody}>
      <Display input={input} setInput={setInput} />
      <Buttons input={input} setInput={setInput} />
    </div>
  );
}

export default Body;
