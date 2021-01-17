import React from "react";

const StartButton = ({ timerState, setTimerState }) => {
  return (
    <button
      id="start_stop"
      type="button"
      className={`button button_start ${timerState === "stop" ? "stop" : ""}`}
      onClick={() => setTimerState(timerState === "start" ? "stop" : "start")}
    >
      {timerState}
    </button>
  );
};

export default StartButton;
