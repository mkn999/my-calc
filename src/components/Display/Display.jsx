import React from "react";
function Display({ input, setInput }) {
  return (
    <div>
      <input type="text" value={input.join("")} disabled />
    </div>
  );
}

export default Display;
