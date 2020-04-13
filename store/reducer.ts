import actionTypes from "./actionTypes";

export const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, count: action.count };
    default:
      return state;
  }
};
