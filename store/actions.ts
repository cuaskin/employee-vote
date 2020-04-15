import actionTypes from './actionTypes';
import axios from 'axios';
import _ from 'lodash';
import saveEmployee from 'graphql/motations/saveEmployee';

const isServer = typeof window === 'undefined';
const isProd = process.env.NODE_ENV === 'production';

const API_HOST =
  isServer && isProd
    ? process.env.GRAPHQL_HOST
    : process.env.LOCAL_GRAPHQL_HOST;

export const setData = (data) => {
  return { type: actionTypes.SET_DATA, data };
};

export const fetchQuery = (body) => {
  return async (dispatch) => {
    await axios.post(API_HOST, body).then((res) => {
      if (res.status === 200) {
        dispatch(setData(_.get(res, 'data.data')));
      }
    });
  };
};

export const fetchVoting = (employee) => {
  return async (dispatch, getState) => {
    await axios
      .post(API_HOST, {
        query: saveEmployee,
        variables: { id: employee.id, vote: employee.vote + 1 },
      })
      .then((res) => {
        if (res.status === 200) {
          const _employee = _.get(res, 'data.data.saveEmployee');
          const employees = _.cloneDeep(getState().employees);
          employees.forEach((e) => {
            if (e.id === _employee.id) {
              e.vote = _employee.vote;
            }
          });
          dispatch(setData({ employees }));
        }
      });
  };
};
