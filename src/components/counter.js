import React from "react";
import useCounter from "../hooks/useCounter";

function Counter() {
  const { count, decrement, increment } = useCounter();
  return (
    <div
      style={{
        height: "100vh",
        background: "lightblue",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ alignSelf: "center" }}>
        <h1>React Context (Counter)</h1>
        Using the following:
        <p style={{ textDecoration: "underline" }}>
          <a
            href="https://reactjs.org/docs/context.html#reactcreatecontext"
            target="_blank"
          >
            <code>createContext</code>
          </a>
        </p>
        <p style={{ textDecoration: "underline" }}>
          <a
            href="https://reactjs.org/docs/hooks-reference.html#usecontext"
            target="_blank"
          >
            <code>useContext</code>
          </a>
        </p>
        <button
          style={{ padding: "20px", fontWeight: "bold" }}
          onClick={decrement}
        >
          -
        </button>
        <span style={{ margin: "0 10px" }}> {count} </span>
        <button
          style={{ padding: "20px", fontWeight: "bold" }}
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
