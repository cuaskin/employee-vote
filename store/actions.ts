import actionTypes from "./actionTypes";

export const counter = (count) => {
  return { type: actionTypes.INCREMENT, count };
};
