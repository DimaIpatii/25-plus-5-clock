import React from "react";

const TimerScreen = ({ min, sec, timerLength }) => {
  return (
    <main className="screen">
      <h1 id="time-left" className="screen__timer">
        {`${min}:${sec}`}
      </h1>
      <h2 id="timer-label" className="screen__timer-state">
        {timerLength}
      </h2>
    </main>
  );
};

export default TimerScreen;
