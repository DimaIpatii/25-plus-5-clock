import React from "react";

const TimerScreen = ({ min, sec, timerLength }) => {
  return (
    <main className="timer">
      <h1 id="time-left" className="timer-screen">
        {`${min}:${sec}`}
      </h1>
      <h2 id="timer-label" className="timer-label">
        {timerLength}
      </h2>
    </main>
  );
};

export default TimerScreen;
