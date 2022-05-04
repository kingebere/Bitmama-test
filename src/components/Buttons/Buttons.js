import React from "react";
import "./Button.css";
import item from "./data";
function Buttons() {
  return (
    <div className="button button-33">
      <div className="button__container">
        {item &&
          item.map(cde => {
            return (
              <div key={cde.id}>
                <button type="button" className="btn">
                  <span>{cde.name}</span>
                  <span className={`${cde.icon}`}></span>
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Buttons;
