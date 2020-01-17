import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";


import logger from "redux-logger";
import CounterReducer from "./reducer";
import rootReducer from "./rootReducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
  }


  const counterStore = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );

  export default counterStore;