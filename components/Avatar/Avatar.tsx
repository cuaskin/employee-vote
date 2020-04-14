import React, { FC } from 'react';
import styles from './avatar.module.scss';

interface IAvatarProps {
  employee: IEmployee;
}

const Avatar: FC<IAvatarProps> = React.memo(({ employee }) => {
  const { avatarUrl, firstName, lastName } = employee;
  return (
    <img
      className={styles.avatar}
      src={avatarUrl}
      alt={`${firstName} ${lastName}`}
    />
  );
});

export default Avatar;
