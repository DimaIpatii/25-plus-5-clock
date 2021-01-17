import React, { useEffect, useState, useReducer, useRef } from "react";

// Components:
import BreakLength from "./view/BreakLenght.js";
import SessionLength from "./view/SessionLenght.js";
import StartButton from "./view/StartButton.js";
import ResetButton from "./view/ReasetButton.js";
import TimerScreen from "./view/TimerScreen.js";

// Model:
import { playAudio } from "./model/playAudio.js";
import { numberConvertor } from "./model/numberConvertor.js";
// State:
import { initialState } from "./model/initialState.js";
import { reducer } from "./model/reducer.js";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentTimerMin, setCurrentTimerMin] = useState(state.sessionLength);
  const [currentTimerSec, setcurrentTimerSec] = useState("00");

  const countdown = useRef();
  // **********************************************************

  // Start/Stop Timer
  const timerState = (state) => {
    if (state === "start") {
      return dispatch({
        type: "TIMER_START",
        playload: "start"
      });
    }

    if (state === "stop") {
      return dispatch({
        type: "TIMER_STOP",
        playload: "stop"
      });
    }
  };

  // Switch between Break and Session Length:
  const updateTimerLength = () => {
    const length = state.timerLength === "Session" ? "Break" : "Session";

    if (length === "Session") {
      countdownValue(state.sessionLength);

      return dispatch({
        type: "TIMER_SESSION",
        playload: "Session"
      });
    }

    if (length === "Break") {
      countdownValue(state.breakLength);

      return dispatch({
        type: "TIMER_BREAK",
        playload: "Break"
      });
    }
  };

  // Update Session & Break length values:
  const updateSession = (e) => {
    e.preventDefault();
    const symbol = e.target.value;

    if (symbol === "+") {
      return dispatch({
        type: "SESSION_INC"
      });
    } else {
      return dispatch({
        type: "SESSION_DEC"
      });
    }
  };

  const updateBreak = (e) => {
    e.preventDefault();
    const symbol = e.target.value;

    if (symbol === "+") {
      return dispatch({
        type: "BREAKE_INC"
      });
    } else {
      return dispatch({
        type: "BREAKE_DEC"
      });
    }
  };

  // Reset:
  const reset = () => {
    playAudio(false);
    countdownValue(state.sessionLength);

    return dispatch({
      type: "RESET"
    });
  };
  // *****************************************

  const countdownValue = (minVal) => {
    const minutes = numberConvertor(Number(minVal));

    setCurrentTimerMin(minutes);
    setcurrentTimerSec("00");
  };

  // *****************************************

  // Consumes Minutes:
  useEffect(() => {
    setCurrentTimerMin((prevMin) => {
      let minutes = Number(prevMin);
      if (currentTimerSec === "59" && minutes > 0) {
        minutes -= 1;
      }

      return numberConvertor(minutes);
    });
  }, [currentTimerSec]);

  // Consumes Seconds:
  useEffect(() => {
    // run timer
    if (state.timerState === "stop") {
      countdown.current = setInterval(() => {
        setcurrentTimerSec((prevSec) => {
          let seconds = Number(prevSec);
          if (seconds === 0) {
            return "59";
          } else if (seconds > 0) {
            seconds -= 1;
          }

          return numberConvertor(seconds);
        });
      }, 1000);
    }

    return () => clearInterval(countdown.current);
  }, [state.timerState]);

  // Change Timer Status:
  useEffect(() => {
    if (currentTimerMin === "00" && currentTimerSec === "00") {
      playAudio(true);
      updateTimerLength();
    }
  }, [currentTimerMin, currentTimerSec]);

  useEffect(() => {
    if (state.timerLength === "Session") {
      countdownValue(state.sessionLength);
    }

    if (state.timerLength === "Break") {
      countdownValue(state.breakLength);
    }
  }, [state.sessionLength, state.breakLength, state.timerLength]);

  return (
    <div className="app-container">
      <TimerScreen
        min={currentTimerMin}
        sec={currentTimerSec}
        timerLength={state.timerLength}
      />

      <div className="controll-panel">
        <h1 className="logo">25 + 5 Clock</h1>
        <StartButton timerState={state.timerState} setTimerState={timerState} />
        <div className="length-constollers">
          <BreakLength
            breakLength={state.breakLength}
            timerState={state.timerState}
            updateTimerLength={updateBreak}
          />
          <ResetButton reset={reset} />
          <SessionLength
            sessionLength={state.sessionLength}
            timerState={state.timerState}
            updateTimerLength={updateSession}
          />
        </div>
      </div>

      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
}

export default App;
