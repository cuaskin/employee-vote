import React, { FC } from 'react';
import Avatar from 'components/Avatar';
import Flex from 'components/Flex';
import Voting from 'components/Voting';
import _ from 'lodash';
import routes from 'routes';

const { Link } = routes;

interface IEmployeeProps {
  employee: IEmployee;
}

const Employee: FC<IEmployeeProps> = React.memo(({ employee }) => {
  return (
    <tr>
      <td>
        <Flex>
          <Avatar employee={employee} />
          <Link route={`/employee/${employee.id}`}>
            {[employee.firstName, employee.lastName].join(' ')}
          </Link>
        </Flex>
      </td>
      <td>{employee.jobTitle}</td>
      <td>{employee.vote}</td>
      <td>
        <Voting employee={employee} />
      </td>
    </tr>
  );
});

export default Employee;
