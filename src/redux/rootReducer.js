import { combineReducers } from "redux";
import CounterReducer from "./reducer";

const rootReducer = combineReducers({
  CounterReducer: CounterReducer
});
export default rootReducer;