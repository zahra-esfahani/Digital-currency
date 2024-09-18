import { useState } from "react";
import styles from "./Pagination.module.css";
function Pagination({ counter, setcounter }) {
  const perviousHandler = () => {
    if (counter <= 1) return;
    setcounter((counter) => counter - 1);
  };
  const nextHandler = () => {
    if (counter >= 10) return;
    setcounter((counter) => counter + 1);
  };
  return (
    <>
      <div className={styles.container}>
        <button
          onClick={perviousHandler}
          className={counter === 1 ? styles.buttonPrev : null}
        >
          Pervious
        </button>
        <p style={{ backgroundColor: counter === 1 ? "#3874ff" : "inherit" }}>
          1
        </p>
        <p style={{ backgroundColor: counter === 2 ? "#3874ff" : "inherit" }}>
          2
        </p>
        {counter > 2 && counter < 9 ? (
          <>
            <span>...</span>
            <p style={{ backgroundColor: "#3874ff" }}>{counter}</p>
            <span>...</span>
          </>
        ) : (
          <span>...</span>
        )}
        <p style={{ backgroundColor: counter === 9 ? "#3874ff" : "inherit" }}>
          9
        </p>
        <p style={{ backgroundColor: counter === 10 ? "#3874ff" : "inherit" }}>
          10
        </p>
        <button
          onClick={nextHandler}
          className={counter === 10 ? styles.buttonPrev : null}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
