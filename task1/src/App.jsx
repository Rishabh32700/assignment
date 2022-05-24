import React, { useState, createContext } from "react";

import "./index.css";

import Label from "./component/label/Label";
import Button from "./component/button/Button";

export const globalContext = createContext();

const App = () => {
  const [count, setCount] = useState(0);
  let [sumInApp, setsumInApp] = useState(0);
  return (
    <>
      <globalContext.Provider value={{ setCount, count, sumInApp, setsumInApp }}>
        <div className="app">
          <div className="app__container">
            <Label />
            <div className="button__container">
              <Button todo="Add" />
              <Button todo="Sub" />
            </div>
            <Button todo="sumAll" />
          </div>
        </div>
      </globalContext.Provider>
    </>
  );
};

export default App;
