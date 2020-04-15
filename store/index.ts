import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers, { initialState } from './reducer';

const isProd = process.env.NODE_ENV === 'production';

const middleware = isProd
  ? applyMiddleware(thunkMiddleware)
  : composeWithDevTools(applyMiddleware(thunkMiddleware));

export const initialStore = (state = initialState) => {
  return createStore(reducers, state, middleware);
};
