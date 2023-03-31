import { START_TIMER, STOP_TIMER, RESET_TIMER, TICK_TIMER } from "./timerTypes";

const initialState = {
  isRunning: false,
  value: 0,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        isRunning: false,
      };
    case STOP_TIMER:
      return {
        ...state,
        isRunning: false,
      };
    case RESET_TIMER:
      return {
        ...state,
        value: 0,
      };
    case TICK_TIMER:
      return {
        ...state,
        state: state.value + 1,
      };
    default:
      return state;
  }
};

export default timerReducer;
