import React from 'react';
import { useDispatch } from 'react-redux';

import { WebSocketAPI } from 'src/services/webSocket';
import { Toast } from '../Toast';
import { updateToast } from 'src/actions/toast';

import styles from './Layout.module.scss';

type Props = {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const createConnect = async () => {
    try {
      await WebSocketAPI.createConnection(dispatch);
    } catch (error) {
      dispatch(updateToast('Connection attempt failed'));
    }
  }

  React.useEffect(() => {
    createConnect();
  }, []);

  return (
    <div>
      <Toast />
      <h3 className={styles.header}>Messages</h3>
      <main className={styles.main}>
        {props.children}
      </main>
    </div>
  );
}

export default React.memo(Layout);
