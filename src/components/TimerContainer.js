import React from "react";
import { connect } from "react-redux";
import {
  startTimer,
  stopTimer,
  tickTimer,
  value,
  isRunning,
  reset,
  resetTimer,
} from "../redux";

export class TimerContainer extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.props.isRunning) {
        this.props.tickTimer();
      }
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { isRunning, value, startTimer, stopTimer, resetTimer, tickTimer } =
      this.props;
    return (
      <div>
        <h1>Timer : {value} seconds</h1>
        {isRunning ? (
          <button onClick={stopTimer}> Stop </button>
        ) : (
          <button onClick={startTimer}>Start</button>
        )}
        <button onClick={resetTimer}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isRunning: state.timer.isRunning,
    value: state.timer.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startTimer: () => dispatch(startTimer()),
    stopTimer: () => dispatch(stopTimer()),
    resetTimer: () => dispatch(resetTimer()),
    tickTimer: () => dispatch(tickTimer()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);
