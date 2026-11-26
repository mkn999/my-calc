import React, { useEffect, useState } from "react";
import Buttons from "../Buttons/Buttons";
import Display from "../Display/Display";
// import { translator } from "../helpers/translator";

function Body() {
  const [input, setInput] = useState([]);

  useEffect(() => {
    console.log(input);
  }, [input]);
  return (
    <div>
      <Buttons input={input} setInput={setInput} />
      <Display input={input} setInput={setInput} />
      <h1>hello</h1>
    </div>
  );
}

export default Body;
