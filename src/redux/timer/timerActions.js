import { START_TIMER, STOP_TIMER, RESET_TIMER, TICK_TIMER } from "./timerTypes";

export const startTimer = () => {
  return {
    type: START_TIMER,
  };
};

export const stopTimer = () => {
  return {
    type: STOP_TIMER,
  };
};

export const resetTimer = () => {
  return {
    type: RESET_TIMER,
  };
};

export const tickTimer = () => {
  return {
    type: TICK_TIMER,
  };
};
