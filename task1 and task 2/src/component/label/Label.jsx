import React, { useContext } from "react";
import { globalContext } from "../../App";

import './label.css'

const Label = () => {
  let { count, sumInApp, setsumInApp } = useContext(globalContext);

  return (
    <>
      <div className="label__container">
        <div className="label">Counter = {count}</div>
      </div>
      <input placeholder="enter numbers to find sum" className="input__field" onKeyUp={(e) => {
          if (Number(e.key)) {
            setsumInApp(sumInApp + Number(e.key));
          } else {
            e.currentTarget.value = "";
            alert("Enter Proper Number");
          }
      }}/>
    </>
  );
};

export default Label;
