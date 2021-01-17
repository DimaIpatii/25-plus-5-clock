import { initialState } from "./initialState";

const BREAKE_INC = "BREAKE_INC";
const BREAKE_DEC = "BREAKE_DEC";
const SESSION_INC = "SESSION_INC";
const SESSION_DEC = "SESSION_DEC";
const TIMER_START = "TIMER_START";
const TIMER_STOP = "TIMER_STOP";
const TIMER_SESSION = "TIMER_SESSION";
const TIMER_BREAK = "TIMER_BREAK";
const RESET = "RESET";

export const reducer = (state, action) => {
  switch (action.type) {
    case BREAKE_INC:
      return { ...state, breakLength: incrememnt(Number(state.breakLength)) };

    case BREAKE_DEC:
      return { ...state, breakLength: decrement(Number(state.breakLength)) };

    case SESSION_INC:
      return {
        ...state,
        sessionLength: incrememnt(Number(state.sessionLength))
      };

    case SESSION_DEC:
      return {
        ...state,
        sessionLength: decrement(Number(state.sessionLength))
      };

    case TIMER_START:
      return { ...state, timerState: action.playload };

    case TIMER_STOP:
      return { ...state, timerState: action.playload };

    case TIMER_SESSION:
      return { ...state, timerLength: action.playload };

    case TIMER_BREAK:
      console.log("reduce", action.playload);
      return { ...state, timerLength: action.playload };

    case RESET:
      return { ...initialState };

    default:
      return state;
  }
};

const incrememnt = (sum) => {
  if (sum < 60) {
    return String(sum + 1);
  } else {
    return String(sum);
  }
};

const decrement = (sum) => {
  if (sum > 1) {
    return String(sum - 1);
  } else {
    return String(sum);
  }
};
