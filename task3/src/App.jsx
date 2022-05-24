import React from "react";
import Collapsible from "react-collapsible";

import "./index.css";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="app__container">
          <div className="list">
            <Collapsible className="collapsible__heading" trigger="Start here">
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
            </Collapsible>
          </div>
          <div className="list">
            <Collapsible className="collapsible__heading" trigger="Start here">
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
            </Collapsible>
          </div>
          <div className="list">
            <Collapsible className="collapsible__heading" trigger="Start here">
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
            </Collapsible>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
