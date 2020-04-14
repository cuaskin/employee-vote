import React, { FC } from 'react';
import styles from './profile.module.scss';
import { connect } from 'react-redux';
import Flex from 'components/Flex';

interface IProfileProps {
  employee: IEmployee;
}

const Profile: FC<IProfileProps> = React.memo(({ employee }) => {
  return (
    <div className={styles.profile}>
      <Flex>
        <img src={employee.avatarUrl} alt="" />
        <div className={styles.about}>
          <h1>{[employee.firstName, employee.lastName].join(' ')}</h1>
          <h3>{employee.jobTitle}</h3>
          <Flex>
            <span>Email:</span>
            <span>{employee.email}</span>
          </Flex>
          <Flex>
            <span>Phone:</span>
            <span>{employee.phone}</span>
          </Flex>
          <Flex>
            <span>Address:</span>
            <span>{employee.address}</span>
          </Flex>
        </div>
      </Flex>
    </div>
  );
});

const mapStateToProps = (state) => ({
  employee: state.employee,
});
export default connect(mapStateToProps)(Profile);
