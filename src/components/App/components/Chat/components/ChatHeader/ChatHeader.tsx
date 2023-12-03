import React from 'react';
import { useSelector } from 'react-redux';

import { selectConnectionStatus } from 'src/selectors/chat';

import styles from './ChatHeader.module.scss';

const ChatHeader: React.FC = () => {
  const isWsConnected = useSelector(selectConnectionStatus);
  const status = isWsConnected ? 'Connected' : 'Disconnected';

  return (
    <div className={styles.statusBar}>Connection status: {status}
      <span className={isWsConnected ? styles.green : styles.red}/>
    </div>
  )
};

export default React.memo(ChatHeader);
