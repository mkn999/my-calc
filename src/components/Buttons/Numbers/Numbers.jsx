import React from "react";
import styles from "./Numbers.module.css";

function Numbers({ input, setInput }) {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className={styles.NumberButtonContainer}>
      {num.map((n) => (
        <div key={n}>
          <button
            className={styles.numberButtons}
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
