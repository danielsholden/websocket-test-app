import React from 'react';
import { useSelector } from 'react-redux';


import { selectMessages } from 'src/selectors/chat';
import { Message } from './components/Message';

import styles from './MessageList.module.scss';

const MessageList: React.FC = () => {
  const messages = useSelector(selectMessages);
  return (
    <div className={styles.messages}>
      {messages.map((message, idx) => <Message key={idx} text={message} />)}
      {!messages.length && <p className={styles.noMessages}>No messages yet</p>}
    </div>
  )
};

export default React.memo(MessageList);
