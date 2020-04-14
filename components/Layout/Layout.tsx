import React from "react";
import styles from "./layout.module.scss";

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <div className={styles.header}>
      <div className={styles.content}>
        <h1>Employess</h1>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  </div>
);

export default Layout;
