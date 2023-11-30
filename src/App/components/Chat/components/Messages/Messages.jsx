import React from 'react';

import styles from './Messages.module.scss';

const Messages = ({
  messages
}) => {
  return (
    <div>
      <div className={styles.statusBar}>Connection status: <span/></div>
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
