import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectToastText } from 'src/selectors/toast';
import { updateToast } from 'src/actions/toast';

import styles from './Toast.module.scss';

const Toast: React.FC = () => {
  const toastText = useSelector(selectToastText);
  const dispatch = useDispatch();

  const toastClasses = `${styles.toast} ${toastText ? styles.visible : styles.hidden}`;

  React.useEffect(() => {
    if (toastText) {
      setTimeout(() => dispatch(updateToast('')), 5000);
    }
  }, [toastText]);

  return (
    <div className={styles.toastContainer}>
      <div className={toastClasses}>
        {toastText}
      </div>
    </div>
  );
};

export default React.memo(Toast);
