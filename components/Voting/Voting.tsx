import React, { FC } from 'react';
import { connect } from 'react-redux';
import styles from './voting.module.scss';
import { fetchVoting } from 'store/actions';

interface IVoting {
  employee: IEmployee;
  fetchVoting: IFetchVoting;
}

const Voting: FC<IVoting> = React.memo(({ employee, fetchVoting }) => (
  <button className={styles.voting} onClick={() => fetchVoting(employee)}>
    +
  </button>
));

export default connect(null, { fetchVoting })(Voting);
