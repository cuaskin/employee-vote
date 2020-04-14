import React, { FC } from 'react';
import styles from './employees.module.scss';
import { connect } from 'react-redux';
import _ from 'lodash';
import Employee from './Employee';

interface IEmployeesProps {
  employees: IEmployee[];
}

const Employees: FC<IEmployeesProps> = ({ employees = [] }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Vote</th>
          <th>Voting</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {employees.map((employee) => (
          <Employee key={employee.id} employee={employee} />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  employees: _.sortBy(state.employees, ['vote']).reverse(),
});

export default connect(mapStateToProps)(Employees);
