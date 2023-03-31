import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import counterReducer from "./counter/counterReducer";
import iceCreamReducer from "./icecream/iceCreamReducer";
import timerReducer from "./timer/timerReducer";
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  counter: counterReducer,
  timer: timerReducer,
});
export default rootReducer;
