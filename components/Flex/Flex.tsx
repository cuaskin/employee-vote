import React from 'react';
import styles from './flex.module.scss';

const Flex = React.memo(({ children }) => (
  <div className={styles.flex}>{children}</div>
));

export default Flex;
