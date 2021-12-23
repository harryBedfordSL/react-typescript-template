import React from 'react';
import styles from './app.module.css';

export const App = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.appHeading}>WELCOME</div>
    </div>
  );
};