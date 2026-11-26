import React from "react";

function Numbers({ input, setInput }) {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div>
      {num.map((n) => (
        <div key={n}>
          <button
            onClick={() => {
              setInput((prev) => {
                const updated = [...prev];
                if (
                  updated.length === 0 ||
                  typeof updated[updated.length - 1] === "string"
                ) {
                  updated.push(n);
                } else {
                  updated[updated.length - 1] = Number(
                    String(updated[updated.length - 1]) + n,
                  );
                }
                return updated;
              });
            }}
          >
            {n}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Numbers;
