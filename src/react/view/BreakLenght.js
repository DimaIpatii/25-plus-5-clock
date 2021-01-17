import React, { useState, useEffect } from "react";

const BreakLenght = ({ breakLength, timerState, updateTimerLength }) => {
  const [breakVal, setBreackVal] = useState(breakLength);

  // ***********************************

  // Set changed Breake val from Breake status and update UI
  useEffect(() => {
    setBreackVal(breakLength);
  }, [breakLength]);

  // ***********************************

  return (
    <div className="length-container">
      <h3 id="break-label" className="length-name">
        Break Length
      </h3>
      <div id="break-length" className="length-screen">
        {breakVal}
      </div>
      <div className="button-wrapper">
        <input
          id="break-increment"
          className="button button_increment"
          type="button"
          name="break-increment"
          value="+"
          disabled={timerState === "stop" ? true : false}
          onClick={updateTimerLength}
        />
        <input
          id="break-decrement"
          className="button button_decrement"
          type="button"
          name="break-decrement"
          value="-"
          disabled={timerState === "stop" ? true : false}
          onClick={updateTimerLength}
        />
      </div>
    </div>
  );
};

export default BreakLenght;

// ********************************************
