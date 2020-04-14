import actionTypes from "./actionTypes";

export const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA:
      return { ...state, ...action.data };
    default:
      return state;
  }
};
