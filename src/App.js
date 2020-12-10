import React from "react";
import ReactDOM from "react-dom";
import CounterContextProvider from "./context/counterContext";
import Counter from "./components/counter";

// React.createContext()
// <NameContext.Provider></NameContext.Provider>
// React.useContext(NameProvider)

const App = () => {
  return (
    <CounterContextProvider>
      <Counter />
    </CounterContextProvider>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById("root"));
