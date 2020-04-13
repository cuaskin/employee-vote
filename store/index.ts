import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import reducers, { initialState } from "./reducer";

export const initialStore = (state = initialState) => {
  return createStore(
    reducers,
    state,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
