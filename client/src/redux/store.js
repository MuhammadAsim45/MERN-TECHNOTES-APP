import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import { notesReducer } from "./reducers/notesReducer";
import thunk from "redux-thunk";
const store = createStore(
  combineReducers({ notesReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
