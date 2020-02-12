import React, { useState, useContext } from "react";
import "./App.css";
import { Input } from "./Input";

function App() {
  /**
   * State is the applications memory
   * Typically any data you fetch should be stored in state
   * and any data that should result in an update of the user interface
   *
   * useState takes initial state as input and returns an array with the state value and a state setter
   */
  const [value, setValue] = useState("");
  const [showInput, setShowInput] = useState(false);

  return (
    <AppContext.Provider value={{ value, setValue }}>
      <div className="App">
        <header className="App-header">
          <div>{value}</div>

          <button onClick={e => setShowInput(!showInput)}>
            {showInput ? "Lagre" : "Endre"}
          </button>

          {/* You can pass values, functions and other things down as props like this:  

          {showInput ? <Input value={value} setValue={setValue} /> : null}

           */}

          {/* When using context you cant access the values via useAppContext in your component */}
          {showInput ? <Input /> : null}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://bredvid.no"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sjekk ut bredvid
          </a>
        </header>
      </div>
    </AppContext.Provider>
  );
}

/**
 * Create a context to make the state values globally available
 * This is useful for larg applications,
 * when you have state data that need to be available for many widespread components
 */
const AppContext = React.createContext();
export const useAppContext = () => useContext(AppContext);

export default App;
