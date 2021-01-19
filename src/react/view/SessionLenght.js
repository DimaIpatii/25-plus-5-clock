import React, { useState, useEffect } from "react";

const SessionLenght = ({ sessionLength, timerState, updateTimerLength }) => {
  const [sessionVal, setSessionVal] = useState(sessionLength);

  useEffect(() => {
    setSessionVal(sessionLength);
  }, [sessionLength]);

  return (
    <div className="timer-controller__lenght">
      <h3 id="session-label" className="timer-controller__name">
        Session Length
      </h3>

      <div id="session-length" className="timer-controller__screen">
        {sessionVal}
      </div>

      <div className="timer-controller__buttons">
        <input
          id="session-increment"
          className="button button_increment"
          type="button"
          name="session-increment"
          value="+"
          disabled={timerState === "stop" ? true : false}
          onClick={updateTimerLength}
        />
        <input
          id="session-decrement"
          className="button button_decrement"
          type="button"
          name="session-decrement"
          value="-"
          disabled={timerState === "stop" ? true : false}
          onClick={updateTimerLength}
        />
      </div>
    </div>
  );
};

export default SessionLenght;

// ********************************************
