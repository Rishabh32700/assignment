import React, { memo, useContext, useState } from "react";
import { globalContext } from "../../App";

import './button.css'

const Button = ({ todo }) => {
  let { count, setCount, sumInApp } = useContext(globalContext);
  let [currSumData, setCurrSumData] = useState(0);

  return (
    <>
      {todo === "sumAll" ? 
      
      (
        <>
          <button className="sum__button" onClick={(e) => {setCurrSumData(sumInApp);}}>
                Sum{" "}
          </button>
          <h2 className="sum__value">Sum  = {currSumData}</h2>
        </>
      ) 
      
      : 
      
      (
        <>
          <div className="button__inc__dec__container">
            <button className="button__inc__dec" onClick={() => {
                if (todo === "Add") {
                  setCount(count + 1);
                } else {
                  setCount(count - 1);
                }
              }}>
              {todo}
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default memo(Button);
