import React from 'react';
import { fetchQuery } from 'store/actions';
import Employees from 'components/Empyloyees';

import employees from 'graphql/queries/employees';

const HomePage = (props) => {
  return <Employees />;
};

HomePage.getInitialProps = async ({ reduxStore }) => {
  const { dispatch } = reduxStore;
  await dispatch(fetchQuery({ query: employees }));
  return {};
};

export default HomePage;
