import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../redux";

function CounterContainer(props) {
  return (
    <div>
      <h1>Count - {props.count}</h1>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
