import React from 'react';

import styles from './Messages.module.scss';
import { useSelector } from 'react-redux';
import { selectConnectionStatus } from 'src/selectors/chat';

type Props = {
  messages: string[]
};

const Messages: React.FC<Props> = ({
  messages
}) => {
  const connectionStatus = useSelector(selectConnectionStatus);
  const status = connectionStatus ? 'Connected' : 'Disconnected';
  return (
    <div>
      <div className={styles.statusBar}>Connection status: {status}<span/></div>
      <div className={styles.messages}>
        {messages.map((text, idx) => (
          <div key={idx} className={styles.msgText}>{text}</div>
        ))}
        {!messages.length && <p className={styles.noMessages}>No messages yet</p>}
      </div>
    </div>
  )
};

export default React.memo(Messages);
