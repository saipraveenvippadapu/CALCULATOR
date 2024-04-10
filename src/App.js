import React, { useSate, useState } from "react";
import "./App.css";
import Keypad from "./keypad";
function App() {
  let [input, updateInput] = useState(" ");
  function HandleClick(value) {
    updateInput(input + value);
  }
  function Evaluate() {
    let outPut = eval(input);
    updateInput(outPut);
  }
  function Clear() {
    updateInput("");
  }
  return (
    <div className="container">
      <div className="calculator">
        <input type="text" className="display" value={input} />
        <Keypad
          onButton={HandleClick}
          Answer={Evaluate}
          ClrScr={Clear}
        ></Keypad>
      </div>
    </div>
  );
}

export default App;
