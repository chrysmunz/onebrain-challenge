import counter from "./counter";
import { createStore, combineReducers } from "redux";

const allReducers = combineReducers({
  counter,
});

const store = createStore(allReducers);

export default store;