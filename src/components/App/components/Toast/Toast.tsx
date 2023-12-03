import React from 'react';

import styles from './Toast.module.scss';

const Toast: React.FC = () => {
  const display = false;

  if (display) {
    return (
      <div className={styles.toastContainer}>
        <div className={`${styles.toast} ${styles.red}`}>
          Toast
        </div>
      </div>
    );
  };
};

export default React.memo(Toast);
