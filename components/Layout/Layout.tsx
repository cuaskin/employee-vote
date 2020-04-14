import React from 'react';
import styles from './layout.module.scss';
import routes from 'routes';

const { Link } = routes;

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <div className={styles.header}>
      <div className={styles.content}>
        <Link route="/">
          <h1>Employess</h1>
        </Link>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  </div>
);

export default Layout;
