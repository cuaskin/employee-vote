import actionTypes from './actionTypes';
import axios from 'axios';
import _ from 'lodash';
import saveEmployee from 'graphql/motations/saveEmployee';

export const setData = (data) => {
  return { type: actionTypes.SET_DATA, data };
};

export const fetchQuery = (body) => {
  return async (dispatch) => {
    await axios.post('http://localhost:9002/graphql', body).then((res) => {
      if (res.status === 200) {
        dispatch(setData(_.get(res, 'data.data')));
      }
    });
  };
};

export const fetchVoting = (employee) => {
  return async (dispatch, getState) => {
    await axios
      .post('http://localhost:9002/graphql', {
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
