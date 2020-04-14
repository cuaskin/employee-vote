import React from 'react';
import { fetchQuery } from 'store/actions';
import Profile from 'components/Profile';

import employee from 'graphql/queries/employee';

const ProfilePage = () => {
  return <Profile />;
};

ProfilePage.getInitialProps = async ({ reduxStore, query }) => {
  const { dispatch } = reduxStore;
  await dispatch(
    fetchQuery({
      query: employee,
      variables: {
        id: query.id,
      },
    })
  );
  return {};
};

export default ProfilePage;
