import React from "react";
import { CounterContext } from "../context/counterContext";

function useCounter() {
  const context = React.useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within CounterContextProvider!");
  }
  return context;
}
export default useCounter;
