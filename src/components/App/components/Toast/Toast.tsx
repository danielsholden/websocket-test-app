import React from 'react';

import styles from './Toast.module.scss';

const Toast: React.FC = () => {
  const [showToast, setShowToast] = React.useState(false);
  const toastClasses = `${styles.toast} ${showToast ? styles.visible : styles.hidden}`;

  return (
    <div className={styles.toastContainer} onClick={() => setShowToast(!showToast)}>
      <div className={toastClasses}>
        Toast
      </div>
    </div>
  );
};

export default React.memo(Toast);
