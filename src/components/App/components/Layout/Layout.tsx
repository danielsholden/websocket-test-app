import React from 'react';

import { WebSocketAPI } from 'src/services/webSocket';

import styles from './Layout.module.scss';
import { useDispatch } from 'react-redux';

type Props = {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    WebSocketAPI.createConnection(dispatch);
  }, []);

  return (
    <div>
        <h3 className={styles.header}>Messages</h3>
        <main className={styles.main}>
          {props.children}
        </main>
      </div>
  );
}

export default React.memo(Layout);