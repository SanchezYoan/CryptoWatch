import { combineReducers } from "redux";
import stableReducer from "./stable.reducer.js";
import listReducer from "./liste.reducer.js";

export default combineReducers({
  // Reducers
  stableReducer,
  listReducer,
});
