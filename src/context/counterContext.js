import React, { createContext } from "react";

export const CounterContext = createContext();

const CounterContextProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
