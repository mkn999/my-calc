import React from "react";
import Functions from "./Functions/Functions";
import Numbers from "./Numbers/Numbers";
import styles from './Buttons.module.css';

function Buttons({ input, setInput }) {
  return (
    // <div>button 1</div>
    <div>
      <Numbers input={input} setInput={setInput} />
      <Functions input={input} setInput={setInput} />
    </div>
  );
}

export default Buttons;
