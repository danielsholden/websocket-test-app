import React from 'react';

import { useSelector } from 'react-redux';
import { selectConnectionStatus } from 'src/selectors/chat';
import { SafeHtmlParser } from 'src/components/App/components/SafeHtmlParser';

import styles from './Messages.module.scss';

type Props = {
  messages: string[]
};

const Messages: React.FC<Props> = ({
  messages
}) => {
  const isWsConnected = useSelector(selectConnectionStatus);
  const status = isWsConnected ? 'Connected' : 'Disconnected';
  return (
    <div>
      <div className={styles.statusBar}>Connection status: {status}
        <span className={isWsConnected ? styles.green : styles.red}/>
      </div>
      <div className={styles.messages}>
        {messages.map((text, idx) => (
          <div key={idx} className={styles.msgText}>
            <SafeHtmlParser>{text}</SafeHtmlParser>
          </div>
        ))}
        {!messages.length && <p className={styles.noMessages}>No messages yet</p>}
      </div>
    </div>
  )
};

export default React.memo(Messages);
