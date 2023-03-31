import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";
// import { connect, Connect } from "react-redux";
// import { buyIceCream } from "../redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h1> Number of Cakes - {props.numOfIceCream} </h1>
      <button onClick={props.buyIceCream}> Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
