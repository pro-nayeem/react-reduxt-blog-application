import { combineReducers } from "redux";
import filterReducer from "../blogFilter/filterReducer";

const rootReducer = combineReducers({
  posts: filterReducer,
});

export default rootReducer;
